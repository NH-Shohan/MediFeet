import Image from "next/image";
import { Button } from "../Button/Button";

export default function HeroSection() {
  return (
    <div className="md:flex items-center gap-7">
      <div className="flex  md:w-[55%] shadow-lg rounded-2xl items-center">
        <div className="pl-[40px]">
          <h3 className="sm:text-sm md:text-4xl font-extrabold mb-6">
            Discover Your <br />
            MediFeet Footwear
          </h3>
          <p className="md:mb-6">
            Experience the perfect blend of comfort, style and foot health.
          </p>
          <div className="flex flex-col gap-4 w-fit">
            <Button
              bgColor="bg-primary"
              className="block sm:text-[12px]"
              text="SHOP WOMEN"
            />
            <Button bgColor="bg-secondary" className="sm:text-[12px]" text="SHOP MEN" />
          </div>
        </div>
        <div className="rounded-2xl sm:w-10 ">
          <Image
            className="md:rounded-2xl"
            src="/left hero image.png"
            width={600}
            height={100}
            alt="Hero Section"
          />
        </div>
      </div>

      <div className="flex  flex-col md:w-[45%] rounded-2xl items-center gap-10">
        <div className="flex shadow-lg rounded-2xl items-center gap-4">
          <div className="pl-[40px]">
            <h3 className="text-2xl font-bold mb-6">
              Explore our Innovative Foot-Supporting Features
            </h3>
            <Button bgColor="bg-primary" className="pt-5" text="SHOP WOMEN" />
          </div>
          <Image
            className="rounded-2xl"
            src="/right top hero image.png"
            width={300}
            height={100}
            alt="Hero Section"
          />
        </div>

        <div className="flex shadow-lg rounded-2xl items-center gap-4">
          <div className="pl-[40px]">
            <h3 className="text-2xl font-bold mb-6">
              Versatile Footwear for Every Occupation and Lifestyle
            </h3>
            <Button bgColor="bg-primary" className="pt-5" text="SHOP WOMEN" />
          </div>
          <Image
            className="rounded-2xl"
            src="/right bottom hero image.png"
            width={350}
            height={100}
            alt="Hero Section"
          />
        </div>
      </div>
    </div>
  );
}
