import "flowbite";
import data from "../../api/shoe.json";
import Card from "./Card";

export default async function ProductCard({ className }) {
  return (
    <>
      <div className={`flex flex-wrap ${className}`}>
        <div className="flex w-full justify-end items-center">
          Sort by
          <div className="ml-3">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              class="text-text border focus:outline-none rounded-lg font-bold px-5 py-1.5 text-center inline-flex items-center "
              type="button"
            >
              Featured
              <svg
                class="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              class="z-10 hidden bg-white divide-gray-100 rounded-lg shadow w-44"
            >
              <ul
                class="py-2 text-sm text-gray-700"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">
                    Earnings
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        {data.map((item, index) => (
          <Card
            image={item.image}
            code={item.code}
            name={item.name}
            price={item.price}
            color={item.color}
            type={item.type}
            recomendedFor={item.recomendedFor}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
