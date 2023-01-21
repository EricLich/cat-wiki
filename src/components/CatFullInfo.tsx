import React from "react";
import { useQuery } from "react-query";
import { getCatImages } from "../api/cats.api";
import { Cat } from "../utils/types";
import CatLevel from "./CatLevel";
import CustomImage from "./CustomImage";

type CatFullInfoProps = {
  selectedCat: Cat;
};

const CatFullInfo: React.FC<CatFullInfoProps> = ({ selectedCat }) => {
  const {
    data: catImages,
    error: catImagesFetchError,
    isLoading: fetchingCatImages,
  } = useQuery(["specificCatImages"], () => getCatImages(selectedCat.id), {
    enabled: true,
    cacheTime: 0,
    refetchOnWindowFocus: false,
  });

  return (
    <section id="cat-info" className="flex items-start px-[52px] gap-[115px]">
      {catImages ? (
        <CustomImage
          src={catImages[0].url}
          alt={`${selectedCat.name} featured image`}
          className="!h-[371px] !w-[371px] !object-cover !rounded-3xl"
          extraLoader={fetchingCatImages}
        />
      ) : (
        <div className="!h-[371px] !w-[371px] !object-cover !rounded-3xl"></div>
      )}
      <div className="flex flex-col items-start justify-start max-w-[600px]">
        <h2 className="text-normalTextColor text-lgCatPageTitle leading-lgCatPageTitleLeading font-semibold mb-6">
          {selectedCat.name}
        </h2>
        <p className="w-auto  text-normalTextColor text-normalText">{selectedCat.description}</p>
        <p className="text-normalTextColor text-lgCatDetails mt-[33px]">
          <span className="font-bold">Temperament:</span> {selectedCat.temperament}
        </p>

        <p className="text-normalTextColor text-lgCatDetails mt-[33px]">
          <span className="font-bold">Origin:</span> {selectedCat.origin}
        </p>

        <p className="text-normalTextColor text-lgCatDetails mt-[33px]">
          <span className="font-bold">Life Span:</span> {selectedCat.life_span}
          {"  "} years
        </p>
        <CatLevel levelName="Adaptability" levelNumber={selectedCat.adaptability} />
        <CatLevel levelName="Affection level" levelNumber={selectedCat.affection_level} />
        <CatLevel levelName="Child friendly" levelNumber={selectedCat.child_friendly} />
        <CatLevel levelName="Grooming" levelNumber={selectedCat.grooming} />
        <CatLevel levelName="Intelligence" levelNumber={selectedCat.intelligence} />
        <CatLevel levelName="Health issues" levelNumber={selectedCat.health_issues} />
        <CatLevel levelName="Social needs" levelNumber={selectedCat.social_needs} />
        <CatLevel levelName="Stranger friendly" levelNumber={selectedCat.stranger_friendly} />
      </div>
    </section>
  );
};

export default CatFullInfo;