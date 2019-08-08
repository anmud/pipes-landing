import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {Link} from 'gatsby'


const getImages = graphql`
query Images {
  fahrrad: file(relativePath: {eq: "fahrrad.png"}) {
    childImageSharp {
      fluid(maxWidth: 177, quality: 92){
        aspectRatio
        ...GatsbyImageSharpFluid
      }
    }
  }
  carhartt: file(relativePath: {eq: "carhartt.png"}) {
    childImageSharp {
      fluid(maxWidth: 177, quality: 92) {
        aspectRatio
        ...GatsbyImageSharpFluid
      }
    }
  }
  casio: file(relativePath: {eq: "casio.png"}) {
    childImageSharp {
      fluid(maxWidth: 177, quality: 92) {
        aspectRatio
        ...GatsbyImageSharpFluid
      }
    }
  }
  kreditech: file(relativePath: {eq: "kreditech.png"}) {
    childImageSharp {
      fluid(maxWidth: 177, quality: 92) {
        aspectRatio
        ...GatsbyImageSharpFluid
      }
    }
  }
  easyfairs: file(relativePath: {eq: "easyfairs.png"}) {
    childImageSharp {
      fluid(maxWidth: 177, quality: 92) {
        aspectRatio
        ...GatsbyImageSharpFluid
      }
    }
  }
  continental: file(relativePath: {eq: "continental.png"}) {
    childImageSharp {
      fluid(maxWidth: 177, quality: 92) {
        aspectRatio
        ...GatsbyImageSharpFluid
      }
    }
  }
  tamaris: file(relativePath: {eq: "tamaris.png"}) {
    childImageSharp {
      fluid(maxWidth: 177, quality: 92) {
        aspectRatio
        ...GatsbyImageSharpFluid
      }
    }
  }
  otto: file(relativePath: {eq: "otto.png"}) {
    childImageSharp {
      fluid(maxWidth: 177, quality: 92) {
        aspectRatio
        ...GatsbyImageSharpFluid
      }
    }
  }
  cocaCola: file(relativePath: {eq: "cocaCola.png"}) {
    childImageSharp {
      fluid(maxWidth: 177, quality: 92) {
        aspectRatio
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`



const Projects = ({data}) => {
 
const images = useStaticQuery(getImages)



    return (
     
         <div  id="projects" className="container mx-auto w-auto sm:px-2 pt-32 sm:pt-48 pb-8 flex-grow">
           <div className="bg-white">
             <div className="container mx-auto flex flex-col px-4 sm:px-56 sm:mx-8 -mb-3">
            
                     <div  className="flex flex-col px-3">
                         <h1  className="text-2xl sm:text-4xl text-left font-bold tracking-normal">Projects & Clients</h1> 
                         <div className="bg-black h-2 w-24 -mt-2"></div>
                      </div>

                
        

        
              <div className="flex flex-wrap -mb-4 sm:w-full  sm:-mx-16 pt-12 sm:px-16" >
           
                  <div  class="w-1/3 mb-4  px-2  ">
                     <Link to="/fahrrad/" ><Img fluid={images.fahrrad.childImageSharp.fluid} alt="fahrrad" /></Link>
                  </div>
                  <div class="w-1/3 mb-4   px-2">
                    <Link to="/carhartt/"><Img fluid={images.carhartt.childImageSharp.fluid}  alt="carhartt"  /></Link>
                  </div>
                  <div class="w-1/3 mb-4   px-2">
                    <Link to="/casio/"><Img fluid={images.casio.childImageSharp.fluid}   alt="casio" /></Link>
                   </div>
                  <div class="w-1/3 mb-4   px-2">
                    <Link to="/kreditech/"><Img fluid={images.kreditech.childImageSharp.fluid} alt="kreditech" /></Link>
                  </div>
                   <div class="w-1/3 mb-4   px-2">
                     <Link to="/easyfairs/"><Img fluid={images.easyfairs.childImageSharp.fluid} alt="easyfairs"  /></Link>
                  </div>
                   <div class="w-1/3 mb-4   px-2">
                     <Link to="/continental/"><Img fluid={images.continental.childImageSharp.fluid} alt="continental" /></Link>
                     </div>
                   <div class="w-1/3 mb-4   px-2">
                   <Link to="/tamaris/"><Img fluid={images.tamaris.childImageSharp.fluid} alt="tamaris"/></Link>
                   </div>
                   <div class="w-1/3 mb-4   px-2">
                   <Link to="/otto/"><Img fluid={images.otto.childImageSharp.fluid} alt="otto"/></Link>
                     </div>
                     <div class="w-1/3 mb-4   px-2">
                     <Link to="/coca-cola/"><Img fluid={images.cocaCola.childImageSharp.fluid} alt="coca-cola"/></Link>
                     </div>  
   
            
             </div>
            
           </div>
</div>
       </div>
    )
}




export default Projects;