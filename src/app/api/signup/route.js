import { db } from "../../../lib/db";
import { hash } from "bcrypt";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../../lib/auth";

export async function POST(request) {
  try {
    const payload = await request.json();
    // console.log(payload);
    const { username, email, password } = payload;

    if (!username) {
      return NextResponse.json(
        { message: "Username is required" },
        { status: 400 }
      );
    } else if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    } else if (!password) {
      return NextResponse.json(
        { message: "Password is required" },
        { status: 400 }
      );
    }

    const usernameExist = await db.user.findUnique({
      where: { username: username },
    });

    if (usernameExist) {
      return NextResponse.json(
        { user: null, message: "User with this Username already exist" },
        { status: 400 }
      );
    }

    const emailExist = await db.user.findUnique({
      where: { email: email },
    });

    if (emailExist) {
      return NextResponse.json(
        { user: null, message: "User with this email already exist" },
        { status: 400 }
      );
    }

    const hashPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        username: username,
        email: email,
        password: hashPassword,
      },
    });

    return NextResponse.json(
      { user: newUser, message: "User Successfully Register" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Registration Failed" },
      { status: 500 }
    );
  }
}

export async function PATCH(request) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  const payload = await request.json();
  const { image } = payload;

  console.log("payload", { payload });

  if (!session) {
    return NextResponse.json({ message: "Unauthorized, please login" });
  }

  try {
    const profile = await db.user.update({
      where: {
        id: userId,
      },
      data: {
        username,
        email,
      },
    });
    if (profile) {
      return NextResponse.json(
        {
          message: "Profile successfully updated!",
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          message: "something went wrong",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
