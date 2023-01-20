import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-between gap-2 px-[13px] lg:px-[26px] bg-white w-full max-w-[91px] lg:max-w-[395px] h-[30px] lg:h-[70px] rounded-[59px]">
      <input
        type="text"
        className="hidden lg:block h-[70%] flex-1 smHeroDescLeading lg:text-normalText focus:outline-none"
        placeholder="Enter your breed"
      />

      <input
        type="text"
        className="lg:hidden smHeroDescLeading w-[80%] text-xs focus:outline-none"
        placeholder="Search"
      />
      <button className="w-[10px] lg:w-[17px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#291507"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
