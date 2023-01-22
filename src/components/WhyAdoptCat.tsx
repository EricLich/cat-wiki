import { Link } from "react-router-dom";
import React from "react";

import SleepingCat from "../assets/images/image-2.png";
import PawsCat from "../assets/images/image-1.png";
import BackpackCat from "../assets/images/image-3.png";
import CustomImage from "./CustomImage";

const WhyAdoptCat = () => {
  return (
    <section
      id="why-adopt-cat"
      className="flex flex-col lg:flex-row  items-center justify-between lg:px-[108px] mt-[60px] lg:mt-[100px]"
    >
      <div className="flex flex-col items-start">
        <h2 className="relative text-normalTextColor text-smTitle lg:text-lgTitle max-w-[430px] font-bold leading-smTitleLeading lg:leading-lgTitleLeading mb-[43px]">
          Why should you have a cat?
          <span className="absolute -top-[15%] w-[50px] lg:w-[60px] h-[3px] bg-normalTextColor left-0"></span>
        </h2>
        <p className="max-w-[447px] text-normalText text-normalTextColor">
          Having a cat around you can actually trigger the release of calming chemicals in your body
          which lower your stress and anxiety leves
        </p>
        <Link
          to={"/cats"}
          className="mt-5 lg:mt-16 text-smPreTitle lg:text-normalText flex items-center gap-2 text-normalTextColor/60 font-bold uppercase"
        >
          <p>Read more</p>
          <span>→</span>
        </Link>
      </div>
      <div className="flex items-start gap-3 lg:gap-7 mt-10 lg:mt-0">
        <div className="flex flex-col items-end justify-start">
          <CustomImage
            src={SleepingCat}
            alt="cat inside backpack"
            className="w-[172px] lg:w-[273px] h-[105px] lg:h-[167px] mb-3 lg:mb-[28px] rounded-[10px] object-cover"
          />
          <CustomImage
            src={PawsCat}
            alt="cat inside backpack"
            className="w-[120px] lg:w-[195px] h-[184px] lg:h-[293px] rounded-[10px] object-cover"
          />
        </div>
        <CustomImage
          src={BackpackCat}
          alt="cat inside backpack"
          className="w-[150px] lg:w-[238px] h-[242px] lg:h-[385px] rounded-[10px] object-cover"
        />
      </div>
    </section>
  );
};

export default WhyAdoptCat;
