import React from "react";
import { CatImageResponse } from "../utils/types";
import CustomImage from "./CustomImage";

type OtherCatImagesProps = {
  otherImages: CatImageResponse[];
};

const OtherCatImages: React.FC<OtherCatImagesProps> = ({ otherImages }) => {
  return (
    <section id="other-images" className="flex flex-col items-start mt-[80px]">
      <h3 className="text-normalTextColor text-lgCatPageTitle leading-lgCatPageTitleLeading font-semibold mb-10">
        Other photos
      </h3>
      <div className="w-full grid grid-cols-4 gap-12">
        {[...new Set(otherImages)]?.map((image, index: number) => (
          <CustomImage
            key={image.id}
            src={image.url}
            alt={`other image n${index}`}
            className="!w-[278px] !h-[278px] !rounded-3xl !object-cover"
          />
        ))}
      </div>
    </section>
  );
};

export default OtherCatImages;
