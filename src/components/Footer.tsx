import React from "react";
import LogoFull from "../assets/images/catwiki-logo.svg";
const Footer = () => {
  return (
    <footer className="mt-[20px] lg:mt-[100px] h-[120px] lg:h-[100px] bg-black flex flex-col gap-4 lg:flex-row lg:items-center justify-center lg:justify-between pl-[29px] lg:pl-[108px] rounded-t-3xl lg:rounded-t-[42px] lg:pr-8">
      <img
        src={LogoFull}
        alt="catwiki logo inverted color"
        className="block invert contrast-[150%] w-[90px] lg:w-[128px] h-[20px] lg:h-[43px] mb-[8px] lg:mb-[12px]"
      />
      <p className="text-smPreTitle lg:text-normalText text-white flex items-center gap-2">
        &copy; built by{"  "}
        <a href="https://github.com/EricLich" target={"_blank"} className="font-bold underline">
          Eric Lich
        </a>{" "}
        -{" "}
        <a href="https://devchallenges.io/" target={"_blank"} className="font-bold">
          devchallenges.io
        </a>{" "}
        2023
      </p>
    </footer>
  );
};

export default Footer;
