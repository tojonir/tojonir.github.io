import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, HeadFC, PageProps } from "gatsby";
import React, { useState } from "react";
import { FC } from "react";
import Category from "../components/Category";
import ProjectCard from "../components/ProjectCard";
import Layout from "../containers/Layout";
import { category } from "../utils/constant";

const Project: FC<PageProps> = ({ data }) => {
  const [filter, setFilter] = useState<string[]>([]);
  const { project } = data;
  return (
    <Layout>
      <div className="offset !mb-[5%]">
        <div className="rounded-none border-b border-b-gray-300 pt-5">
          <div className="flex overflow-x-scroll">
            {category.map((item) => (
              <Category
                title={item.title}
                onClick={() =>
                  filter.indexOf(item.slug) === -1
                    ? setFilter([...filter, item.slug])
                    : null
                }
                isSelected={filter.indexOf(item.slug) !== -1}
              />
            ))}
          </div>
          <div className="flex flex-wrap py-5">
            {filter?.length === 0 ? (
              <div className="flex items-center bg-gray-600 w-fit rounded-[20px] px-2 py-1">
                <span className="text-[12px]">No filters</span>
                <FontAwesomeIcon
                  icon={solid("close")}
                  className="text-[11px] ml-3"
                />
              </div>
            ) : (
              filter?.map((item) => (
                <div className="flex items-center bg-gray-600 w-fit rounded-[20px] px-2 py-1 mr-3 mb-3 cursor-pointer bg-opacity-50 hover:bg-opacity-100">
                  <span className="text-[12px]">{item}</span>
                  <FontAwesomeIcon
                    icon={solid("close")}
                    className="text-[11px] ml-3"
                    onClick={() =>
                      setFilter(filter.filter((elem) => elem !== item))
                    }
                  />
                </div>
              ))
            )}
            {filter.length > 0 && (
              <div
                className="flex items-center bg-red-600 w-fit rounded-[20px] px-2 py-1 mr-3 mb-3 cursor-pointer bg-opacity-100 hover:bg-opacity-95"
                onClick={() => setFilter([])}
              >
                <span className="text-[12px]">CLear filter</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-10 p-5">
          {project.nodes.map((item: any, i: number) =>
            filter.length === 0 ? (
              <ProjectCard key={i} data={item} />
            ) : filter.indexOf(item.category) !== -1 ? (
              <ProjectCard key={i} data={item} />
            ) : null
          )}
        </div>
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
        category
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
