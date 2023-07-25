import Image from "next/image";
import Link from "next/link";

export default function Card({
  image,
  code,
  name,
  price,
  color,
  type,
  recomendedFor,
}) {
  return (
    <div>
      <Link href={"/women/productDetails"}>
        <div className="group w-fit mx-auto p-4 text-center relative">
          <div className="absolute right-4 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
            <div className="shadow-md p-2 pt-3 flex justify-center items-center rounded-md cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.5003 12.5719L12.0003 19.9999L4.5003 12.5719C4.00561 12.0905 3.61594 11.5119 3.35585 10.8726C3.09575 10.2332 2.97086 9.54688 2.98904 8.85687C3.00721 8.16685 3.16806 7.48807 3.46146 6.86327C3.75485 6.23847 4.17444 5.68119 4.69379 5.22651C5.21314 4.77184 5.82101 4.42962 6.47911 4.22141C7.13722 4.01321 7.83131 3.94352 8.51767 4.01673C9.20403 4.08995 9.8678 4.30449 10.4672 4.64684C11.0666 4.98919 11.5885 5.45193 12.0003 6.00593C12.4138 5.45595 12.9364 4.99725 13.5354 4.65854C14.1344 4.31982 14.7968 4.10838 15.4812 4.03745C16.1657 3.96652 16.8574 4.03763 17.5131 4.24632C18.1688 4.45502 18.7743 4.79681 19.2919 5.2503C19.8094 5.70379 20.2277 6.25922 20.5207 6.88182C20.8137 7.50443 20.975 8.18082 20.9946 8.86864C21.0142 9.55647 20.8916 10.2409 20.6344 10.8792C20.3773 11.5174 19.9912 12.0958 19.5003 12.5779"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="shadow-md p-2 pt-3 flex justify-center items-center rounded-md cursor-pointer mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M19 19L13 13M1 8C1 8.91925 1.18106 9.82951 1.53284 10.6788C1.88463 11.5281 2.40024 12.2997 3.05025 12.9497C3.70026 13.5998 4.47194 14.1154 5.32122 14.4672C6.1705 14.8189 7.08075 15 8 15C8.91925 15 9.82951 14.8189 10.6788 14.4672C11.5281 14.1154 12.2997 13.5998 12.9497 12.9497C13.5998 12.2997 14.1154 11.5281 14.4672 10.6788C14.8189 9.82951 15 8.91925 15 8C15 7.08075 14.8189 6.1705 14.4672 5.32122C14.1154 4.47194 13.5998 3.70026 12.9497 3.05025C12.2997 2.40024 11.5281 1.88463 10.6788 1.53284C9.82951 1.18106 8.91925 1 8 1C7.08075 1 6.1705 1.18106 5.32122 1.53284C4.47194 1.88463 3.70026 2.40024 3.05025 3.05025C2.40024 3.70026 1.88463 4.47194 1.53284 5.32122C1.18106 6.1705 1 7.08075 1 8Z"
                  stroke="#231F20"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <Image
            className="rounded-2xl m-auto"
            src={image}
            width={250}
            height={100}
            alt="Hero Section"
          />
          <button className="bg-secondary text-white px-3 py-1 w-[100%] mb-3 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            ADD TO CART
          </button>
          <p>{code}</p>
          <p>{name}</p>
          <b>{price}</b>
          <br />
          <div className="flex justify-center w-100 mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="8" fill={color} />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}
