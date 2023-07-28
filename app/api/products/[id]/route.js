import "express";
import { NextResponse } from "next/server";
import dbConnect from "../../../../backend/config/dbConnect";
import Product from "../../../../backend/models/product";

export async function GET(req, res) {
  try {
    await dbConnect();
    const id = req.url.split("/")?.[req.url.split('/').length - 1];
    
    if (!id) {
        return res.status(404).json(
            {
                error: "ID is not given!"
            }
        )
    } 
    
    const product = await Product.findById(id);

    if (!product) {
      res.status(404).json({
        error: "Product not found.",
      });
    }

    return NextResponse.json(
      {
        message: "Product got successfully!",
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
        message: "Error finding product",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
