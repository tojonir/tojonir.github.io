import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { FC } from "react";

interface CategoryProps {
  title: string;
  isSelected: boolean;
  onClick?: () => void;
}

const Category: FC<CategoryProps> = ({
  title,
  isSelected,
  onClick = () => console.log("click"),
}) => {
  return (
    <div
      className={`flex items-center mr-5 ${
        isSelected ? "cursor-not-allowed opacity-80" : "cursor-pointer"
      } group`}
      onClick={() => onClick()}
    >
      <div
        className={`w-[50px] h-[50px] rounded-[50%] overflow-hidden z-30 relative flex items-center justify-center bg-white border-2 border-blue`}
      >
        <p className="text-[20px] font-medium text-black">#</p>
      </div>
      <div
        className={`w-[150px] h-[40px] border border-blue ml-[-15px] flex items-center justify-center relative overflow-hidden`}
      >
        <p className="text-white absolute top-0 w-full h-full z-20 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-10  font-medium">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Category;
