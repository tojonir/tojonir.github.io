import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import Layout from "../containers/Layout";
import { GatsbyImage } from "gatsby-plugin-image";
import AboutCard from "../components/AboutCard";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <>
        <div className="flex justify-between items-center">
          <h1 className="text-[50px]">
            Let's get into the
            <br />
            <span className="text-[90px]">NEXT LEVEL</span>
          </h1>
          <div className="w-1/2">
            <GatsbyImage
              image={data.profileImage.childImageSharp.gatsbyImageData}
              alt=""
            />
          </div>
        </div>
        <h3 className="text-[44px] text-center mt-10">
          I am passionate of <span>Technology</span>
        </h3>
        <div className="flex justify-between mx-5">
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
  }
`;
