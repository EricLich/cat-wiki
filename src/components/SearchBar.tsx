import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Combobox } from "@headlessui/react";

import { getCats } from "../api/cats.api";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searching, setSearching] = useState<string>("");
  const navigate = useNavigate();
  const { data: cats } = useQuery(["cats"], getCats);

  const filteredCatBreeds =
    searching !== "" && cats
      ? cats.filter((cat) => cat.name.toLowerCase().includes(searching.toLowerCase()))
      : [];

  return (
    <div className="relative flex items-center justify-between gap-2 px-[13px] lg:px-[26px] bg-white w-full max-w-[150px] lg:max-w-[395px] h-[30px] lg:h-[70px] rounded-[59px]">
      <Combobox value={filteredCatBreeds} onChange={(value) => navigate(`/cats/${value}`)}>
        <Combobox.Input
          type="text"
          className="hidden lg:block h-[70%] flex-1 smHeroDescLeading lg:text-normalText focus:outline-none"
          placeholder="Enter your breed"
          value={searching}
          onChange={(e) => setSearching(e.target.value)}
        />

        <Combobox.Input
          type="text"
          className="lg:hidden smHeroDescLeading w-[80%] text-xs focus:outline-none"
          placeholder="Search"
          value={searching}
          onChange={(e) => setSearching(e.target.value)}
        />
        <i className="w-[10px] lg:w-[17px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#291507">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
          </svg>
        </i>
        {searching && (
          <Combobox.Options className="px-2 py-2 absolute z-50 bg-white left-0 top-[110%] w-full h-auto min-h-[2px] max-h-[200px] overflow-y-auto rounded-xl flex flex-col">
            {filteredCatBreeds.map((cat) => (
              <Combobox.Option
                as={Link}
                to={`/cats/${cat.id}`}
                key={cat.id}
                value={cat.id}
                className={({ active }) =>
                  `text-normalText hover:bg-gray-200 w-full py-3 px-2 ${
                    active ? "bg-gray-200" : ""
                  } rounded-md`
                }
              >
                {cat.name}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </Combobox>
    </div>
  );
};

export default SearchBar;
