import { NextResponse } from "next/server";
import { db } from "../../../lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";

export async function GET() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  console.log("session", {session});

  if (!session) {
    return NextResponse.json({ message: "Unauthorized, please login" });
  }

  try {
    const userInfo = await db.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (userInfo) {
      return NextResponse.json(
        {
          data: userInfo,
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
