import * as React from "react";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import Layout from "../containers/Layout";
import { GatsbyImage } from "gatsby-plugin-image";
import AboutCard from "../components/AboutCard";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const { project } = data;
  console.log(data);
  return (
    <Layout>
      <>
        <div className="flex justify-between items-center">
          <h1 className="text-[45px] leading-[65px]">
            Let's get into the
            <br />
            <span className="text-[90px] font-medium text-left text-orange ml-[-3px]">
              NEXT LEVEL
            </span>
          </h1>
          <div className="w-1/2">
            <GatsbyImage
              image={data.profileImage.childImageSharp.gatsbyImageData}
              alt=""
            />
          </div>
        </div>
        <h3 className="text-[44px] text-center mt-10">
          I am passionate of <span className="text-bleuSky">Technology</span>
        </h3>
        <div className="flex justify-between my-[5%]">
          <AboutCard
            img={
              <GatsbyImage
                image={data.about_1.childImageSharp.gatsbyImageData}
                alt=""
              />
            }
            title="Leader"
            content="I am a leader"
          />
          <AboutCard
            img={
              <GatsbyImage
                image={data.about_2.childImageSharp.gatsbyImageData}
                alt=""
              />
            }
            title="Designer"
            content="I am a leader"
          />
          <AboutCard
            img={
              <GatsbyImage
                image={data.about_3.childImageSharp.gatsbyImageData}
                alt=""
              />
            }
            title="Developper"
            content="I am a leader"
          />
        </div>
        <h3 className="text-[44px] text-center mt-10">Project life cycle</h3>
        <div className="flex justify-center my-[5%]">
          <GatsbyImage
            image={data.bg_2.childImageSharp.gatsbyImageData}
            alt="skills"
          />
        </div>
        <div className="my-[5%] border border-purple-600 rounded-[5px] p-5">
          <div className="grid grid-cols-4 auto-rows-[250px]">
            {project.nodes.slice(0, 3).map((item: any) => (
              <div className="relative group">
                <Link to={`/project/${item.slug}`}>
                  <GatsbyImage
                    image={item.thumb.childImageSharp.gatsbyImageData}
                    alt={item.name}
                    className="h-full"
                  />
                  <div className="absolute top-0 w-full h-full hidden flex-col justify-between bg-black bg-opacity-10 group-hover:flex">
                    <div className="flex justify-end">
                      {item.tag.map((tag: any) => (
                        <GatsbyImage
                          image={tag.childImageSharp.gatsbyImageData}
                          alt={item.name}
                          className="w-[30px] ml-3"
                        />
                      ))}
                    </div>
                    <p className="font-semibold p-5">{item.name}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <p className="text-right text-bleuSky">
            <Link to="/project">See More</Link>
          </p>
        </div>
      </>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query {
    profileImage: file(relativePath: { eq: "profile.png" }) {
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
    project: allProjectJson {
      nodes {
        slug
        name
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
      }
    }
  }
`;
