import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { FC } from "react";

const Logo: FC = () => {
  const logo = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 30)
        }
      }
    }
  `);
  return (
    <div className="flex items-center">
      <GatsbyImage
        image={logo.file.childImageSharp.gatsbyImageData}
        alt="logo tojonirina"
        className="w-[10px]"
      />
      <span className="text-[20px]">ojonirina</span>
    </div>
  );
};

export default Logo;
