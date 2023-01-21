import { Link } from "react-router-dom";
import React from "react";

import SleepingCat from "../assets/images/image-2.png";
import PawsCat from "../assets/images/image-1.png";
import BackpackCat from "../assets/images/image-3.png";

const WhyAdoptCat = () => {
  return (
    <section id="why-adopt-cat" className="flex items-center justify-between px-[108px] mt-[100px]">
      <div className="flex flex-col items-start">
        <h2 className="relative text-normalTextColor text-lgTitle max-w-[430px] font-bold leading-lgTitleLeading mb-[43px]">
          Why should you have a cat?
          <span className="absolute -top-[15%] w-[60px] h-[3px] bg-normalTextColor left-0"></span>
        </h2>
        <p className="max-w-[447px] text-normalText text-normalTextColor">
          Having a cat around you can actually trigger the release of calming chemicals in your body which lower your
          stress and anxiety leves
        </p>
        <Link
          to={"/cats"}
          className="mt-16 text-normalText flex items-center gap-2 text-normalTextColor/60 font-bold uppercase"
        >
          <p>Read more</p>
          <span>→</span>
        </Link>
      </div>
      <div className="flex items-start gap-7">
        <div className="flex flex-col items-end justify-start">
          <img src={SleepingCat} alt="cat inside backpack" className="w-[273px] h-[167px] mb-[28px]" />
          <img src={PawsCat} alt="cat inside backpack" className="w-[195px] h-[293px]" />
        </div>
        <img src={BackpackCat} alt="cat inside backpack" className="w-[238px] " />
      </div>
    </section>
  );
};

export default WhyAdoptCat;
