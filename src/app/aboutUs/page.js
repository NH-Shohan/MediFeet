import Image from "next/image";
import about1 from "../../../public/about1.png";
import about2 from "../../../public/about2.png";
import shoe from "../../../public/shoe.png";
import { Button } from "../components/Button/Button";

export default function page() {
  return (
    <div>
      <div className="shadow w-[80%] h-32 my-10 mx-auto rounded-2xl flex justify-center items-center">
        <p className="text-3xl uppercase text-secondary font-bold">
          about <span className="font-normal">us</span>
        </p>
      </div>

      <section className="mx-[10%] grid md:grid-cols-2 gap-10 my-5">
        <Image src={about1} alt="about image" className="w-full" />
        <div className="flex flex-col justify-center">
          <h1 className="my-7 text-4xl uppercase text-secondary font-bold">
            Company <span className="font-normal">introduction</span>
          </h1>
          <p className="text-xl">
            MEDIFEET is the leading medical footwear and podiatrist preferred
            footwear for health, comfort and style. The research and development
            department are led by a technical team with more than 30 years of
            experience and supported by our corporate partners, APMA and
            Australian Podiatry Association.
          </p>
          <br />
          <p className="text-xl">
            Our orthopedic shoes come in a variety of styles from dress to
            casual and in multiple sizes and widths. You will also find a grand
            selection of arch supports, orthopedic slippers, house shoes and
            other foot care products designed to minimize the discomfort caused
            by diabetic foot problems, plantar fasciitis, bunions, heel pain,
            post-surgical healing, and other foot conditions. MEDIFEET, the
            healthier option for on-trend footwear.
          </p>
        </div>
      </section>

      <section className="mx-[10%] grid md:grid-cols-2 gap-10 my-16">
        <div className="flex flex-col">
          <h1 className="mb-7 text-4xl uppercase text-secondary font-bold">
            THE BIRTH <span className="font-normal">of medifeet</span>
          </h1>
          <p className="text-xl">
            Walk a mile in MEDIFEET and you will truly understand the
            difference. MEDIFEET is revolutionising the way footwear is
            designed.
          </p>
          <br />

          <p className="text-xl">
            Our footwear is equipped with the ultimate foot supporting benefits
            packed into on-trend styles. At MEDIFEET, what we love about shoes
            is the way they can make women and men feel. Footwear has so many
            powers; they affect how the foot moves and how much pressure the
            body takes with each step.
          </p>
          <br />
          <p className="text-xl">
            Designed by Podiatrists, Physiotherapists and Pedorthists the
            MEDIFEET Team builds on its heritage and continues to revolutionise
            the way footwear is designed. Our label is providing a healthier
            option for on-trend footwear.
          </p>
          <br />

          <p className="text-xl">
            If your feet are hurting in your shoes you could be doing damage.
            It’s not something you think about at the time, but that pain in
            your foot may affect you now and further down the track. Your feet,
            under undue pressure, pain or stress, will impact your joints,
            tendons, muscles... the list goes on.
          </p>
        </div>
        <Image src={about2} alt="about image" className="w-full" />
      </section>

      <p className="text-3xl text-center uppercase text-secondary font-bold mt-5">
        VISION & <span className="font-normal">MISSION</span>
      </p>
      <section className="mx-[10%] grid md:grid-cols-2 gap-10 my-5">
        <div className="border-2 border-spacing-4 rounded-2xl p-7">
          <Image src={"/eye.svg"} alt="eye icon" width={50} height={50} />
          <p className="my-3 text-2xl">Vision</p>
          <p>
            To be the premier provider of orthopedic shoes and foot care
            products, setting the standard for excellence in foot comfort and
            health. We aspire to be recognized as the trusted brand that
            consistently offers the best solutions in the market, enhancing the
            overall well-being of our customers.
          </p>
        </div>
        <div className="border-2 border-spacing-4 rounded-2xl p-7">
          <Image src={"/rocket.svg"} alt="rocket icon" width={50} height={50} />
          <p className="my-3 text-2xl">Mission</p>
          <p>
            Our mission is to design, develop, and deliver the finest orthopedic
            shoes and foot care products that go beyond comfort, prioritizing
            foot health. We are committed to leveraging cutting-edge
            technologies, research, and expert craftsmanship to create
            innovative solutions that address specific foot conditions and
            improve overall foot wellness. By partnering with healthcare
            professionals and listening to the needs of our customers, we aim to
            provide exceptional products that promote foot comfort, alleviate
            pain, and contribute to a higher quality of life. Our dedication to
            continuous improvement, customer satisfaction, and fostering healthy
            feet drives us to be the leader in the industry.
          </p>
        </div>
      </section>

      <div className="shadow w-[80%] my-10 mx-auto rounded-2xl flex justify-center items-center">
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
      </div>
    </div>
  );
}
