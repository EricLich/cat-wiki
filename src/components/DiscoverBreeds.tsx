import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import React, { useEffect, useState } from "react";

import DiscoverBreedsShowcase from "./DiscoverBreedsShowcase";
import { getCats, getDiscoverCatsImages } from "../api/cats.api";

const DiscoverBreeds = () => {
  const [imagesIds, setImagesIds] = useState<string[]>([]);
  const {
    data: cats,
    error: catFetchError,
    isLoading,
  } = useQuery(["cats"], getCats, {
    refetchOnWindowFocus: false,
    refetchInterval: 360000,
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
  });

  const {
    data: catImages,
    error: catImagesFetchError,
    isLoading: fetchingCatImages,
  } = useQuery(["catImages"], () => getDiscoverCatsImages(imagesIds), {
    enabled: imagesIds.length > 0,
    refetchOnWindowFocus: false,
    refetchInterval: 360000,
    cacheTime: 360000,
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (!isLoading) {
      setImagesIds(cats!.map((cat) => cat.reference_image_id).slice(0, 4));
    }
  }, [isLoading]);

  return (
    <section
      id="discover-breeds"
      className="w-full bg-breedsBg h-[520px] md:h-[350px] lg:h-[650px] rounded-b-3xl pt-[20px] lg:pt-[40px] pb-4 px-[30px] lg:px-[108px]"
    >
      <p className="relative text-smPreTitle lg:text-normalText text-normalTextColor">
        Most Searched Breeds
        <span className="absolute top-[120%] w-[40px] lg:w-[60px] h-[3px] bg-normalTextColor left-0"></span>
      </p>
      <div className="flex flex-col lg:flex-row lg:justify-between mt-[20px] lg:mt-[48px] mb-[25px] lg:mb-[48px]">
        <h1 className="text-normalTextColor text-normalText lg:text-lgTitle max-w-[185px] lg:max-w-[540px] font-bold leading-textCatsPage lg:leading-lgTitleLeading ">
          66+ Breeds For you to discover
        </h1>
        <Link
          to={"/cats"}
          className="mt-[10px] lg:self-end  text-smPreTitle lg:text-normalText flex items-center gap-2 text-normalTextColor/60 font-bold uppercase"
        >
          <p>See more</p>
          <span>→</span>
        </Link>
      </div>
      <DiscoverBreedsShowcase
        catImages={catImages}
        fetchingCatImages={fetchingCatImages && isLoading}
      />
    </section>
  );
};

export default DiscoverBreeds;
