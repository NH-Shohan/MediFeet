import { NextResponse } from "next/server";
import dbConnect from "../../../../backend/config/dbConnect";
import User from "../../../../backend/models/user";

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const { name, email, password } = body;
    const user = await User.create({
      name,
      email,
      password,
    });
    user.save();
    return NextResponse.json(
      {
        message: "Product created successfully!",
        user,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error creating product",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(req) {
  try {
    await dbConnect();

    const user = await User.find();
    return NextResponse.json(
      {
        message: "user created successfully!",
        user,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Error creating user",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
