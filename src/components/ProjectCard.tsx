import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React, { FC, useState } from "react";

interface ProjectCardProps {
  data: any;
}

const ProjectCard: FC<ProjectCardProps> = ({ data }) => {
  console.log("data", data);
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <div
        className="relative group cursor-pointer rounded-[2px] overflow-hidden"
        onClick={() => setShowModal(true)}
      >
        <GatsbyImage
          image={data.thumb.childImageSharp.gatsbyImageData}
          alt={data.name}
          className="h-full"
        />
        <div className="absolute top-0 w-full h-full flex items-end  bg-gradient-to-t from-black to-transparent">
          <p className="font-semibold p-5">{data.name}</p>
        </div>
      </div>
      <div
        className={`${
          showModal ? "" : "hidden"
        } absolute h-screen w-screen  bg-black bg-opacity-70 top-0 left-0 flex justify-center px-[130px]`}
      >
        <div className="bg-white w-full realtive overflow-y-scroll">
          <h3 className="p-3 text-[44px] font-bold text-purple-600 bg-black">
            {data.name}
          </h3>
          {data.content.map((tag: any) => (
            <div>
              <GatsbyImage
                image={tag.childImageSharp.gatsbyImageData}
                alt={data.name}
                className="w-full"
              />
            </div>
          ))}
          <div className="absolute bottom-0 left-[91%]">
            {data.tag.map((tag: any) => (
              <div>
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
      </div>
    </>
  );
};

export default ProjectCard;