import { graphql, Link, useStaticQuery } from "gatsby";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { FC } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import anime from "animejs/lib/anime.es.js";
import Logo from "../components/Logo";

const Navigation: FC = () => {
  const [navBg, setNavBg] = useState<string>("");
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const toogleMenuHandler = () => {
    mobileMenu
      ? anime({
          targets: document.getElementById("mobileMenuElement"),
          right: "100%",
          easing: "easeInOutSine",
          duration: 500,
        })
      : anime({
          targets: document.getElementById("mobileMenuElement"),
          right: "33%",
          easing: "easeInOutSine",
          duration: 500,
        });
    setMobileMenu(mobileMenu ? false : true);
  };

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
    <nav className={`flex items-center h-[70px] sticky top-0 z-10 ${navBg}`}>
      <div className="offset flex justify-between items-center w-full">
        <Logo />

        <div className="flex w-1/2 items-center justify-between md:hidden">
          <Link to="/" activeClassName="text-bleuSky">
            Home
          </Link>
          <Link to="/about" activeClassName="text-bleuSky">
            About
          </Link>
          <Link to="/project" activeClassName="text-bleuSky">
            Project
          </Link>
          <Link
            to="/contact"
            className="border border-blue py-1 px-3 text-blue"
          >
            Contact
          </Link>
        </div>
        <div className="lg:hidden">
          <FontAwesomeIcon
            icon={mobileMenu ? solid("close") : solid("bars")}
            size="xl"
            onClick={() => toogleMenuHandler()}
          />
        </div>
      </div>
      <div
        id="mobileMenuElement"
        className="flex flex-col absolute top-0 right-[100%] w-2/3 h-screen bg-[#350fa2] lg:hidden"
      >
        <div className="p-3">
          <Logo />
        </div>
        <Link to="/" activeClassName="text-bleuSky" className="m-4">
          Home
        </Link>
        <Link to="/about" activeClassName="text-bleuSky" className="m-4">
          About
        </Link>
        <Link to="/project" activeClassName="text-bleuSky" className="m-4">
          Project
        </Link>
        <Link to="/contact" activeClassName="text-bleuSky" className="m-4">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
