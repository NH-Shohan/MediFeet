import Image from "next/image";

export default function TechCard(image, name, description, list) {
  return (
    <div className="mb-10 grid md:grid-cols-2 lg:grid-cols-3 gap-7 justify-between">
      <div className="border p-7 rounded-3xl">
        <Image
          className="w-full"
          src={image}
          alt="Image"
          width={400}
          height={400}
        />
        <p className="text-3xl text-secondary uppercase my-5">{name}</p>
        <p className="mb-5">{description}</p>
        <ul className="list-disc ml-5">
          <li>{list}</li>
        </ul>
      </div>
    </div>
  );
}
