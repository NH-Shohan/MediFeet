import data from "../api/technologies";
import TechCard from "../components/Technologies/TechCard";

export default function Technologies() {
  // {
  //   data.map((item) => console.log(item.id));
  // }
  console.log(data);
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

      <div>
        {data.map((item, index) => {
          <TechCard
            image={item.image}
            name={item.name}
            description={item.description}
            list={item.list}
            key={index}
          />;
        })}
      </div>
    </div>
  );
}
