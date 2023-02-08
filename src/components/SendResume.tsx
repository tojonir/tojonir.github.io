import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FC } from "react";

interface SendResumeProps {
  placeholder?: string;
}

const SendResume: FC<SendResumeProps> = ({ placeholder = "Email" }) => {
  return (
    <div className="flex items-center rounded-[5px] bg-white py-1 px-3">
      <input
        type="text"
        className="outline-none bg-transparent text-grey w-full"
        placeholder={placeholder}
      />
      <FontAwesomeIcon icon={solid("paper-plane")} className="text-grey" />
    </div>
  );
};

export default SendResume;
