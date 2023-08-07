"use client";
import { Button } from "@/components/layouts/Button";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import about2 from "../../../public/about2.png";
import shoe from "../../../public/shoe.png";

export default function page() {
  return (
    <div>
      <div className="shadow w-[80%] h-32 my-10 mx-auto rounded-2xl flex justify-center items-center">
        <p className="text-3xl uppercase text-secondary font-bold">Clientele</p>
      </div>

      <section className="mx-[10%] grid md:grid-cols-2 gap-10 my-16">
        <div className="flex flex-col justify-center">
          <h1 className="mb-7 text-4xl uppercase text-secondary font-bold">
            The Trusted Choice for Professionals in Comfortable Footwear
          </h1>
          <p className="text-xl">
            At Medifeet Singapore, we understand the demands and challenges
            faced by professionals in high-intensity fields such as nursing.
            Long hours on your feet, constant movement, and the need for
            exceptional comfort are all essential factors when it comes to
            choosing the right footwear. That is why our shoes have become the
            go-to choice for professionals who prioritize both style and
            comfort.
          </p>
        </div>
        <Image src={about2} alt="about image" className="w-full" />
      </section>

      <section className="bg-primary px-[10%] py-10 text-white">
        <Swiper
          // spaceBetween={50}
          slidesPerView={1}
          pagination={true}
          keyboard={true}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Keyboard, Autoplay]}

          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="flex slider justify-center items-center gap-10 w-[700px]">
            <div className="grid md:grid-cols-2 gap-10 my-16 p-3">
              <Image src={about2} alt="about image" className="w-full" />
              <div className="flex flex-col justify-center">
                <p className="mb-10 text-lg font-light">
                  At Medifeet Singapore, we understand the demands and
                  challenges faced by professionals in high-intensity fields
                  such as nursing. Long hours on your feet, constant movement,
                  and the need for exceptional comfort are all essential factors
                  when it comes to choosing the right footwear. That is why our
                  shoes have become the go-to choice for professionals who
                  prioritize both style and comfort.
                </p>
                <h1 className="text-2xl uppercase mb-2">Liza Lorem Ipsum</h1>
                <p>Chief Nurse Executive, Lorem Ipsum Hospital</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex slider justify-center items-center gap-10 w-[700px]">
            <div className="grid md:grid-cols-2 gap-10 my-16 p-3">
              <Image src={about2} alt="about image" className="w-full" />
              <div className="flex flex-col justify-center">
                <p className="mb-10 text-lg font-light">
                  At Medifeet Singapore, we understand the demands and
                  challenges faced by professionals in high-intensity fields
                  such as nursing. Long hours on your feet, constant movement,
                  and the need for exceptional comfort are all essential factors
                  when it comes to choosing the right footwear. That is why our
                  shoes have become the go-to choice for professionals who
                  prioritize both style and comfort.
                </p>
                <h1 className="text-2xl uppercase mb-2">Liza Lorem Ipsum</h1>
                <p>Chief Nurse Executive, Lorem Ipsum Hospital</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex slider justify-center items-center gap-10 w-[700px]">
            <div className="grid md:grid-cols-2 gap-10 my-16 p-3">
              <Image src={about2} alt="about image" className="w-full" />
              <div className="flex flex-col justify-center">
                <p className="mb-10 text-lg font-light">
                  At Medifeet Singapore, we understand the demands and
                  challenges faced by professionals in high-intensity fields
                  such as nursing. Long hours on your feet, constant movement,
                  and the need for exceptional comfort are all essential factors
                  when it comes to choosing the right footwear. That is why our
                  shoes have become the go-to choice for professionals who
                  prioritize both style and comfort.
                </p>
                <h1 className="text-2xl uppercase mb-2">Liza Lorem Ipsum</h1>
                <p>Chief Nurse Executive, Lorem Ipsum Hospital</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="mx-[10%]">
        <div>
          <Swiper
            // spaceBetween={50}
            slidesPerView={"auto"}
            navigation={true}
            keyboard={true}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Keyboard, Autoplay]}

            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className="flex slider justify-center items-center gap-10">
              <div className="w-[400px] my-[30px] mx-auto shadow p-7 rounded-lg flex flex-col justify-between">
                <p className="overflow-hidden text-ellipsis h-[350px]">
                  I came across Medifeet last year and loved that their shoes
                  were comfortable yet affordable. This year, I was looking for
                  a pair of sports shoes. The online shopping experience was
                  very easy and the interface was intuitive. I definitely will
                  shop online for their shoes again. Comfortable and affordable.
                  Delivery was great too.
                </p>
                <div>
                  <h1 className="text-2xl font-semibold">Juliana Teo</h1>
                  <p>Lorem Ipsum School - Teacher</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex slider justify-center items-center gap-10">
              <div className="w-[400px] my-[30px] mx-auto shadow p-7 rounded-lg flex flex-col justify-between">
                <p className="overflow-hidden text-ellipsis h-[350px]">
                  I came across Medifeet last year and loved that their shoes
                  were comfortable yet affordable. This year, I was looking for
                  a pair of sports shoes. The online shopping experience was
                  very easy and the interface was intuitive. I definitely will
                  shop online for their shoes again. Comfortable and affordable.
                  Delivery was great too.
                </p>
                <div>
                  <h1 className="text-2xl font-semibold">Juliana Teo</h1>
                  <p>Lorem Ipsum School - Teacher</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex slider justify-center items-center gap-10">
              <div className="w-[400px] my-[30px] mx-auto shadow p-7 rounded-lg flex flex-col justify-between">
                <p className="overflow-hidden text-ellipsis h-[350px]">
                  I came across Medifeet last year and loved that their shoes
                  were comfortable yet affordable. This year, I was looking for
                  a pair of sports shoes. The online shopping experience was
                  very easy and the interface was intuitive. I definitely will
                  shop online for their shoes again. Comfortable and affordable.
                  Delivery was great too.
                </p>
                <div>
                  <h1 className="text-2xl font-semibold">Juliana Teo</h1>
                  <p>Lorem Ipsum School - Teacher</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex slider justify-center items-center gap-10">
              <div className="w-[400px] my-[30px] mx-auto shadow p-7 rounded-lg flex flex-col justify-between">
                <p className="overflow-hidden text-ellipsis h-[350px]">
                  I came across Medifeet last year and loved that their shoes
                  were comfortable yet affordable. This year, I was looking for
                  a pair of sports shoes. The online shopping experience was
                  very easy and the interface was intuitive. I definitely will
                  shop online for their shoes again. Comfortable and affordable.
                  Delivery was great too.
                </p>
                <div>
                  <h1 className="text-2xl font-semibold">Juliana Teo</h1>
                  <p>Lorem Ipsum School - Teacher</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="shadow w-[80%] my-10 mx-auto rounded-2xl flex justify-center items-center">
        <section className="px-10 grid md:grid-cols-2 gap-10 my-5">
          <Image src={shoe} alt="about image" className="w-full" />
          <div className="flex flex-col justify-center">
            <p className="sm:text-2xl md:text-5xl uppercase text-secondary font-bold mt-5">
              Discover Your Perfect Pair of MediFeet Footwear
              <span className="font-normal"> in the Latest Collection</span>
            </p>
            <div className="flex sm:flex-col md:flex-row gap-5 mt-5">
              <Button
                className={"uppercase md:w-fit"}
                text={"SHOp women"}
                bgColor={"bg-primary"}
              />
              <Button
                className={"uppercase md:w-fit"}
                text={"SHOp men"}
                bgColor={"bg-secondary"}
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
