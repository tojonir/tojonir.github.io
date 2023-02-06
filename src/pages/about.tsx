import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, HeadFC, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import IconTool from "../components/IconTool";
import Layout from "../containers/Layout";
import SocialNetwork from "../containers/SocialNetwork";

const About: FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <div className="grid grid-cols-2 py-[3%]">
        <div className="">
          <p className="text-[44px]">About me</p>
          <p className="text-[19px]">
            I am a{" "}
            <span className="font-semibold text-bleuSky">
              self-taugth developer
            </span>
            , pasionate about technology especially Artificial Inteligence. I am
            currently a freelancer seeking for new opportunities.
            <br />
            <br />I have been in this field over 4 yers now.During that time I
            have passed through many challenges which strengthn my skills,
            <span className="italic text-bleuSky">
              ”which does't kill you makes you stronger”
            </span>
            . I hope one day I will have my own tech company.
            <br />
            <br />I strongly believe that my reliable personality,ponctuality,
            fast-learning are the pillar of my proffessionalism and development.
            <br />
            <br /> The best part i love as a developer is that there is always
            new <span className="text-bleuSky">challenges</span>,unendless
            creativity,to face.Moreover, huge{" "}
            <span className="text-bleuSky">community</span> of developer is very
            friendly,no matter where they come from either the age.
            <br />
            <br /> I love working with different people from different
            background. However, working as a team might be a nightmare without
            a rule and methodology. Therefore, I use the{" "}
            <span className=" font-semibold text-bleuSky">
              Agile Methodology
            </span>{" "}
            to manage project. It has a huge impact in each team player to
            achieve the goal and insure the{" "}
            <span className="text-bleuSky">continious delivery</span>.
            <br />
            <br /> In Order to keep me up-to-date, I master some software apart
            <div className="flex items-center justify-between w-2/3 py-2">
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
                icon={brands("git")}
                title="git"
                link="https://git-scm.com/"
              />
              <IconTool
                icon={brands("github")}
                title="github"
                link="https://github.com/"
              />
              <IconTool
                icon={brands("stack-overflow")}
                title="stackoverflow"
                link="https://stackoverflow.com/"
              />
              <IconTool
                icon={brands("docker")}
                title="docker"
                link="https://www.docker.com/"
              />
            </div>
            <br />
            <br /> Thanks for visiting me,
            <br /> Feel free to ask me anything, I am glad to help.
            <br /> Also I am impatient to hear about your next project.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-1/2">
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
