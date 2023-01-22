import { Link } from "react-router-dom";
import React from "react";

import { CatImageResponse } from "../utils/types";
import CustomImage from "./CustomImage";

type DiscoverBreedsShowcaseProps = {
  catImages: CatImageResponse[];
  fetchingCatImages: boolean;
};

const DiscoverBreedsShowcase: React.FC<DiscoverBreedsShowcaseProps> = ({
  catImages,
  fetchingCatImages,
}) => {
  return (
    <div className="w-full max-w-[100%] h-auto grid grid-cols-2 gap-4 md:flex lg:justify-between lg:items-center">
      {catImages?.map((img: CatImageResponse) => (
        <Link
          to={`/cats/${img.breeds[0].id}`}
          key={img.url}
          className="w-full flex flex-col items-center lg:items-start"
        >
          <CustomImage
            src={img.url}
            alt={`${img.breeds[0].name} image`}
            className="lg:w-full w-[135px] md:w-[150px] lg:min-h-[220px] h-[135px] md:h-[150px] lg:max-h-[220px]"
            extraLoader={fetchingCatImages}
          />
          <p className="mt-2 lg:mt-5 text-smPreTitle lg:text-normalText font-semibold">
            {img.breeds[0].name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default DiscoverBreedsShowcase;
