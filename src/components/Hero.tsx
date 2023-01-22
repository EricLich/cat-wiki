import React, { useState } from "react";

import LogoFull from "../assets/images/catwiki-logo.svg";
import LogoWithoutCat from "../assets/images/logo-wo-cat.svg";
import SearchBar from "./SearchBar";

const Hero = () => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState<boolean>(false);

  return (
    <section
      id="hero"
      className="w-full h-[250px] lg:h-[538px] bg-[url('./assets/images/HeroImagesm.png')] lg:bg-[url('./assets/images/HeroImagelg.png')] bg-cover bg-center bg-no-repeat rounded-t-[42px] flex items-start justify-start px-[29px] lg:px-[108px] pt-[20px] lg:pt-[115px] "
    >
      <div
        className={`flex mt-9 lg:mt-0 flex-col items-start justify-start ${
          mobileSearchOpen ? "w-full" : "w-auto"
        }`}
      >
        <img
          src={LogoFull}
          alt="catwiki logo inverted color"
          className="hidden lg:block invert contrast-[150%] w-[100px] lg:w-[300px] mb-[8px] lg:mb-[12px]"
        />
        <img
          src={LogoWithoutCat}
          alt="catwiki logo inverted color"
          className="lg:hidden invert contrast-[150%] w-[120px] lg:w-[300px] mb-[8px] lg:mb-[12px]"
        />
        <p className="text-white text-smPreTitle lg:text-lgHeroDesc max-w-[136px] lg:max-w-[371px] lg:leading-lgHeroDescLeading mb-[14px] lg:mb-[53px]">
          Get to know more about your cat breed
        </p>
        <SearchBar mobileSearchOpen={mobileSearchOpen} setMobileSearchOpen={setMobileSearchOpen} />
      </div>
    </section>
  );
};

export default Hero;
