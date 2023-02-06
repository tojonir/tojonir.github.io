import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { FC } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Navigation: FC = () => {
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
    <nav className="flex justify-between items-center h-[70px] px-[130px]">
      <GatsbyImage
        image={logo.file.childImageSharp.gatsbyImageData}
        alt="logo tojonirina"
        className="w-[10px]"
      />
      <div className="flex w-1/3 items-center justify-between">
        <Link to="/" activeClassName="text-bleuSky">
          Home
        </Link>
        <Link to="/about" activeClassName="text-bleuSky">
          About
        </Link>
        <Link to="/project" activeClassName="text-bleuSky">
          Project
        </Link>
        <Link to="/contact" className="border border-blue py-1 px-3 text-blue">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
