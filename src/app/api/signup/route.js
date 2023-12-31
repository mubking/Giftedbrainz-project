import { db } from "../../../lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const payload = await request.json();
    console.log(payload);
    const { username, email, password } = payload;

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
