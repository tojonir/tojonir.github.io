import { graphql, HeadFC, PageProps } from "gatsby";
import React from "react";
import { FC } from "react";
import ProjectCard from "../components/ProjectCard";
import Layout from "../containers/Layout";

const Project: FC<PageProps> = ({ data }) => {
  const { project } = data;
  return (
    <Layout>
      <div className="grid grid-cols-4 auto-rows-[250px] my-[5%] offset">
        {project.nodes.map((item: any) => (
          <ProjectCard data={item} />
        ))}
      </div>
    </Layout>
  );
};

export default Project;

export const Head: HeadFC = () => <title>Project</title>;

export const query = graphql`
  query {
    project: allProjectJson {
      nodes {
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
        content {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
