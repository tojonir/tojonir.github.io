import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { graphql, HeadFC, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import IconTool from "../components/IconTool";
import Layout from "../containers/Layout";
import SocialNetwork from "../containers/SocialNetwork";

const About: FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <div className="flex sm:flex-col-reverse  offset !py-[3%]">
        <div className="p-5 sm:p-0">
          <p className="text-[44px]">About me</p>
          <p className="text-[19px] text-justify">
            I am a{" "}
            <span className="font-semibold text-bleuSky">
              self-taught developer
            </span>{" "}
            who is passionate about technology, especially artificial
            intelligence. I am currently a freelancer seeking new opportunities.
            <br />
            <br />I have been in this field for over 4 years now. I have passed
            through many challenges that have strengthened my skills during that
            time.{" "}
            <span className="italic text-bleuSky">
              "What doesn't kill you makes you stronger."
            </span>{" "}
            I hope one day I will have my own tech company.
            <br />
            <br />
            My reliable personality, punctuality, and fast learning are the
            pillars of my professionalism and development.
            <br />
            <br /> The best part about being a developer is that there are
            always new <span className="text-bleuSky"> challenges </span>and
            opportunities for creativity. Moreover, a huge{" "}
            <span className="text-bleuSky"> community </span> of developers is
            very friendly, no matter where they come from or their age.
            <br />
            <br /> I love working with different people from different
            backgrounds. However, working as a team might be a nightmare without
            rules and methodology. Therefore, I use the{" "}
            <span className=" font-semibold text-bleuSky">
              Agile Methodology
            </span>{" "}
            to manage projects. It has a huge impact on each team member to
            achieve the goal and ensure{" "}
            <span className="text-bleuSky">continuous delivery.</span>
            <br />
            <br /> I use some software to keep me up-to-date.
            <div className="flex items-center sm:flex-wrap justify-between w-2/3 sm:w-full py-2">
              <IconTool
                icon={brands("slack")}
                title="slack"
                link="https://slack.com/"
              />
              <IconTool
                icon={brands("google")}
                title="google"
                link="https://google.com/"
              />
              <IconTool
                icon={brands("jira")}
                title="jira"
                link="https://jira.atlassian.com/"
              />
              <IconTool
                icon={brands("trello")}
                title="trello"
                link="https://trello.com/"
              />
              <IconTool
                icon={brands("git")}
                title="git"
                link="https://git-scm.com/"
              />
              <IconTool
                icon={brands("github")}
                title="github"
                link="https://github.com/"
              />
            </div>
            <br />
            <br /> Thank you for your visit,
            <br /> Feel free to ask me anything, I am glad to help.
            <br /> Also I am impatient to hear about your next project.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="">
            <GatsbyImage
              image={data.img.childImageSharp.gatsbyImageData}
              alt="tojonirina"
            />
            <SocialNetwork />
            <p className="font-medium py-1 pt-3">ANDRIANARIJAONA Tojonirina</p>
            <p className="py-1">tojonirinaandrianarijaona@gmail.com</p>
            <p className="py-1">+261 34 09 112 78</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

export const Head: HeadFC = () => <title>About</title>;

export const query = graphql`
  query {
    img: file(relativePath: { eq: "me.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;
