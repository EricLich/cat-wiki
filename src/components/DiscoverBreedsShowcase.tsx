import { Link } from "react-router-dom";
import React from "react";

import { CatImageResponse } from "../utils/types";
import CustomImage from "./CustomImage";

type DiscoverBreedsShowcaseProps = {
  catImages: CatImageResponse[];
  fetchingCatImages: boolean;
};

const DiscoverBreedsShowcase: React.FC<DiscoverBreedsShowcaseProps> = ({ catImages, fetchingCatImages }) => {
  return (
    <div className="w-full max-w-[100%] grid grid-cols-2 gap-3 lg:flex lg:justify-between lg:items-center">
      {catImages?.map((img: CatImageResponse) => (
        <Link to={`/cats/${img.breeds[0].id}`} key={img.url}>
          <CustomImage
            src={img.url}
            alt={`${img.breeds[0].name} image`}
            className="!w-[135px] !lg:w-[220px] !h-[135px] !lg:h-[220px] !object-cover !rounded-xl !lg:rounded-3xl"
            extraLoader={fetchingCatImages}
          />
          <p className="mt-2 lg:mt-5 text-smPreTitle lg:text-normalText font-semibold">{img.breeds[0].name}</p>
        </Link>
      ))}
    </div>
  );
};

export default DiscoverBreedsShowcase;
