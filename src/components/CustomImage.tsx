import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type CustomImageProps = {
  src: string;
  alt: string;
  className: string;
};

const CustomImage: React.FC<CustomImageProps> = ({ alt, src, className }) => {
  const [loadingImage, setLoadingImage] = useState<boolean>(true);
  console.log(className);
  return (
    <>
      {loadingImage && <Skeleton className={className} highlightColor="#b5a599" />}
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
