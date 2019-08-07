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
      <div className="container mx-auto w-auto sm:px-2  pt-16 sm:pt-48 pb-8 flex-grow">
          <div className="bg-white">
           <div className="flex flex-wrap sm:px-56 mx-8 -mb-24">
       
         <div className="w-1/2">
         <div className="flex flex-wrap " >
           <div className="w-full mb-4  px-2">
           <Img fluid={image} className="w-70 "/>
            </div>
           
           </div>
         </div> 
          
           
            <div className="w-1/2 text-left pl-4">
            <h1 className="text-4xl font-bold">{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} className=" text-xl leading-normal "/>
             <Link to="/" className="underline text-2xl">Back</Link>
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