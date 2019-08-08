import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'





const TestStack = ({children}) => {

    const picks = useStaticQuery(getPicks)


    return (
        
     
    <div  id="stack" className="container mx-auto w-auto sm:px-8 pt-20 sm:pt-32 pb-8 flex-grow" >
              <div className="bg-white">
                <div className="container mx-auto flex flex-col px-6 sm:px-56 sm:mx-2 -mb-3">
               
            
                 <div className="flex flex-col">
                      <h1 className="text-black text-3xl sm:text-5xl font-bold py-2 text-left tracking-normal antialiased">Our Stack</h1>
                      <div className="bg-black h-2 w-24 -mt-4 sm:-mt-2"></div>
                 </div>
            
              
              <div className="flex flex-col pt-10 sm:pt-20">
                             <div className="w-full flex items-center border-b-2 border-black">
                               <span className="text-black text-xl font-bold pb-1 tracking-normal">Languages</span>
                            </div>
                            
                            
                         <div class="flex flex-wrap items-center -mb-4 sm:w-full  sm:mx-24 pt-10 sm:px-20">
                          <div class="w-1/4 mb-4  px-1 sm:px-2  ">
                          <Img fluid={picks.python.childImageSharp.fluid} alt="python" />
                          </div>
                          <div class="w-1/4 mb-4  sm:px-1  ">
                          <Img fluid={picks.js.childImageSharp.fluid} alt="js" />
                          </div>
                          <div class="w-1/4 mb-4 px-3 sm:px-4  ">
                          <Img fluid={picks.scala.childImageSharp.fluid} alt="scala" />
                          </div>
                          </div> 
              </div>
                   

              <div className="flex flex-col pt-10">
                             <div className="w-full flex items-center border-b-2 border-black">
                               <span className="text-black text-xl font-bold pb-1 tracking-normal">Serverless tools</span>
                            </div>
                            
                            
                         <div class="flex flex-wrap items-center -mb-4 sm:w-full sm:mx-16 pt-10 sm:px-16">
                          <div class="w-1/4 mb-4 px-8 sm:px-12  ">
                          <Img fluid={picks.lambda.childImageSharp.fluid} alt="lambda" />
                          </div>
                          <div class="w-1/4 mb-4  px-8 sm:px-12  ">
                          <Img fluid={picks.athena.childImageSharp.fluid} alt="athena" />
                          </div>
                          <div class="w-1/4 mb-4  px-8 sm:px-12  ">
                          <Img fluid={picks.glue.childImageSharp.fluid} alt="glue" />
                          </div>
                          <div class="w-1/4 mb-4  px-8 sm:px-12  ">
                          <Img fluid={picks.kinesis.childImageSharp.fluid} alt="kinesis" />
                          </div>
                          <div class="w-1/4 mb-4  px-8 sm:px-12  ">
                          <Img fluid={picks.s3.childImageSharp.fluid} alt="s3" />
                          </div>
                          <div class="w-1/4 mb-4  px-8 sm:px-12  ">
                          <Img fluid={picks.dynamoDB.childImageSharp.fluid} alt="dynamoDB" />
                          </div>
                          <div class="w-1/4 mb-4  px-8 sm:px-12  ">
                          <Img fluid={picks.aurora.childImageSharp.fluid} alt="aurora" />
                          </div>
                          <div class="w-1/4 mb-4 px-8  sm:px-12  ">
                          <Img fluid={picks.gateway.childImageSharp.fluid} alt="gateway" />
                          </div>
                          <div class="w-1/4 mb-4 px-8  sm:px-12  ">
                          <Img fluid={picks.quicksight.childImageSharp.fluid} alt="quicksight" />
                          </div>
                          </div> 
              </div>

              <div className="flex flex-col pt-10">
                             <div className="w-full flex items-center border-b-2 border-black">
                               <span className="text-black text-xl font-bold pb-1 tracking-normal">Managed tools</span>
                            </div>
                            
                            
                         <div class="flex flex-wrap items-center -mb-4 sm:w-full  sm:mx-16 pt-10 sm:px-16">
                          <div class="w-1/4 mb-4  px-8 sm:px-12  ">
                          <Img fluid={picks.redshift.childImageSharp.fluid} alt="redshift" />
                          </div>
                          <div class="w-1/4 mb-4  px-8 sm:px-12  ">
                          <Img fluid={picks.pipeline.childImageSharp.fluid} alt="pipeline" />
                          </div>
                          <div class="w-1/4 mb-4 px-8 sm:px-12  ">
                          <Img fluid={picks.emr.childImageSharp.fluid} alt="emr" />
                          </div>
                          <div class="w-1/4 mb-4 px-8 sm:px-12  ">
                          <Img fluid={picks.hive.childImageSharp.fluid} alt="hive" />
                          </div>
                          <div class="w-1/4 mb-4  px-6 sm:px-10  mr-5">
                          <Img fluid={picks.kafka.childImageSharp.fluid} alt="kafka" />
                          </div>
                          <div class="w-1/4 mb-4  px-4 sm:px-8  ">
                          <Img fluid={picks.presto.childImageSharp.fluid} alt="presto" />
                          </div>
                          <div class="w-1/4 mb-4  px-6 sm:px-10  ">
                          <Img fluid={picks.spark.childImageSharp.fluid} alt="spark" />
                          </div>
                  
                          </div> 
              </div>
              <div className="flex flex-col pt-10">
                             <div className="w-full flex items-center border-b-2 border-black">
                               <span className="text-black text-xl font-bold pb-1 tracking-normal">Other tools</span>
                            </div>
                            
                            
                         <div class="flex flex-wrap items-center -mb-4 sm:w-full  sm:mx-16 pt-4 sm:px-20">
                         <div class="w-1/4 mb-4  px-3 sm:px-5  ">
                          <Img fluid={picks.googleAnalytics.childImageSharp.fluid} alt="googleAnalytics" />
                          </div>
                         <div class="w-1/4 mb-4  px-4 sm:px-6  ">
                          <Img fluid={picks.tagManager.childImageSharp.fluid} alt="tag-manager" />
                          </div>
                          <div class="w-1/4 mb-4 px-1 sm:px-2  ">
                          <Img fluid={picks.tealium.childImageSharp.fluid} alt="tealium" />
                          </div>
                          <div class="w-1/4 mb-4 px-4 sm:px-5  ">
                          <Img fluid={picks.mixpanel.childImageSharp.fluid} alt="mixpanel" />
                          </div>
                          
                          </div> 
              </div>
                   
   
             
              </div>
   </div>
          </div>
       )
  
}



