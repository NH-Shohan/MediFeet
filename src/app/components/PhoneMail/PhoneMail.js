import { Button } from "../Button/Button";

export default function PhoneMail() {
  return (
    <div className="flex gap-10">
      <div className="h-auto w-1/2 shadow-xl rounded-xl my-14 p-10 flex flex-col justify-center items-center">
        <p className="mb-5 text-2xl font-bold">+(65) 9182 1172</p>
        <Button text={"Whatsapp Us"} bgColor={"bg-primary"} />
      </div>
      <div className="h-auto w-1/2 shadow-xl rounded-xl my-14 p-10 flex flex-col justify-center items-center">
        <p className="mb-5 text-2xl font-bold">sales@medifeetsingapore.com</p>
        <Button text={"Send Email"} bgColor={"bg-primary"} />
      </div>
    </div>
  );
}
