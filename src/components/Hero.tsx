import React from "react";

import Logo from "../assets/images/catwiki-logo.svg";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full lg:h-[538px] bg-[url('./assets/images/HeroImagelg.png')] bg-cover bg-center bg-no-repeat rounded-t-[42px] flex items-start justify-start lg:px-[108px] lg:pt-[115px]"
    >
      <div className="flex flex-col items-start justify-start">
        <img
          src={Logo}
          alt="catwiki logo inverted color"
          className="invert contrast-[150%] w-[300px] mb-[12px]"
        />
        <p className="text-white text-lgHeroDesc lg:max-w-[371px] lg:leading-lgHeroDescLeading lg:mb-[53px]">
          Get to know more about your cat breed
        </p>
        <SearchBar />
      </div>
    </section>
  );
};

export default Hero;
