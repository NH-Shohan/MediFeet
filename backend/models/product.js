import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    images: [
      {
        public_id: {
          type: String,
        },
        uri: {
          type: String,
        },
      },
    ],
    category: {
      type: String,
      enum: {
        values: [
          "Arch Pain",
          "Arthritis",
          "Back Discomfort",
          "Diabetes",
          "Forefoot Pain",
          "Plantar Fasciitis",
          "Spine Discomfort"
        ],
        message: "Please select correct category",
      },
    },
    seller: {
      type: String,
    },
    stock: {
      type: Number,
    },
    ratings: {
      type: Number,
      default: 0,
    },
    review: [
      {
        rating: {
          type: Number,
        },
        comment: {
          type: String,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const productCollection = mongoose.models.productCollection || new mongoose.model("productCollection", productSchema);
export default productCollection;
