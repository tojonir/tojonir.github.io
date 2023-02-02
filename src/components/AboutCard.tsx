import { GatsbyImage } from "gatsby-plugin-image";
import React, { FC, ReactElement } from "react";

interface AboutCardProps {
  img: ReactElement;
  title: string;
  content: string;
}

const AboutCard: FC<AboutCardProps> = ({ img, title, content }) => {
  return (
    <div className="w-1/4 flex flex-col items-center p-3">
      <div className="w-[80px]">{img}</div>
      <p className="text-center font-bold text-[22px]">{title}</p>
      <p className="text-center">{content}</p>
    </div>
  );
};

export default AboutCard;
