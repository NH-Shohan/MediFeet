import Image from "next/image";

export default function Technologies() {
  return (
    <div className="px-[10%]">
      <div className="flex justify-start items-center my-10">
        <p className="text-xl">HOME</p>
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
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="text-xl font-bold text-secondary uppercase">
          Accessories
        </p>
      </div>

      <div className="mb-10 grid md:grid-cols-2 lg:grid-cols-3 gap-7 justify-between">
        <div className="border p-7 rounded-3xl">
          <Image
            className="w-full"
            src="/tech1.png"
            alt="Image"
            width={400}
            height={400}
          />
          <p className="text-3xl text-secondary uppercase my-5">
            Orthotic System
          </p>
          <p className="mb-5">Best Comfort with Arch Support</p>
          <ul className="list-disc ml-5">
            <li>
              Enhanced arch support for improved foot alignment and stability.
            </li>
            <li>
              Relief for common foot conditions such as plantar fasciitis, flat
              feet, arch pain, heel pain, diabetes, and arthritis, etc.
            </li>
          </ul>
        </div>
        <div className="border p-7 rounded-3xl">
          <Image
            className="w-full"
            src="/tech1.png"
            alt="Image"
            width={400}
            height={400}
          />
          <p className="text-3xl text-secondary uppercase my-5">
            Orthotic System
          </p>
          <p className="mb-5">Best Comfort with Arch Support</p>
          <ul className="list-disc ml-5">
            <li>
              Enhanced arch support for improved foot alignment and stability.
            </li>
            <li>
              Relief for common foot conditions such as plantar fasciitis, flat
              feet, arch pain, heel pain, diabetes, and arthritis, etc.
            </li>
          </ul>
        </div>
        <div className="border p-7 rounded-3xl">
          <Image
            className="w-full"
            src="/tech1.png"
            alt="Image"
            width={400}
            height={400}
          />
          <p className="text-3xl text-secondary uppercase my-5">
            Orthotic System
          </p>
          <p className="mb-5">Best Comfort with Arch Support</p>
          <ul className="list-disc ml-5">
            <li>
              Enhanced arch support for improved foot alignment and stability.
            </li>
            <li>
              Relief for common foot conditions such as plantar fasciitis, flat
              feet, arch pain, heel pain, diabetes, and arthritis, etc.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
