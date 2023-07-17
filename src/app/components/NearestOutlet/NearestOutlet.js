import Image from "next/image";
import { Button } from "../Button/Button";

export default function NearestOutlet() {
  return (
    <div className="flex w-full justify-around">
      <div className="w-[300px] my-[30px] rounded-lg">
        <Image
          className="rounded-xl"
          src={"/tech2.png"}
          alt="image"
          width={"300"}
          height={"300"}
        />

        <h1 className="my-4 text-2xl font-semibold">Medifeet @Novena</h1>
        <p className="mb-4">10 Sinaran Drive Novena Square 2, #03-114/115, Singapore 307506</p>
        <Button bgColor={"bg-primary"} text={"FIND LOCATION"} />
      </div>
      <div className="w-[300px] my-[30px] rounded-lg">
        <Image
          className="rounded-xl"
          src={"/tech2.png"}
          alt="image"
          width={"300"}
          height={"300"}
        />

        <h1 className="my-4 text-2xl font-semibold">Medifeet @Novena</h1>
        <p className="mb-4">10 Sinaran Drive Novena Square 2, #03-114/115, Singapore 307506</p>
        <Button bgColor={"bg-primary"} text={"FIND LOCATION"} />
      </div>
      <div className="w-[300px] my-[30px] rounded-lg">
        <Image
          className="rounded-xl"
          src={"/tech2.png"}
          alt="image"
          width={"300"}
          height={"300"}
        />

        <h1 className="my-4 text-2xl font-semibold">Medifeet @Novena</h1>
        <p className="mb-4">10 Sinaran Drive Novena Square 2, #03-114/115, Singapore 307506</p>
        <Button bgColor={"bg-primary"} text={"FIND LOCATION"} />
      </div>
      <div className="w-[300px] my-[30px] rounded-lg">
        <Image
          className="rounded-xl"
          src={"/tech2.png"}
          alt="image"
          width={"300"}
          height={"300"}
        />

        <h1 className="my-4 text-2xl font-semibold">Medifeet @Novena</h1>
        <p className="mb-4">10 Sinaran Drive Novena Square 2, #03-114/115, Singapore 307506</p>
        <Button bgColor={"bg-primary"} text={"FIND LOCATION"} />
      </div>
    </div>
  );
}
