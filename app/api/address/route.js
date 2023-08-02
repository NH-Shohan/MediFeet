import "express";
import { NextResponse } from "next/server";
import dbConnect from "../../../backend/config/dbConnect";
import Address from "../../../backend/models/address";

export async function POST(req) {
  try {
    const body = await req.json();
    await dbConnect();

    const address = await Address.create(body);
    address.save();
    return NextResponse.json(
      {
        message: "address created successfully!",
        address,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Error creating address",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

// Find address
export async function GET(req) {
  try {
    await dbConnect();

    const address = await Address.find();
    return NextResponse.json(
      {
        message: "address created successfully!",
        address,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Error creating address",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
