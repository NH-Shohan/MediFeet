import "express";
import { NextResponse } from "next/server";
import dbConnect from "../../../backend/config/dbConnect";
import Product from "../../../backend/models/product";

// app.use(bodyParser).json();

export async function POST(req) {
  try {
    const body = req.body;
    await dbConnect();
    const { name, description } = req.json(body);
    console.log(name);
    console.log(description);
    const product = await Product.create({
      name,
      description,
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
