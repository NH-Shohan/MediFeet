"use client";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Button } from "../Button/Button";

const GridProducts = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  console.log(product);

  const addToCartHandler = () => {
    addItemToCart({
      product: product._id,
      name: product.name,
      price: product.price,
      image: product.images[0].uri,
      stock: product.stock,
      seller: product.seller,
    });
  };

  return (
    <article className="overflow-hidden relative hover:bg-gray-50 shadow-sm rounded-xl mb-5 w-60 h-[25rem] p-2">
      <div className="">
        <div className="">
          <div>
            <Image
              src={
                product.images[0]
                  ? product.images[0].uri
                  : "/default_product.png"
              }
              alt={`${product.name} image`}
              height="240"
              width="240"
            />
          </div>
        </div>
        <div className="">
          <Link
            href={`/product/${product._id}`}
            className="hover:text-blue-600"
          >
            {product.name}
          </Link>
          <div className="flex flex-wrap items-center">
            <div className="ratings">
              <div className="my-1">
                <div>
                  <Rating
                    style={{ maxWidth: 70 }}
                    readOnly
                    value={product.ratings}
                  />
                </div>
              </div>
            </div>
            <b className="text-gray-300">•</b>
            <p className="ml-1 text-yellow-500 text-sm">{product?.ratings}</p>
          </div>
        </div>
        <div className="">
          <span className="text-lg font-semibold text-black">
            $ {product?.price}
          </span>

          <div className="mb-3 w-[93%] absolute bottom-0">
            <Button
              className={"w-full rounded-lg"}
              onclick={addToCartHandler}
              text={"Add to Cart"}
              bgColor={"bg-secondary"}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default GridProducts;
