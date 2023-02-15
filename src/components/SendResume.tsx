import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import anime from "animejs";
import React, { useEffect, useState } from "react";
import { FC } from "react";
import { serverUrl } from "../utils/constant";

interface SendResumeProps {
  placeholder?: string;
}

const SendResume: FC<SendResumeProps> = ({ placeholder = "Email" }) => {
  const [isValidMail, setIsValidMail] = useState<boolean>(true);
  const [mail, setMail] = useState<string>("");
  const [icon, setIcon] = useState<IconProp>(solid("paper-plane"));
  const send = () => {
    if (isValidMail) {
      const animation = anime({
        targets: document.getElementById("spinner"),
        rotate: [0, 360],
        loop: true,
        easing: "linear",
      });
      setIcon(solid("circle-notch"));
      animation.play();
      const http = new XMLHttpRequest();
      http.onreadystatechange = function () {
        if (this.readyState === 4) {
          animation.pause();
          anime({
            targets: document.getElementById("spinner"),
            rotate: 0,
          });
        }
        if (this.readyState === 4 && this.responseText === "sent") {
          setIcon(solid("check"));
          setMail("");
        }
        if (this.readyState === 4 && this.status === 404) {
          setIcon(solid("triangle-exclamation"));
          alert(this.responseText);
        }
      };
      http.open("POST", serverUrl, true);
      http.setRequestHeader("content-type", "application/json");
      http.send(JSON.stringify({ to: mail }));
    }
  };
  const validateEmail = (mail: string) => {
    setIcon(solid("paper-plane"));
    setMail(mail);
    setIsValidMail(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail));
  };
  return (
    <div
      className={`w-full flex items-center rounded-[5px] bg-white py-1 px-3 ${
        isValidMail ? "" : "border border-red-600"
      }`}
    >
      <input
        value={mail}
        type="email"
        className="outline-none bg-transparent text-grey w-full"
        placeholder={placeholder}
        onChange={(e) => validateEmail(e.target.value)}
      />
      {}
      <FontAwesomeIcon
        id="spinner"
        icon={icon}
        className={`${
          icon === solid("triangle-exclamation")
            ? "text-red-600"
            : icon === solid("check")
            ? "text-green-600"
            : "text-grey"
        } cursor-pointer block`}
        onClick={() => send()}
      />
    </div>
  );
};

export default SendResume;
