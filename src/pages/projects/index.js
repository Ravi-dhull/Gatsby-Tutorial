import React from 'react'
import Layout from '../../components/Layout'
// import styles from '../../styles/projects.module.css'

import Img from "gatsby-image"
import '../../styles/global.css'
import { Link, graphql } from 'gatsby'

const Projects = ({ data }) => {
  console.log(data)
  const projects = data.projects.nodes

  return (
    <Layout>
      <div className='portfolio'>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className='projects'>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
              <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Projects

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`