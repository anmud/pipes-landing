import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import {Link} from 'gatsby'
import Img from "gatsby-image"



export default ({ data }) => {
  
const post = data.markdownRemark
let image = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <div className="container mx-auto w-auto sm:px-2  pt-24 sm:pt-48 pb-10 flex-grow">
          <div className="bg-white sm:pl-24 ">
           <div className="flex flex-wrap  sm:px-48 mx-8">
       
         <div className="w-full sm:w-1/2 px-4">
           <div className="w-full py-2 ">
           <Img fluid={image} className="w-70 "/>
            </div>
         </div> 
          
           <div className="w-full sm:w-1/2 ">
           <div className="min-w-full text-left text-justify sm:text-left px-4 sm:px-0 pl-4  pt-4 sm:pt-0">
            <h1 className="text-3xl sm:text-4xl font-bold antialiased ">{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} className="min-w-full text-md sm:text-xl leading-normal tracking-wide "/>
             <Link to="/" className="underline text-xl sm:text-2xl">Back</Link>
            </div>
           </div>
          
         
           </div>
          </div>
      
      </div>
    </Layout>
  )
}
export const query = graphql`
query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`