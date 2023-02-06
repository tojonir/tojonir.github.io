import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

interface IconToolProps {
  icon: IconDefinition;
  title: string;
}

const IconTool: FC<IconToolProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <FontAwesomeIcon icon={icon} inverse />
      <p className="text-[10px]">{title}</p>
    </div>
  );
};

export default IconTool;
