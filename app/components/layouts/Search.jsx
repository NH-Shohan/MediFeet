import { Button } from "../Button/Button";

const Search = () => {
  return (
    <form className="flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/3 mb-3">
      <input
        className="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-full mr-2 py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
        type="text"
        placeholder="Enter your keyword"
        required
      />
      <Button text={"Search"} bgColor={"bg-primary"} />
    </form>
  );
};

export default Search;
