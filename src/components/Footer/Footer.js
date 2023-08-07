import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="shadow pt-16">
      <div className="md:px-[10%] md:grid sm:text-center md:text-left sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3">
        <div className="md:w-[300px] sm:mx-auto md:mx-0">
          <Link href="/">
            <div className="sm:w-fit sm:mx-auto md:mx-0">
              <Image src="/logo.png" alt="Logo" width="200" height="65" />
            </div>
          </Link>
          <div className="my-6 flex sm:w-fit sm:mx-auto md:mx-0">
            <Link href={"#"}>
              <Image
                className="mr-5"
                src={"/facebook.svg"}
                alt="Logo"
                width={"30"}
                height={"100"}
              />
            </Link>
            <Link href={"#"}>
              <Image
                className="mr-5"
                src={"/instagram.svg"}
                alt="Logo"
                width={"30"}
                height={"100"}
              />
            </Link>
            <Link href={"#"}>
              <Image
                className="mr-5"
                src={"/google.svg"}
                alt="Logo"
                width={"30"}
                height={"100"}
              />
            </Link>
            <Link href={"#"}>
              <Image
                src={"/whatsapp.svg"}
                alt="Logo"
                width={"30"}
                height={"100"}
              />
            </Link>
          </div>
          <b>MEDIFEET Footwear Limited 13,</b>
          <p>
            Taniswha Street, Waiotaiki Bay, <br />
            Auckland 1072 New Zealand.
          </p>
        </div>

        {/* Contact */}
        <div className="sm:mx-auto ">
          <h1 className="font-bold sm:mt-4 md:mt-0 text-secondary text-xl uppercase mb-5">
            Contact
          </h1>
          <p className="mb-4">+(65) 9182 1172</p>
          <p>sales@medifeetsingapore.com</p>
        </div>

        {/* Quick Link */}
        <div className="flex flex-col leading-7">
          <h1 className="font-bold sm:mt-4 md:mt-0 text-secondary text-xl uppercase mb-5">
            Quick Link
          </h1>
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>Women</Link>
          <Link href={"#"}>Men</Link>
          <Link href={"#"}>Assessories</Link>
          <Link href={"#"}>Outlets</Link>
          <Link href={"/contactUs"}>Contact Us</Link>
          <Link href={"/aboutUs"}>About Us</Link>
          <Link href={"/clientele"}>Clientele</Link>
        </div>

        {/* Info */}
        <div className="flex flex-col leading-7">
          <h1 className="font-bold sm:mt-4 md:mt-0 text-secondary text-xl uppercase mb-5">
            Info
          </h1>
          <Link href={"#"}>Terms & Conditions</Link>
          <Link href={"#"}>Privacy Policy</Link>
          <Link href={"#"}>Delivery & exchange</Link>
        </div>
      </div>

      <div className="mx-[10%] border-primary border-2 rounded-xl p-5 my-5">
        <h1 className="font-bold sm:mt-4 md:mt-0 text-secondary text-xl uppercase mb-5">
          OutLets
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3">
          <div className="flex flex-col leading-7">
            <h1 className="font-bold sm:mt-4 md:mt-0 text-md uppercase">
              Medifeet @Metro:
            </h1>
            <p>
              1 Woodlands Square, level 2<br /> METRO, Causeway Point, <br />
              Singapore 738099
            </p>
          </div>
          <div className="flex flex-col leading-7">
            <h1 className="font-bold sm:mt-4 md:mt-0 text-md uppercase">
              Medifeet @Novena:
            </h1>
            <p>
              10 Sinaran Drive Novena Square 2, #03-114/115, Singapore 307506
            </p>
          </div>
          <div className="flex flex-col leading-7">
            <h1 className="font-bold sm:mt-4 md:mt-0 text-md uppercase">
              Medifeet @Northview:
            </h1>
            <p>
              6 Yishun Industrial Street 1 #01-12, North View Bizhub, Singapore
              768090
            </p>
          </div>
          <div className="flex flex-col leading-7">
            <h1 className="font-bold sm:mt-4 md:mt-0 text-md uppercase">
              Medifeet @Tangs Orchard:
            </h1>
            <p>310 Orchard Rd, Tang Plaza, Singapore 238864</p>
          </div>
        </div>
      </div>

      <div className="bg-primary w-full text-center md:flex px-[10%] text-white justify-between h-[50px] items-center">
        <p>2023 MediFeet All Rights Reserved</p>
        <div className="md:flex text-center">
          <p>Web design by DigiPixel</p>
          {/* <Image src="/footerIcon.png" alt="Logo" width="20" height="65" /> */}
        </div>
      </div>
    </div>
  );
}
