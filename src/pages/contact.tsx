import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import anime from "animejs";
import { HeadFC } from "gatsby";
import React, { useState } from "react";
import Layout from "../containers/Layout";
import SocialNetwork from "../containers/SocialNetwork";
import { serverUrl } from "../utils/constant";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isValidMail, setIsValidMail] = useState<boolean>(true);
  const [isSending, setIsSending] = useState<boolean>(false);

  const showNotification = () => {
    anime({
      targets: document.getElementById("notification"),
      right: "0%",
      easing: "easeInOutSine",
      duration: 500,
    });
    setTimeout(() => {
      anime({
        targets: document.getElementById("notification"),
        right: "-100%",
        easing: "easeInOutSine",
        duration: 500,
      });
    }, 3000);
  };

  const send = () => {
    if (name !== "" && isValidMail && message !== "" && subject !== "") {
      setIsSending(true);
      const http = new XMLHttpRequest();
      http.onreadystatechange = function () {
        if (this.readyState === 4) {
          setIsSending(false);
        }
        if (this.readyState === 4 && this.responseText === "sent") {
          setMail("");
          setMessage("");
          setSubject("");
          setName("");
          showNotification();
        }
        if (this.readyState === 4 && this.status === 404) {
          alert(this.responseText);
        }
      };
      http.open("POST", serverUrl + "/mail-me", true);
      http.setRequestHeader("content-type", "application/json");
      http.send(
        JSON.stringify({
          mail: mail,
          name: name,
          message: message,
          subject: subject,
        })
      );
    }
  };
  return (
    <Layout>
      <div className="relative overflow-x-hidden">
        <div className="w-full flex sm:flex-col !my-[5%] items-center justify-between offset">
          <div className="sm:w-full">
            <h3 className="text-[30px] sm:text-[25px] font-semibold">
              I am glad to hear,
              <br />
              Say more about your Project,
              <br />
              <span className="text-orange">Let's explore.</span>
            </h3>
            <p className="text-gray-400">Reach me on social network</p>
            <SocialNetwork />
          </div>
          <div className="grid grid-cols-1 gap-5 w-1/2 sm:w-full sm:pt-5">
            <h4 className="text-[20px] font-medium">Drop me some word</h4>
            <input
              className="px-2 py-1 rounded-[5px] outline-none text-gray-600"
              placeholder="fullname"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className={`px-2 py-1 rounded-[5px] outline-none text-gray-600 ${
                isValidMail ? "" : mail !== "" && "border border-red-600"
              }`}
              placeholder="Email"
              value={mail}
              onChange={(e) => {
                setMail(e.target.value);
                setIsValidMail(
                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)
                );
              }}
            />
            <input
              className="px-2 py-1 rounded-[5px] outline-none text-gray-600"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <p className="text-blue">Tell me more</p>
            <textarea
              className="px-2 py-1 rounded-[5px] h-[150px] outline-none text-gray-600"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div>
              <button
                className="bg-blue px-10 py-1 rounded-[5px] float-right"
                onClick={() => send()}
              >
                {isSending ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
        </div>
        <div
          className="flex bg-white w-fit rounded-none fixed bottom-10 right-[-100%]"
          id="notification"
        >
          <div className="bg-green-500 p-5 rounded-none flex items-center justify-center">
            <FontAwesomeIcon icon={solid("check")} />
          </div>
          <div className="p-2">
            <h3 className="text-bleuDark font-bold">Message sent!</h3>
            <p className="text-bleuDark">I will get back to you soon.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;

export const Head: HeadFC = () => <title>Contact</title>;
