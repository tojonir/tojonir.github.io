import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { FC } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Navigation: FC = () => {
  const logo = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <nav className="flex justify-between items-center h-[70px]">
      <div className="w-[117px]">
        <GatsbyImage
          image={logo.file.childImageSharp.gatsbyImageData}
          alt="logo tojonirina"
        />
      </div>
      <div className="flex w-1/4 justify-between">
        <Link to="/">About</Link>
        <Link to="/">Project</Link>
        <Link to="/">Contact</Link>
      </div>
    </nav>
  );
};

export default Navigation;
