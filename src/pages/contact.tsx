import React from "react";
import Layout from "../containers/Layout";
import SocialNetwork from "../containers/SocialNetwork";

const Contact = () => {
  return (
    <Layout>
      <div className="w-full flex my-[5%] items-center justify-between">
        <div>
          <h3 className="text-[30px] font-semibold">
            I am glad to hear,
            <br />
            Say more about your Project,
            <br />
            <span className="text-orange">Let's explore.</span>
          </h3>
          <p className="text-gray-400">Reach me on social network</p>
          <SocialNetwork />
        </div>
        <div className="grid grid-cols-1 gap-5 w-1/2">
          <h4 className="text-[20px] font-medium">Drop me some word</h4>
          <input
            className="px-2 py-1 rounded-[5px] outline-none text-gray-600"
            placeholder="fullname"
          />
          <input
            className="px-2 py-1 rounded-[5px] outline-none text-gray-600"
            placeholder="Email"
          />
          <input
            className="px-2 py-1 rounded-[5px] outline-none text-gray-600"
            placeholder="Subject"
          />
          <p className="text-bleuSky">Tell me more</p>
          <textarea
            className="px-2 py-1 rounded-[5px] h-[150px] outline-none text-gray-600"
            placeholder="Message"
          />
          <div>
            <button className="bg-purple-700 px-10 py-1 rounded-[5px] float-right">
              Send
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
