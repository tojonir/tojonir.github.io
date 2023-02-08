import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

interface IconToolProps {
  icon: IconDefinition;
  title: string;
  link: string;
  iconSize?: SizeProp;
  textSize?: string;
}

const IconTool: FC<IconToolProps> = ({
  icon,
  title,
  link,
  iconSize,
  textSize = "11px",
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className="flex flex-col items-center justify-center group"
    >
      <FontAwesomeIcon
        icon={icon}
        inverse
        className="group-hover:text-purple-600"
        size={iconSize}
      />
      <p className={`text-[${textSize}] group-hover:text-purple-600`}>
        {title}
      </p>
    </a>
  );
};

export default IconTool;
