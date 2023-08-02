import "express";
import { NextResponse } from "next/server";
import dbConnect from "../../../../backend/config/dbConnect";
import Address from "../../../../backend/models/address";

export async function GET(req, res) {
  try {
    await dbConnect();
    const id = req.url.split("/")?.[req.url.split("/").length - 1];

    if (!id) {
      return res.status(404).json({
        error: "ID is not given!",
      });
    }

    const address = await Address.findById(id);

    if (!address) {
      res.status(404).json({
        error: "address not found.",
      });
    }

    return NextResponse.json(
      {
        message: "address got successfully!",
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
        message: "Error finding address",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
