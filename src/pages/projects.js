import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'


const getImages = graphql`
query Images {
    ebay: file(relativePath: {eq: "ebay.png"}) {
        childImageSharp {
          fixed(width: 216, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      context: file(relativePath: {eq: "context.png"}) {
        childImageSharp {
          fixed(width: 216, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      extend: file(relativePath: {eq: "extend.jpg"}) {
        childImageSharp {
          fixed(width: 216, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      haskell: file(relativePath: {eq: "haskell.png"}) {
        childImageSharp {
          fixed(width: 216, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      meets: file(relativePath: {eq: "meets.png"}) {
        childImageSharp {
          fixed(width: 216, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      paypal: file(relativePath: {eq: "paypal.png"}) {
        childImageSharp {
          fixed(width: 216, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      rtr: file(relativePath: {eq: "rtr.png"}) {
        childImageSharp {
          fixed(width: 216, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      trov: file(relativePath: {eq: "trov.png"}) {
        childImageSharp {
          fixed(width: 216, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      zara: file(relativePath: {eq: "zara.png"}) {
        childImageSharp {
          fixed(width: 216, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
}
`

const Projects = ({children}) => {


  const images = useStaticQuery(getImages)


    return (
     
         <div  id="projects" className="container mx-auto w-auto sm:px-2 pt-48 pb-8 flex-grow">
           <div className="bg-white">
             <div className="flex flex-col sm:px-56 mx-8 -mb-3">
            
                     <div className="flex flex-col">
                         <h1  className="text-4xl text-left font-bold tracking-normal">Projects & Clients</h1> 
                         <div className="bg-black h-2 w-24 -mt-2"></div>
                      </div>

                    <div className="w-full flex flex-wrap justify-center pt-16 -mx-6 ">
                        <div className="flex ">
                        <Img fixed={images.ebay.childImageSharp.fixed} alt="ebay" className=" m-3"/>
                        <Img fixed={images.rtr.childImageSharp.fixed} alt="rtr" className=" m-3"/>
                         <Img fixed={images.zara.childImageSharp.fixed} alt="zara" className=" m-3"/>
                        </div>
                    <div className="flex ">
                    <Img fixed={images.paypal.childImageSharp.fixed} alt="paypal" className=" m-3"/>
                    <Img fixed={images.context.childImageSharp.fixed} alt="context" className=" m-3"/>
                    <Img fixed={images.trov.childImageSharp.fixed} alt="trov" className=" m-3"/>
                    </div>

                     <div className="flex ">
                     <Img fixed={images.extend.childImageSharp.fixed} alt="extend" className="m-3"/>
                    <Img fixed={images.meets.childImageSharp.fixed} alt="meets" className=" m-3"/>
                    <Img fixed={images.haskell.childImageSharp.fixed} alt="haskell" className=" m-3"/>
                     </div>
                   
                   
                    </div>
             </div>
           </div>

       </div>
      
       
      
          
        
    )
}

export default Projects;