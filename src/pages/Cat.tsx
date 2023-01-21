import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { Cat as CatType } from "../utils/types";
import { getCatImages, getCats } from "../api/cats.api";
import CatFullInfo from "../components/CatFullInfo";
import OtherCatImages from "../components/OtherCatImages";

const Cat = () => {
  const [selectedCat, setSelectedCat] = useState<CatType>();
  let { catId } = useParams();
  const { data } = useQuery(["cats"], getCats);

  const {
    data: catImages,
    error: catImagesFetchError,
    isLoading: fetchingCatImages,
  } = useQuery(["specificCatImages"], () => getCatImages(catId!), {
    enabled: selectedCat !== undefined,
    cacheTime: 0,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (data) {
      setSelectedCat((data as CatType[])?.find((cat: CatType) => cat.id === catId));
    }
  }, [data]);

  if (!catImages)
    return (
      <div className="h-[85vh] text-normalTextColor text-lgTitle grid place-content-center font-semibold">
        <h2>Loading cat...</h2>
      </div>
    );

  return (
    <>
      <CatFullInfo selectedCat={selectedCat!} catFeaturedImage={catImages[0]} fetchingCatImages={fetchingCatImages} />
      <OtherCatImages otherImages={catImages.slice(1, catImages.length)} />
    </>
  );
};

export default Cat;
