import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React, { FC, useState } from "react";
import SocialNetwork from "../containers/SocialNetwork";

interface ProjectCardProps {
  data: any;
}

const ProjectCard: FC<ProjectCardProps> = ({ data }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  console.log(data);
  return (
    <>
      <div
        className="relative group cursor-pointer overflow-hidden"
        onClick={() => setShowModal(true)}
      >
        <GatsbyImage
          image={data.thumb.childImageSharp.gatsbyImageData}
          alt={data.name}
          className="h-full duration-100 group-hover:scale-110"
        />
        <div className="absolute top-0 w-full h-full flex items-end  bg-gradient-to-t from-black to-transparent">
          <p className="font-semibold p-5">{data.name}</p>
        </div>
      </div>
      <div
        className={`${
          showModal ? "" : "hidden"
        } absolute h-screen w-screen overflow-hidden  bg-black bg-opacity-70 top-0 left-0 flex justify-center z-50`}
      >
        <div className="bg-white flex flex-col justify-between max-w-[1000px] md:mx-5 realtive overflow-y-scroll">
          <div>
            <h3 className="p-3 text-[44px] sm:text-[20px] font-bold text-purple-600 bg-black rounded-none">
              {data.name}
            </h3>
            {data.content.map((tag: any, i: number) => (
              <div key={i}>
                <GatsbyImage
                  image={tag.childImageSharp.gatsbyImageData}
                  alt={data.name}
                  className="w-full"
                />
              </div>
            ))}
            <div className="absolute bottom-0 right-5">
              {data.tag.map((tag: any, i: number) => (
                <div key={i}>
                  <GatsbyImage
                    image={tag.childImageSharp.gatsbyImageData}
                    alt={data.name}
                    className="w-[50px]"
                  />
                </div>
              ))}
              <div
                className="bg-red-600 p-2 flex items-center justify-center hover:bg-opacity-80 cursor-pointer rounded-[2px]"
                onClick={() => setShowModal(false)}
              >
                <div className="w-[30px] h-[30px] rounded-[5px] border border-white flex items-center justify-center">
                  <FontAwesomeIcon icon={solid("close")} />
                </div>
              </div>
            </div>
          </div>
          {data.link !== null && (
            <div className="w-full text-center py-10">
              <a
                className="text-bleuDark font-medium text-[18px]"
                href={data.link}
                target="_blank"
              >
                {data.link}
              </a>
            </div>
          )}

          <div className="flex flex-col items-center w-full p-5">
            <h3 className="text-bleuDark font-medium text-[24px]">
              Contact me now on
            </h3>
            <SocialNetwork iconStyle="text-bleuDark hover:text-purple-600" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
