import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getCats, getDiscoverCatsImages } from "../api/cats.api";

const DiscoverBreeds = () => {
  const [imagesIds, setImagesIds] = useState<string[]>([]);
  const {
    data: cats,
    error: catFetchError,
    isFetching,
  } = useQuery(["cats"], getCats, {
    refetchOnWindowFocus: false,
    refetchInterval: 360000,
  });

  const {
    data: catImages,
    error: catImagesFetchError,
    isFetching: fetchingCatImages,
  } = useQuery(["catImages"], () => getDiscoverCatsImages(imagesIds), {
    enabled: imagesIds.length > 0,
    refetchOnWindowFocus: false,
    refetchInterval: 360000,
  });

  useEffect(() => {
    if (!isFetching) {
      setImagesIds(cats!.map((cat) => cat.reference_image_id).slice(0, 4));
    }
  }, [isFetching]);

  console.log(catImages);

  return (
    <section id="discover-breeds" className="w-full bg-breedsBg h-[650px] rounded-b-3xl pt-[40px] px-[108px]">
      <p className="relative text-normalText text-normalTextColor">
        Most Searched Breeds
        <span className="absolute top-[120%] w-[60px] h-[3px] bg-normalTextColor"></span>
      </p>
      <h1 className="text-normalTextColor text-lgTitle max-w-[540px] font-bold leading-lgTitleLeading mt-[48px]">
        66+ Breeds For you to discover
      </h1>
    </section>
  );
};

export default DiscoverBreeds;
