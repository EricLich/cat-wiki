import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { Cat as CatType } from "../utils/types";
import { getCats } from "../api/cats.api";
import CatFullInfo from "../components/CatFullInfo";

const Cat = () => {
  const [selectedCat, setSelectedCat] = useState<CatType>();
  let { catId } = useParams();
  const { data } = useQuery(["cats"], getCats);

  useEffect(() => {
    if (data) {
      setSelectedCat((data as CatType[])?.find((cat: CatType) => cat.id === catId));
    }
  }, [data]);

  return <>{selectedCat ? <CatFullInfo selectedCat={selectedCat!} /> : "loading..."}</>;
};

export default Cat;
