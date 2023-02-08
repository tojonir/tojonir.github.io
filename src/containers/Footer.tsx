import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import { FC } from "react";
import { Link } from "gatsby";
import SocialNetwork from "./SocialNetwork";
import SendResume from "../components/SendResume";

const Footer: FC = () => {
  return (
    <footer className="flex flex-col justify-between offset pt-[5%] pb-5 h-[270px] bg-bleuDark">
      <div className="w-full flex justify-between m-auto">
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
            <SendResume />
          </div>
        </div>
      </div>
      <p className="text-[12px] text-center text-grey">
        Copyright Tojonirina 2023
      </p>
    </footer>
  );
};

export default Footer;
