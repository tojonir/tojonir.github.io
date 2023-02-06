import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import { FC } from "react";
import { Link } from "gatsby";
import SocialNetwork from "./SocialNetwork";

const Footer: FC = () => {
  return (
    <div className="flex flex-col justify-between px-[130px] pt-[5%] pb-5 h-[270px] bg-bleuDark">
      <div className="flex justify-between">
        <div className="w-1/4">
          <p className="font-semibold text-blue">Reach me on</p>
          <SocialNetwork />
        </div>
        <div className="w-1/4">
          <p className="font-semibold text-blue">Usefull link</p>
          <div className="flex flex-col mt-[20px]">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/project">Project</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="w-1/4">
          <p className="font-semibold text-blue">Receive my resume</p>
          <div className="flex items-center justify-between mt-[20px]">
            <div className="flex items-center rounded-[5px] bg-white py-1 px-2">
              <input
                type="text"
                className="outline-none bg-transparent text-grey"
                placeholder="Email"
              />
              <FontAwesomeIcon
                icon={solid("paper-plane")}
                className="text-grey"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-[12px] text-center text-grey">
        Copyright Tojonirina 2023
      </p>
    </div>
  );
};

export default Footer;
