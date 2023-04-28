import * as React from "react";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import Layout from "../containers/Layout";
import { GatsbyImage } from "gatsby-plugin-image";
import AboutCard from "../components/AboutCard";
import ProjectCard from "../components/ProjectCard";
import DesignCard from "../components/DesignCard";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const { project } = data;
  return (
    <Layout>
      <>
        {/* head */}
        <section className="flex justify-between items-center offset sm:flex-col-reverse">
          <div className="w-1/2 sm:w-full">
            <h1 className="text-[22px] leading-[40px]">
              Hello,
              <br />
              <span className="text-[44px] sm:text-[50px] font-medium text-left text-bleuSky ml-[-3px]">
                I'm Tojonirina
              </span>
            </h1>
            <p className=" mb-5 text-gray-400">
              I am a self-taught software developer who is passionate about
              technology, especially artificial intelligence. I am currently a
              freelancer seeking new opportunities.
            </p>
            <Link
              to="/contact"
              className="bg-blue py-2 px-3 text-white polygone duration-75 hover:mb-[4px]"
            >
              Contact me now
            </Link>
          </div>
          <div className="w-1/2 sm:w-full">
            <GatsbyImage
              image={data.profileImage.childImageSharp.gatsbyImageData}
              alt=""
            />
          </div>
        </section>
        {/* about */}
        <section className="offset !py-10">
          <div className="flex justify-between my-[5%] sm:flex-col">
            <AboutCard
              img={
                <GatsbyImage
                  image={data.about_1.childImageSharp.gatsbyImageData}
                  alt=""
                />
              }
              title="Leader"
              content="
              Leadership is part of my life. It keeps me organized and motivated to improve my skills every day. 
            
              "
            />
            <AboutCard
              img={
                <GatsbyImage
                  image={data.about_2.childImageSharp.gatsbyImageData}
                  alt=""
                />
              }
              title="Designer"
              content="Design is the heart of a project. 
              It is a cyclical process that ensures the evolution of the application.
              "
            />
            <AboutCard
              img={
                <GatsbyImage
                  image={data.about_3.childImageSharp.gatsbyImageData}
                  alt=""
                />
              }
              title="Developer"
              content="In 2019, I was interested in what was going on behind the scenes. 
              I started with macros and writing scripts."
            />
          </div>
        </section>
        {/* design */}
        <section className="offset">
          <h3 className="title text-center">Design Skills</h3>
          <div className="flex justify-center my-[5%]">
            <GatsbyImage
              image={data.bg_2.childImageSharp.gatsbyImageData}
              alt="skills"
              className="w-2/3 sm:w-full"
            />
          </div>
          <div className="flex flex-wrap pb-10">
            <DesignCard
              title="Adobe Xd"
              img={data.xd.childImageSharp.gatsbyImageData}
              bg="bg-pink-400"
            />
            <DesignCard
              title="Figma"
              img={data.figma.childImageSharp.gatsbyImageData}
              bg="bg-bleuSky"
            />
            <DesignCard
              title="Photoshop"
              img={data.ps.childImageSharp.gatsbyImageData}
              bg="bg-sky-600"
            />
            <DesignCard
              title="Illustrator"
              img={data.ai.childImageSharp.gatsbyImageData}
              bg="bg-[#DC6920]"
            />
            <DesignCard
              title="After Effect"
              img={data.ae.childImageSharp.gatsbyImageData}
              bg="bg-[#CF96FD]"
            />
          </div>
        </section>
        {/* tech */}
        <section className="bg-white !py-5">
          <div className="offset flex flex-col items-center">
            <h3 className="title text-center text-[#350fa2]">Tech Skills</h3>
            <GatsbyImage
              image={data.tech.childImageSharp.gatsbyImageData}
              alt="tojonirina skills"
              className="w-2/3 sm:w-full"
            />
          </div>
        </section>
        {/* project */}
        <section className="offset">
          <div className="my-[5%] border border-purple-600 rounded-[5px] p-5">
            <div className="grid grid-cols-4 gap-10 auto-rows-[250px] sm:grid-cols-1">
              {project.nodes.slice(0, 3).map((item: any) => (
                <ProjectCard data={item} />
              ))}
            </div>

            <p className="text-right text-bleuSky">
              <Link to="/project">See More</Link>
            </p>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home</title>;

export const query = graphql`
  query {
    profileImage: file(relativePath: { eq: "Profile.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    about_1: file(relativePath: { eq: "about-1.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    about_2: file(relativePath: { eq: "about-2.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    about_3: file(relativePath: { eq: "about-3.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    bg_2: file(relativePath: { eq: "bg-2.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    tech: file(relativePath: { eq: "tech.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    ps: file(relativePath: { eq: "tag/ps.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    xd: file(relativePath: { eq: "tag/xd.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    ai: file(relativePath: { eq: "tag/ai.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    figma: file(relativePath: { eq: "tag/figma.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    ae: file(relativePath: { eq: "tag/ae.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    project: allProjectJson {
      nodes {
        name
        link
        tag {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        thumb {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        content {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
