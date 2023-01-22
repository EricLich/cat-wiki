import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useMemo } from "react";
import { useQuery } from "react-query";

import BackpackCat from "../assets/images/image-3.png";
import CustomImage from "../components/CustomImage";
import { getCats } from "../api/cats.api";
import LeftArrow from "../assets/images/arrow-left.svg";

const Cats = () => {
  const navigate = useNavigate();
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
        return (
          <div
            className="flex flex-col lg:flex-row items-center justify-start gap-4 lg:gap-12"
            key={cat.id}
          >
            <CustomImage
              src={cat.image ? cat.image.url : BackpackCat}
              alt={`${cat.name} image`}
              className="lg:w-[170px] w-full h-[250px] lg:h-[170px] rounded-[24px]"
            />
            <Link to={`/cats/${cat.id}`} className="flex flex-col items-start gap-2 lg:gap-6">
              <h3 className="text-lgHeroDesc lg:text-lgCatPageTitle text-normalTextColor font-semibold">
                {index + 1}. {cat.name}
              </h3>
              <p className="text-normalText text-normalTextColor leading-textCatsPage max-w-[888px] line-clamp-4 lg:line-clamp-none">
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
      <button
        className="mt-5 text-normalText flex items-center gap-2 text-normalTextColor/60 font-bold uppercase"
        onClick={() => navigate(-1)}
      >
        <img
          src={LeftArrow}
          alt="arrow right"
          className="w-[16px] lg:w-[20px] relative top-[-1px]"
        />{" "}
        <p>Back</p>
      </button>
      <h2 className="mt-5 mb-12 text-lgCatPageTitle text-normalTextColor font-bold">
        All cat breeds!
      </h2>
      <div className="flex flex-col items-start gap-12 lg:gap-14">
        <>{cats && renderCats}</>
      </div>
    </>
  );
};

export default Cats;
