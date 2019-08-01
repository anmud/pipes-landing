import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'


const getImages = graphql`
query Images {
    ebay: file(relativePath: {eq: "ebay.png"}) {
        childImageSharp {
          fluid(maxWidth: 216, quality: 72){
            ...GatsbyImageSharpFluid
          }
        }
      }
      context: file(relativePath: {eq: "context.png"}) {
        childImageSharp {
          fluid(maxWidth: 216, quality: 72) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      extend: file(relativePath: {eq: "extend.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 216, quality: 72) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      haskell: file(relativePath: {eq: "haskell.png"}) {
        childImageSharp {
          fluid(maxWidth: 216, quality: 72) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      meets: file(relativePath: {eq: "meets.png"}) {
        childImageSharp {
          fluid(maxWidth: 216, quality: 72) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      paypal: file(relativePath: {eq: "paypal.png"}) {
        childImageSharp {
          fluid(maxWidth: 216, quality: 72) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rtr: file(relativePath: {eq: "rtr.png"}) {
        childImageSharp {
          fluid(maxWidth: 216, quality: 72) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trov: file(relativePath: {eq: "trov.png"}) {
        childImageSharp {
          fluid(maxWidth: 216, quality: 72) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      zara: file(relativePath: {eq: "zara.png"}) {
        childImageSharp {
          fluid(maxWidth: 216, quality: 72) {
            ...GatsbyImageSharpFluid
          }
        }
      }
}
`

const Projects = ({children}) => {


  const images = useStaticQuery(getImages)


    return (
     
         <div  id="projects" className="container mx-auto w-auto sm:px-2 pt-16 sm:pt-48 pb-8 flex-grow">
           <div className="bg-white">
             <div className="container mx-auto flex flex-col px-4 sm:px-56 sm:mx-8 -mb-3">
            
                     <div className="flex flex-col px-3">
                         <h1  className="text-2xl sm:text-4xl text-left font-bold tracking-normal">Projects & Clients</h1> 
                         <div className="bg-black h-2 w-24 -mt-2"></div>
                      </div>

                    <div className="container flex flex-wrap sm:w-full justify-center pt-8 sm:pt-16 sm:-mx-6 ">
                    
                      <div className="flex-auto">
                       <Img fluid={images.ebay.childImageSharp.fluid} alt="ebay" className=" m-1 sm:m-3"/>
                       <Img fluid={images.rtr.childImageSharp.fluid} alt="rtr" className=" m-1 sm:m-3"/>
                       <Img fluid={images.zara.childImageSharp.fluid} alt="zara" className=" m-1 sm:m-3"/>
                      </div>
                  <div className="flex-auto ">
                  <Img fluid={images.paypal.childImageSharp.fluid} alt="paypal" className=" m-1 sm:m-3"/>
                  <Img fluid={images.context.childImageSharp.fluid} alt="context" className=" m-1 sm:m-3"/>
                  <Img fluid={images.trov.childImageSharp.fluid} alt="trov" className="m-1 sm:m-3"/>
                  </div>

                   <div className="flex-auto ">
                   <Img fluid={images.extend.childImageSharp.fluid} alt="extend" className="m-1 sm:m-3"/>
                  <Img fluid={images.meets.childImageSharp.fluid} alt="meets" className="m-1 sm:m-3"/>
                  <Img fluid={images.haskell.childImageSharp.fluid} alt="haskell" className="m-1 sm:m-3"/>
                   </div>
                      
                     
                   
                   
                    </div>
             </div>
           </div>

       </div>
      
       
      
          
        
    )
}

export default Projects;