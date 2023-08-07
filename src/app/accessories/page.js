import Filter from "@/components/layouts/Filter";
import ProductCard from "@/components/ProductCard/ProductCard";

export default function Accessories() {
  return (
    <div>
      <div className="flex justify-center items-center my-10">
        <p className="text-2xl font-bold">HOME</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M20 14L30 24L20 34"
            stroke="#231F20"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-2xl font-bold text-secondary uppercase">
          Accessories
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="flex flex-col justify-center items-center w-fit p-5">
          <div className="bg-text w-40 h-40 rounded-full flex justify-center items-center text-[#e4e4e4]">
            A
          </div>
          <p className="mt-4 font-bold text-xl">Heels</p>
        </div>

        <div className="flex flex-col justify-center items-center w-fit p-5">
          <div className="bg-text w-40 h-40 rounded-full flex justify-center items-center text-[#e4e4e4]">
            A
          </div>
          <p className="mt-4 font-bold text-xl">Heels</p>
        </div>

        <div className="flex flex-col justify-center items-center w-fit p-5">
          <div className="bg-text w-40 h-40 rounded-full flex justify-center items-center text-[#e4e4e4]">
            A
          </div>
          <p className="mt-4 font-bold text-xl">Heels</p>
        </div>

        <div className="flex flex-col justify-center items-center w-fit p-5">
          <div className="bg-text w-40 h-40 rounded-full flex justify-center items-center text-[#e4e4e4]">
            A
          </div>
          <p className="mt-4 font-bold text-xl">Heels</p>
        </div>

        <div className="flex flex-col justify-center items-center w-fit p-5">
          <div className="bg-text w-40 h-40 rounded-full flex justify-center items-center text-[#e4e4e4]">
            A
          </div>
          <p className="mt-4 font-bold text-xl">Heels</p>
        </div>
      </div>

      <div className="px-[10%] grid grid-cols-12 my-10 gap-7">
        <Filter className="col-span-3" />
        <ProductCard className="col-span-9" />
      </div>
    </div>
  );
}
