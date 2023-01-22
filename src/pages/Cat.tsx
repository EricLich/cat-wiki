import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";

import type { Cat as CatType } from "../utils/types";
import CatFullInfo from "../components/CatFullInfo";
import { getCatImages, getCats } from "../api/cats.api";
import OtherCatImages from "../components/OtherCatImages";

const Cat = () => {
  const navigate = useNavigate();
  const [selectedCat, setSelectedCat] = useState<CatType>();
  let { catId } = useParams();
  const { data } = useQuery(["cats"], getCats, {
    cacheTime: 0,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
  });

  const {
    data: catImages,
    error: catImagesFetchError,
    isLoading: fetchingCatImages,
  } = useQuery(["specificCatImages"], () => getCatImages(catId!), {
    enabled: selectedCat !== undefined,
    cacheTime: 0,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (data) {
      setSelectedCat((data as CatType[])?.find((cat: CatType) => cat.id === catId));
    }
  }, [data]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!catImages)
    return (
      <div className="h-[88vh] lg:h-[85vh] text-normalTextColor text-lgHeroDesc lg:text-lgTitle grid place-content-center font-semibold">
        <h2>Loading cat...</h2>
      </div>
    );

  return (
    <>
      <button
        className="mt-5 text-normalText flex items-center gap-2 text-normalTextColor/60 font-bold uppercase"
        onClick={() => navigate(-1)}
      >
        <span>←</span> Back
      </button>
      <CatFullInfo
        selectedCat={selectedCat!}
        catFeaturedImage={catImages[0]}
        fetchingCatImages={fetchingCatImages}
      />
      <OtherCatImages otherImages={catImages.slice(1, catImages.length)} />
    </>
  );
};

export default Cat;
