import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type CustomImageProps = {
  src: string;
  alt: string;
  className: string;
  extraLoader?: boolean;
};

const CustomImage: React.FC<CustomImageProps> = ({ alt, src, className, extraLoader }) => {
  const [loadingImage, setLoadingImage] = useState<boolean>(true);
  console.log(className);
  return (
    <>
      {(loadingImage || extraLoader) && <Skeleton className={className} baseColor="#c4b9af" highlightColor="#b5a599" />}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loadingImage ? "hidden" : "block"}`}
        onLoad={() => setLoadingImage(false)}
      />
    </>
  );
};

export default CustomImage;
