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
  });

  const {
    data: catImages,
    error: catImagesFetchError,
    isLoading: fetchingCatImages,
  } = useQuery(["catImages"], () => getDiscoverCatsImages(imagesIds), {
    enabled: imagesIds.length > 0,
    refetchOnWindowFocus: false,
    refetchInterval: 360000,
  });

  console.log(fetchingCatImages);

  useEffect(() => {
    if (!isLoading) {
      setImagesIds(cats!.map((cat) => cat.reference_image_id).slice(0, 4));
    }
  }, [isLoading]);

  return (
    <section id="discover-breeds" className="w-full bg-breedsBg h-[650px] rounded-b-3xl pt-[40px] px-[108px]">
      <p className="relative text-normalText text-normalTextColor">
        Most Searched Breeds
        <span className="absolute top-[120%] w-[60px] h-[3px] bg-normalTextColor left-0"></span>
      </p>
      <div className="flex justify-between mt-[48px] mb-[48px]">
        <h1 className="text-normalTextColor text-lgTitle max-w-[540px] font-bold leading-lgTitleLeading ">
          66+ Breeds For you to discover
        </h1>
        <Link to={"/cats"} className="self-end">
          See more
        </Link>
      </div>
      <DiscoverBreedsShowcase catImages={catImages} fetchingCatImages={fetchingCatImages} />
    </section>
  );
};

export default DiscoverBreeds;
