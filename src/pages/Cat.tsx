import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Cat as CatType } from "../utils/types";

const Cat = () => {
  let { catId } = useParams();
  const { data } = useQuery(["cats"]);

  const selectedCat: CatType = (data as CatType[]).find((cat: CatType) => cat.id === catId)!;
  console.log(selectedCat);
  return <div>{selectedCat.name}</div>;
};

export default Cat;
