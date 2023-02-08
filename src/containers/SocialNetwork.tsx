import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FC } from "react";

interface SocialNetworkProps {
  iconSize?: SizeProp;
  iconStyle?: string;
}

const SocialNetwork: FC<SocialNetworkProps> = ({
  iconSize = "xl",
  iconStyle = "hover:text-purple-600",
}) => {
  return (
    <div className="flex items-center justify-between mt-[20px] max-w-[300px]">
      <a href="" target="_blank">
        <FontAwesomeIcon
          icon={brands("instagram")}
          size={iconSize}
          className={`${iconStyle}`}
        />
      </a>
      <a href="" target="_blank">
        <FontAwesomeIcon
          icon={brands("linkedin-in")}
          size={iconSize}
          className={`${iconStyle}`}
        />
      </a>
      <a href="" target="_blank">
        <FontAwesomeIcon
          icon={brands("google")}
          size={iconSize}
          className={`${iconStyle}`}
        />
      </a>
      <a href="" target="_blank">
        <FontAwesomeIcon
          icon={brands("github")}
          size={iconSize}
          className={`${iconStyle}`}
        />
      </a>
    </div>
  );
};

export default SocialNetwork;
