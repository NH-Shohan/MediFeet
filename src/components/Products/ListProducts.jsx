"use client";

import { useState } from "react";
import Filters from "../layouts/Filters";
import Search from "../layouts/Search";
import GridProducts from "./GridProducts";
import ProductItem from "./ProductItem";

export default function ListProducts({ data }) {
  const [grid, setGrid] = useState(true);
  return (
    <section className="py-12">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row -mx-4">
          <Filters />

          <main className="md:w-2/3 lg:w-3/4 px-3">
            <div className="flex justify-between">
              <Search />
              <div className="flex gap-2 justify-center items-center">
                <i
                  onClick={() => setGrid(true)}
                  className="fa-solid fa-table-cells-large text-2xl hover:text-primary hover:bg-gray-200 p-2 cursor-pointer rounded-lg border"
                ></i>
                <i
                  onClick={() => setGrid(false)}
                  className="fa-solid fa-list text-2xl hover:text-primary hover:bg-gray-200 p-2 cursor-pointer rounded-lg border"
                ></i>
              </div>
            </div>

            {grid ? (
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {data?.product?.map((product) => (
                  <GridProducts key={product?._id} product={product} />
                ))}
              </div>
            ) : (
              <>
                {data?.product?.map((product) => (
                  <ProductItem key={product?._id} product={product} />
                ))}
              </>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}
