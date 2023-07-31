import "express";
import { NextResponse } from "next/server";
import dbConnect from "../../../backend/config/dbConnect";
import Product from "../../../backend/models/product";

export async function POST(req) {
  try {
    const body = await req.json();
    await dbConnect();
    const {
      name,
      description,
      price,
      category,
      seller,
      stock,
      ratings,
      images,
      review,
    } = body;
    const product = await Product.create({
      name,
      description,
      price,
      category,
      seller,
      stock,
      ratings,
      images,
      review,
    });
    product.save();
    return NextResponse.json(
      {
        message: "Product created successfully!",
        product,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);
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

    const product = await Product.find({});
    return NextResponse.json(
      {
        message: "Product created successfully!",
        product,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);
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
