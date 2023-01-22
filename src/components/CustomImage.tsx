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
  return (
    <div className={className}>
      {(loadingImage || extraLoader) && (
        <Skeleton
          baseColor="#c4b9af"
          highlightColor="#b5a599"
          style={{ width: "100%", height: "100%" }}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover rounded-2xl lg:rounded-3xl ${
          loadingImage ? "hidden" : "block"
        }`}
        onLoad={() => setLoadingImage(false)}
      />
    </div>
  );
};

export default CustomImage;
