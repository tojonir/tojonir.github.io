import { GatsbyImage } from "gatsby-plugin-image";
import React, { FC, ReactElement } from "react";

interface AboutCardProps {
  img: ReactElement;
  title: string;
  content: string;
}

const AboutCard: FC<AboutCardProps> = ({ img, title, content }) => {
  return (
    <div className="w-1/3 sm:w-full flex flex-col items-center p-6 h-[250px] sm:h-fit duration-75 hover:bg-bleuDark cursor-pointer">
      <div className="w-[80px]">{img}</div>
      <p className="text-center font-bold text-[22px] py-3">{title}</p>
      <p className="text-justify">{content}</p>
    </div>
  );
};

export default AboutCard;
