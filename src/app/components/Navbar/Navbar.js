"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../Button/Button";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="w-full backdrop-blur-[100px] sticky top-0 left-0 right-0 z-10 shadow-lg px-[10%]">
        <div className="justify-between mx-auto md:items-center md:flex md:px-8">
          <div className="">
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <div>
                  <Image src="/logo.png" alt="Logo" width="190" height="65" />
                </div>
              </Link>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 rounded-md outline-0"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-2 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <Link href="/women" onClick={() => setNavbar(!navbar)}>
                  <li className="text-xl text-black sm:py-3 md:py-0 md:px-6 text-center border-b-2 md:border-b-0 border-secondary hover:text-secondary">
                    Women
                  </li>
                </Link>

                <Link href="/man" onClick={() => setNavbar(!navbar)}>
                  <li className="text-xl text-black sm:py-3 md:py-0 md:px-6 text-center border-b-2 md:border-b-0 border-secondary hover:text-secondary">
                    Men
                  </li>
                </Link>

                <Link href="/accessories" onClick={() => setNavbar(!navbar)}>
                  <li className="text-xl text-black sm:py-3 md:py-0 md:px-6 text-center border-b-2 md:border-b-0 border-secondary hover:text-secondary">
                    Accessories
                  </li>
                </Link>

                <Link href="/technologies" onClick={() => setNavbar(!navbar)}>
                  <li className="text-xl text-black sm:py-3 md:py-0 md:px-6 text-center border-b-2 md:border-b-0 border-secondary hover:text-secondary">
                    Technologies
                  </li>
                </Link>

                <Link href="/outlets" onClick={() => setNavbar(!navbar)}>
                  <li className="text-xl text-black sm:py-3 md:py-0 md:px-6 text-center border-b-2 md:border-b-0 border-secondary hover:text-secondary">
                    Outlets
                  </li>
                </Link>

                <div className="flex sm:justify-center items-center sm:pt-6 md:pt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="mx-[10px] cursor-pointer"
                  >
                    <path
                      d="M31 31L21 21M1 12.6667C1 14.1988 1.30177 15.7158 1.88807 17.1313C2.47438 18.5468 3.33374 19.8329 4.41709 20.9162C5.50044 21.9996 6.78656 22.859 8.20203 23.4453C9.61749 24.0316 11.1346 24.3333 12.6667 24.3333C14.1988 24.3333 15.7158 24.0316 17.1313 23.4453C18.5468 22.859 19.8329 21.9996 20.9162 20.9162C21.9996 19.8329 22.859 18.5468 23.4453 17.1313C24.0316 15.7158 24.3333 14.1988 24.3333 12.6667C24.3333 11.1346 24.0316 9.61749 23.4453 8.20203C22.859 6.78656 21.9996 5.50044 20.9162 4.41709C19.8329 3.33374 18.5468 2.47438 17.1313 1.88807C15.7158 1.30177 14.1988 1 12.6667 1C11.1346 1 9.61749 1.30177 8.20203 1.88807C6.78656 2.47438 5.50044 3.33374 4.41709 4.41709C3.33374 5.50044 2.47438 6.78656 1.88807 8.20203C1.30177 9.61749 1 11.1346 1 12.6667Z"
                      stroke="#231F20"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="mx-[10px] cursor-pointer"
                  >
                    <path
                      d="M32.5002 20.9534L20.0002 33.3334L7.50018 20.9534C6.67569 20.1511 6.02625 19.1867 5.59276 18.1211C5.15926 17.0555 4.95111 15.9116 4.98141 14.7616C5.0117 13.6116 5.27978 12.4803 5.76877 11.4389C6.25776 10.3976 6.95707 9.46881 7.82265 8.71102C8.68824 7.95323 9.70135 7.38287 10.7982 7.03585C11.895 6.68884 13.0519 6.57269 14.1958 6.69472C15.3397 6.81675 16.446 7.17431 17.445 7.74489C18.4439 8.31548 19.3139 9.08672 20.0002 10.01C20.6894 9.09342 21.5604 8.32892 22.5587 7.76439C23.5569 7.19986 24.661 6.84747 25.8017 6.72925C26.9425 6.61103 28.0953 6.72955 29.1881 7.07737C30.281 7.42519 31.2902 7.99484 32.1528 8.75066C33.0153 9.50647 33.7126 10.4322 34.2009 11.4699C34.6892 12.5076 34.9581 13.6349 34.9907 14.7812C35.0233 15.9276 34.8189 17.0684 34.3904 18.1321C33.9619 19.1959 33.3184 20.1598 32.5002 20.9634"
                      stroke="#231F20"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="mx-[10px] cursor-pointer"
                  >
                    <path
                      d="M10.5515 13.3333H29.4498C29.9305 13.3332 30.4054 13.4371 30.8421 13.6378C31.2788 13.8384 31.667 14.1312 31.9799 14.4959C32.2929 14.8607 32.5233 15.2888 32.6553 15.7509C32.7874 16.213 32.8179 16.6982 32.7448 17.1733L30.6532 30.7599C30.4716 31.9407 29.8733 33.0174 28.9665 33.7951C28.0597 34.5729 26.9045 35.0003 25.7098 34.9999H14.2898C13.0955 34.9999 11.9406 34.5723 11.0342 33.7946C10.1278 33.0169 9.52971 31.9404 9.34817 30.7599L7.25651 17.1733C7.18345 16.6982 7.21399 16.213 7.34601 15.7509C7.47804 15.2888 7.70844 14.8607 8.02141 14.4959C8.33439 14.1312 8.72253 13.8384 9.15924 13.6378C9.59595 13.4371 10.0709 13.3332 10.5515 13.3333Z"
                      stroke="#231F20"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15 18.3333V10C15 8.67392 15.5268 7.40215 16.4645 6.46447C17.4021 5.52678 18.6739 5 20 5C21.3261 5 22.5979 5.52678 23.5355 6.46447C24.4732 7.40215 25 8.67392 25 10V18.3333"
                      stroke="#231F20"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <Button bgColor="bg-secondary" text={"Log In / Register"} />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Real */}
      {/* <nav className="flex justify-between items-center px-[10%] h-[100px] shadow-md">
        <Link href="/">
          <div>
            <Image src="/logo.png" alt="Logo" width="190" height="65" />
          </div>
        </Link>

        <div>
          <Link className="mx-[15px] font-bold text-lg uppercase" href="/women">
            Women
          </Link>
          <Link className="mx-[15px] font-bold text-lg uppercase" href="/man">
            Men
          </Link>
          <Link
            className="mx-[15px] font-bold text-lg uppercase"
            href="/accessories"
          >
            Accessories
          </Link>
          <Link
            className="mx-[15px] font-bold text-lg uppercase"
            href="/technologies"
          >
            Technologies
          </Link>
          <Link
            className="mx-[15px] font-bold text-lg uppercase"
            href="/outlets"
          >
            Outlets
          </Link>
        </div>

        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 32 32"
            fill="none"
            className="mx-[10px] cursor-pointer"
          >
            <path
              d="M31 31L21 21M1 12.6667C1 14.1988 1.30177 15.7158 1.88807 17.1313C2.47438 18.5468 3.33374 19.8329 4.41709 20.9162C5.50044 21.9996 6.78656 22.859 8.20203 23.4453C9.61749 24.0316 11.1346 24.3333 12.6667 24.3333C14.1988 24.3333 15.7158 24.0316 17.1313 23.4453C18.5468 22.859 19.8329 21.9996 20.9162 20.9162C21.9996 19.8329 22.859 18.5468 23.4453 17.1313C24.0316 15.7158 24.3333 14.1988 24.3333 12.6667C24.3333 11.1346 24.0316 9.61749 23.4453 8.20203C22.859 6.78656 21.9996 5.50044 20.9162 4.41709C19.8329 3.33374 18.5468 2.47438 17.1313 1.88807C15.7158 1.30177 14.1988 1 12.6667 1C11.1346 1 9.61749 1.30177 8.20203 1.88807C6.78656 2.47438 5.50044 3.33374 4.41709 4.41709C3.33374 5.50044 2.47438 6.78656 1.88807 8.20203C1.30177 9.61749 1 11.1346 1 12.6667Z"
              stroke="#231F20"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 40 40"
            fill="none"
            className="mx-[10px] cursor-pointer"
          >
            <path
              d="M32.5002 20.9534L20.0002 33.3334L7.50018 20.9534C6.67569 20.1511 6.02625 19.1867 5.59276 18.1211C5.15926 17.0555 4.95111 15.9116 4.98141 14.7616C5.0117 13.6116 5.27978 12.4803 5.76877 11.4389C6.25776 10.3976 6.95707 9.46881 7.82265 8.71102C8.68824 7.95323 9.70135 7.38287 10.7982 7.03585C11.895 6.68884 13.0519 6.57269 14.1958 6.69472C15.3397 6.81675 16.446 7.17431 17.445 7.74489C18.4439 8.31548 19.3139 9.08672 20.0002 10.01C20.6894 9.09342 21.5604 8.32892 22.5587 7.76439C23.5569 7.19986 24.661 6.84747 25.8017 6.72925C26.9425 6.61103 28.0953 6.72955 29.1881 7.07737C30.281 7.42519 31.2902 7.99484 32.1528 8.75066C33.0153 9.50647 33.7126 10.4322 34.2009 11.4699C34.6892 12.5076 34.9581 13.6349 34.9907 14.7812C35.0233 15.9276 34.8189 17.0684 34.3904 18.1321C33.9619 19.1959 33.3184 20.1598 32.5002 20.9634"
              stroke="#231F20"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 40 40"
            fill="none"
            className="mx-[10px] cursor-pointer"
          >
            <path
              d="M10.5515 13.3333H29.4498C29.9305 13.3332 30.4054 13.4371 30.8421 13.6378C31.2788 13.8384 31.667 14.1312 31.9799 14.4959C32.2929 14.8607 32.5233 15.2888 32.6553 15.7509C32.7874 16.213 32.8179 16.6982 32.7448 17.1733L30.6532 30.7599C30.4716 31.9407 29.8733 33.0174 28.9665 33.7951C28.0597 34.5729 26.9045 35.0003 25.7098 34.9999H14.2898C13.0955 34.9999 11.9406 34.5723 11.0342 33.7946C10.1278 33.0169 9.52971 31.9404 9.34817 30.7599L7.25651 17.1733C7.18345 16.6982 7.21399 16.213 7.34601 15.7509C7.47804 15.2888 7.70844 14.8607 8.02141 14.4959C8.33439 14.1312 8.72253 13.8384 9.15924 13.6378C9.59595 13.4371 10.0709 13.3332 10.5515 13.3333Z"
              stroke="#231F20"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 18.3333V10C15 8.67392 15.5268 7.40215 16.4645 6.46447C17.4021 5.52678 18.6739 5 20 5C21.3261 5 22.5979 5.52678 23.5355 6.46447C24.4732 7.40215 25 8.67392 25 10V18.3333"
              stroke="#231F20"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <Button bgColor="bg-secondary" text={"Log In / Register"} />
        </div>
      </nav> */}
    </>
  );
};
