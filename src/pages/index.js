import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import '../styles/global.css'
import Img from "gatsby-image"
import { graphql } from 'gatsby'

export default function Home({data}) {
  return (
    <Layout>
      <section className='header'>
        <div>
          <h2>Designers</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className='btn' to="/projects">My Portfolio Projects</Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`