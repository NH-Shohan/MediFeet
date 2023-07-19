"use client";

import HeroSection from "./components/Hero/Hero";
import MallAddress from "./components/MallAddress/MallAddress";
import NearestOutlet from "./components/NearestOutlet/NearestOutlet";
import PhoneMail from "./components/PhoneMail/PhoneMail";
import Review from "./components/Review/Review";
import InnovativeTechnologies from "./components/Technologies/Technologies";
import TopSelection from "./components/TopSelection/TopSelection";

export default function Home() {
  return (
    <main>
      <section className="h-[80vha] flex items-center gap-7 md:px-[10%] sm:px-5 my-12">
        <HeroSection />
      </section>

      {/* Shwipper top selections */}
      <section className="h-[60vh] px-[10%]">
        <h1 className="text-3xl font-extrabold text-secondary uppercase text-center">
          Our Top <span className="font-normal">Selections</span>
        </h1>
        <TopSelection />
      </section>

      {/* Image selections */}
      <section className="mb-20 px-[10%]">
        <h1 className="text-3xl font-extrabold text-secondary uppercase text-center mb-9">
          Accreditations <span className="font-normal"></span>
        </h1>
        <div className="md:flex justify-between text-white">
          <div className="bg-primary w-96 h-96">A</div>
          <div className="bg-secondary w-96 h-96">B</div>
          <div className="bg-text w-96 h-96">C</div>
        </div>
      </section>

      {/* Shwipper innovative techonology */}
      <section className="h-[60vh]">
        <h1 className="text-3xl font-extrabold text-secondary uppercase text-center mb-9">
          Our Innovative <span className="font-normal"> Technologies</span>
        </h1>
        <InnovativeTechnologies />
      </section>

      {/* Review Section */}
      <section className="h-[70vh] px-[10%]">
        <Review />
      </section>

      {/* Nearest outlet */}
      <section className="h-auto px-[10%]">
        <h1 className="text-3xl font-extrabold text-secondary uppercase text-center mb-9">
          Visit Our Nearest <span className="font-normal"> Outlet</span>
        </h1>
        <NearestOutlet />
      </section>

      {/* Nearest outlet */}
      <section className="h-auto shadow rounded-xl mx-[10%] my-14 p-10 ">
        <h1 className="text-3xl font-extrabold text-secondary uppercase text-center mb-9">
          WE ARE <span className="font-normal"> HERE</span>
        </h1>
        <MallAddress />
      </section>

      {/* Nearest outlet */}
      <section className="px-[10%]">
        <h1 className="text-3xl font-extrabold text-secondary uppercase text-center mb-9">
          Let’s Get in <span className="font-normal"> Touch</span>
        </h1>
        <PhoneMail />
      </section>
    </main>
  );
}
