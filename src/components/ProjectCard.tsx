import { Link } from "gatsby-link";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React, { FC } from "react";

interface ProjectCardProps {
  name: string;
  slug: string;
  tag: any;
  image: IGatsbyImageData;
}

const ProjectCard: FC<ProjectCardProps> = ({ slug, name, tag, image }) => {
  return (
    <div className="relative group">
      <Link to={`/project/${slug}`}>
        <GatsbyImage image={image} alt={name} className="h-full" />
        <div className="absolute top-0 w-full h-full hidden flex-col justify-between bg-black bg-opacity-10 group-hover:flex">
          <div className="flex justify-end">
            {tag.map((tag: any) => (
              <GatsbyImage
                image={tag.childImageSharp.gatsbyImageData}
                alt={name}
                className="w-[30px] ml-3"
              />
            ))}
          </div>
          <p className="font-semibold p-5">{name}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
