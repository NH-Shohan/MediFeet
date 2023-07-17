import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../Button/Button";

export default function InnovativeTechnologies() {
  return (
    <>
      <Swiper
        // spaceBetween={50}
        slidesPerView={"auto"}
        keyboard={true}
        autoplay={{
          delay: 2200,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        modules={[Keyboard, Autoplay]}

        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="flex justify-center">
          <div className="text-center">
            <Image src="/tech1.png" alt="Image" width="300" height="300" />
            <h1 className="text-3xl mt-4">Name of shoe</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="text-center">
            <Image src="/tech2.png" alt="Image" width="300" height="300" />
            <h1 className="text-3xl mt-4">Name of shoe</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="text-center">
            <Image src="/tech3.png" alt="Image" width="300" height="300" />
            <h1 className="text-3xl mt-4">Name of shoe</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="text-center">
            <Image src="/tech4.png" alt="Image" width="300" height="300" />
            <h1 className="text-3xl mt-4">Name of shoe</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="text-center">
            <Image src="/tech5.png" alt="Image" width="300" height="300" />
            <h1 className="text-3xl mt-4">Name of shoe</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="text-center">
            <Image src="/tech6.png" alt="Image" width="300" height="300" />
            <h1 className="text-3xl mt-4">Name of shoe</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="text-center">
            <Image src="/tech7.png" alt="Image" width="300" height="300" />
            <h1 className="text-3xl mt-4">Name of shoe</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="text-center">
            <Image src="/tech8.png" alt="Image" width="300" height="300" />
            <h1 className="text-3xl mt-4">Name of shoe</h1>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="text-center mt-9">
        <Button bgColor="bg-primary" text="SEE ALL" />
      </div>
    </>
  );
}
