import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";
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
  const [navBg, setNavBg] = useState<string>("");

  useEffect(() => {
    document.getElementById("main")?.addEventListener("scroll", (e) => {
      const top: any = document.getElementById("main")?.scrollTop;
      if (top === 0) {
        setNavBg("");
      }
      if (top >= 50) {
        setNavBg("bg-[#350fa2]");
      }
    });
  }, []);

  return (
    <nav
      className={`flex justify-between items-center h-[70px] offset sticky top-0 z-10 ${navBg}`}
    >
      <GatsbyImage
        image={logo.file.childImageSharp.gatsbyImageData}
        alt="logo tojonirina"
        className="w-[10px]"
      />
      <div className="flex w-1/2 items-center justify-between">
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
