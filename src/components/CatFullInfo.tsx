import React from "react";

import type { Cat, CatImageResponse } from "../utils/types";
import CatLevel from "./CatLevel";
import CustomImage from "./CustomImage";

type CatFullInfoProps = {
  selectedCat: Cat;
  catFeaturedImage: CatImageResponse;
  fetchingCatImages: boolean;
};

const CatFullInfo: React.FC<CatFullInfoProps> = ({
  selectedCat,
  catFeaturedImage,
  fetchingCatImages,
}) => {
  return (
    <section
      id="cat-info"
      className="flex flex-col lg:flex-row  items-start gap-4 lg:gap-[115px] mt-12"
    >
      {catFeaturedImage ? (
        <CustomImage
          src={catFeaturedImage.url}
          alt={`${selectedCat.name} featured image`}
          className="lg:h-[470px] h-[380px] lg:w-[470px] object-cover rounded-3xl"
          extraLoader={fetchingCatImages}
        />
      ) : (
        <div className="!h-[470px] !w-[470px] !object-cover !rounded-3xl"></div>
      )}
      <div className="flex flex-col items-start justify-start w-full lg:max-w-[600px]">
        <h2 className="text-normalTextColor text-lgHeroDesc lg:text-lgCatPageTitle leading-lgCatPageTitleLeading font-semibold mb-6">
          {selectedCat.name}
        </h2>
        <p className="w-auto  text-normalTextColor text-lgCatDetails lg:text-normalText">
          {selectedCat.description}
        </p>
        <p className="text-normalTextColor text-lgCatDetails mt-[20px] lg:mt-[33px]">
          <span className="font-bold">Temperament:</span> {selectedCat.temperament}
        </p>

        <p className="text-normalTextColor text-lgCatDetails mt-[20px] lg:mt-[33px]">
          <span className="font-bold">Origin:</span> {selectedCat.origin}
        </p>

        <p className="text-normalTextColor text-lgCatDetails mt-[20px] lg:mt-[33px]">
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
