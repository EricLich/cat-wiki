import { Link } from "react-router-dom";
import React, { useEffect, useMemo } from "react";
import { useQuery } from "react-query";

import BackpackCat from "../assets/images/image-3.png";
import CustomImage from "../components/CustomImage";
import { getCats } from "../api/cats.api";

const Cats = () => {
  const {
    data: cats,
    error: catFetchError,
    isLoading,
  } = useQuery(["cats"], getCats, {
    refetchOnWindowFocus: false,
    refetchInterval: 360000,
    keepPreviousData: true,
    staleTime: 360000,
  });

  const renderCats = useMemo(() => {
    if (cats) {
      return cats.map((cat, index: number) => {
        console.log(cat);
        return (
          <div className="flex items-center justify-start gap-12" key={cat.id}>
            <CustomImage
              src={cat.image ? cat.image.url : BackpackCat}
              alt={`${cat.name} image`}
              className="!w-[170px] !h-[170px] !rounded-[24px] !object-cover"
            />
            <Link to={`/cats/${cat.id}`} className="flex flex-col items-start gap-6">
              <h3 className="text-lgCatPageTitle text-normalTextColor font-semibold">
                {index + 1}. {cat.name}
              </h3>
              <p className="text-normalText text-normalTextColor leading-textCatsPage max-w-[888px]">
                {cat.description}
              </p>
            </Link>
          </div>
        );
      });
    }
  }, [cats]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading && cats === undefined)
    return (
      <div className="h-[85vh] text-normalTextColor text-lgTitle grid place-content-center font-semibold">
        <h2>Loading breeds...</h2>
      </div>
    );

  return (
    <>
      <h2 className="mb-12 text-lgCatPageTitle text-normalTextColor font-bold">All cat breeds!</h2>
      <div className="flex flex-col items-start gap-14">
        <>{cats && renderCats}</>
      </div>
    </>
  );
};

export default Cats;