const getPicks = graphql`
query Picks {
    python: file(relativePath: {eq: "python.png"}) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      js: file(relativePath: {eq: "js.png"}) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      scala: file(relativePath: {eq: "scala.png"}) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lambda: file(relativePath: {eq: "lambda.png"}) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      athena: file(relativePath: {eq: "athena.png"}) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      glue: file(relativePath: {eq: "glue.png"}) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kinesis: file(relativePath: {eq: "kinesis.png"}) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      s3: file(relativePath: {eq: "s3.png"}) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dynamoDB: file(relativePath: {eq: "dynamoDB.png"}) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aurora: file(relativePath: {eq: "aurora.png"}) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gateway: file(relativePath: {eq: "gateway.png"}) {
        childImageSharp {
          fluid(maxWidth: 151) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      quicksight: file(relativePath: {eq: "quicksight.png"}) {
        childImageSharp {
          fluid(maxWidth: 151) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      redshift: file(relativePath: {eq: "redshift.png"}) {
        childImageSharp {
          fluid(maxWidth: 151) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pipeline: file(relativePath: {eq: "pipeline.png"}) {
        childImageSharp {
          fluid(maxWidth: 151) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      emr: file(relativePath: {eq: "emr.png"}) {
        childImageSharp {
          fluid(maxWidth: 151) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spark: file(relativePath: {eq: "spark.png"}) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kafka: file(relativePath: {eq: "kafka.png"}) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      presto: file(relativePath: {eq: "presto.png"}) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hive: file(relativePath: {eq: "hive.png"}) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      googleAnalytics: file(relativePath: {eq: "googleAnalytics.png"}) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tagManager: file(relativePath: {eq: "tagManager.png"}) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tealium: file(relativePath: {eq: "tealium.png"}) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mixpanel: file(relativePath: {eq: "mixpanel.png"}) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      amplitude: file(relativePath: {eq: "amplitude.png"}) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
     
     
      
    }
`


export default TestStack;
