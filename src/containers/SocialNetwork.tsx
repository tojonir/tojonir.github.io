import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FC } from "react";

const SocialNetwork: FC = () => {
  return (
    <div className="flex items-center justify-between mt-[20px]">
      <FontAwesomeIcon icon={brands("instagram")} className="text-[30px]" />
      <FontAwesomeIcon icon={brands("linkedin-in")} className="text-[30px]" />
      <FontAwesomeIcon icon={brands("google")} className="text-[25px]" />
      <FontAwesomeIcon icon={brands("github")} className="text-[25px]" />
    </div>
  );
};

export default SocialNetwork;
