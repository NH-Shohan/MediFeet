export default function Filter({ className }) {
  return (
    <div className={className}>
      <div>
        <label className="block mb-2 text-lg font-bold text-gray-900 dark:text-text">
          PRICE
        </label>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value="50"
          className="w-full h-2 bg-[#000000] rounded-lg appearance cursor-pointer dark:bg-black range-slider"
        />
      </div>

      <div className="mt-5">
        <p className="block mb-2 text-lg font-bold text-gray-900 dark:text-text uppercase">
          Color
        </p>
        <div className="flex gap-4 flex-wrap">
          <button type="button">
            <div className="w-[30px] h-[30px] bg-[#f00] rounded-full"></div>
          </button>
          <button type="button">
            <div className="w-[30px] h-[30px] bg-[#ffd000] rounded-full"></div>
          </button>
          <button type="button">
            <div className="w-[30px] h-[30px] bg-[#23ad00] rounded-full"></div>
          </button>
          <button type="button">
            <div className="w-[30px] h-[30px] bg-[#0059ff] rounded-full"></div>
          </button>
        </div>
      </div>

      <div className="mt-5">
        <p className="block mb-2 text-lg font-bold text-gray-900 dark:text-text uppercase">
          Recomended for
        </p>

        <div className="flex flex-col gap-2">
          <label className="cursor-pointer">
            <input className="mr-2" type="checkbox" name="checkbox" />
            Arch Pain
          </label>
          <label className="cursor-pointer">
            <input className="mr-2" type="checkbox" name="checkbox" />
            Arch Pain
          </label>
          <label className="cursor-pointer">
            <input className="mr-2" type="checkbox" name="checkbox" />
            Arch Pain
          </label>
          <label className="cursor-pointer">
            <input className="mr-2" type="checkbox" name="checkbox" />
            Arch Pain
          </label>
          <label className="cursor-pointer">
            <input className="mr-2" type="checkbox" name="checkbox" />
            Arch Pain
          </label>
        </div>
      </div>
    </div>
  );
}
