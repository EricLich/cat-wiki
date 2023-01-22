import React from "react";

type CatLevelProps = {
  levelName: string;
  levelNumber: number;
};

const MAX_NUMBER_LEVEL: number = 5;

const CatLevel: React.FC<CatLevelProps> = ({ levelName, levelNumber }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-start lg:items-center mt-[25px] lg:mt-[33px] gap-4 lg:gap-8">
      <p className="text-normalTextColor text-lgCatDetails  font-bold min-w-[148px]">
        {levelName}:
      </p>
      <div className="flex w-full items-center gap-2">
        {new Array(MAX_NUMBER_LEVEL).fill("").map((_, index: number) => (
          <span
            key={index}
            className={`h-3 w-[20%] lg:w-[60px] rounded-lg ${
              index < levelNumber ? "bg-filledLevel" : "bg-notFilledLevel"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CatLevel;
