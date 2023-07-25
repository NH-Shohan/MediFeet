import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: true,
    },
    description: {
      type: String,
      // required: true,
    },
    // price: {
    //   type: Number,
    //   // required: [true, "Please enter product price"],
    // },
    // images: [
    //   {
    //     public_id: {
    //       type: String,
    //     },
    //     uri: {
    //       type: String,
    //     },
    //   },
    // ],
    // category: {
    //   type: String,
    //   // required: [true, "Please enter product category"],
    //   enum: {
    //     values: [
    //       "category1",
    //       "category2",
    //       "category3",
    //       "category4",
    //       "category5",
    //       "category6",
    //       "category7",
    //     ],
    //     message: "Please select correct category",
    //   },
    // },
    // seller: {
    //   type: String,
    //   // required: [true, "Please enter product seller"],
    // },
    // stock: {
    //   type: Number,
    //   // required: [true, "Please enter product stock"],
    // },
    // ratings: {
    //   type: Number,
    //   default: 0,
    // },
    // review: [
    //   {
    //     rating: {
    //       type: Number,
    //       // required: true,
    //     },
    //     comment: {
    //       type: String,
    //       // required: true,
    //     },
    //     createdAt: {
    //       type: Date,
    //       default: Date.now,
    //     },
    //   },
    // ],
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
