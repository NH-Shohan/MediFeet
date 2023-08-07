export const Button = ({ text, bgColor, className, onclick }) => {
  return (
    <button
      className={`px-6 py-2 rounded-full text-lg lg:text-[16px] text-background ${bgColor} ${className}`}
      type="button"
      onClick={onclick}
    >
      {text}
    </button>
  );
};
