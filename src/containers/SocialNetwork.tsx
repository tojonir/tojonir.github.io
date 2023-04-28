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
    <div className="flex items-center justify-between mt-[20px] w-full max-w-[300px]">
      <a
        href="https://web.facebook.com/profile.php?id=100075097910788"
        target="_blank"
      >
        <FontAwesomeIcon
          icon={brands("facebook-f")}
          size={iconSize}
          className={`${iconStyle}`}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/tojonirina-andrianarijaona"
        target="_blank"
      >
        <FontAwesomeIcon
          icon={brands("linkedin-in")}
          size={iconSize}
          className={`${iconStyle}`}
        />
      </a>
      <a href="mailto:tojonirinandrianarijaona@gmail.com" target="_blank">
        <FontAwesomeIcon
          icon={brands("google")}
          size={iconSize}
          className={`${iconStyle}`}
        />
      </a>
      <a href="https://github.com/tojonir" target="_blank">
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
