import React from "react";
import LogoFull from "../assets/images/catwiki-logo.svg";
const Footer = () => {
  return (
    <footer className="mt-[100px] h-[100px] bg-black flex items-center justify-between pl-[108px] rounded-t-[42px] pr-8">
      <img
        src={LogoFull}
        alt="catwiki logo inverted color"
        className="hidden lg:block invert contrast-[150%] w-[100px] lg:w-[128px] lg:h-[43px] mb-[8px] lg:mb-[12px]"
      />
      <p className="text-white flex items-center gap-2">
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
