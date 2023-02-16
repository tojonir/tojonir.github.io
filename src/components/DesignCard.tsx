import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { FC } from "react";

interface DesignCardProps {
  title: string;
  img: IGatsbyImageData;
  bg?: string;
}

const DesignCard: FC<DesignCardProps> = ({ title, img, bg }) => {
  return (
    <div
      className={`flex items-center ${bg} w-fit rounded-none polygone px-3 py-1 cursor-pointer duration-150 hover:scale-125 m-5`}
    >
      <GatsbyImage image={img} alt="ps" class="w-[40px]" />
      <p className="text-[25px]">{title}</p>
    </div>
  );
};

export default DesignCard;
