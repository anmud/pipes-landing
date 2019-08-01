import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'



const getLogos = graphql`
query Logos {
    java: file(relativePath: {eq: "java.png"}) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kotlin: file(relativePath: {eq: "kotlin.png"}) {
        childImageSharp {
          fluid(maxWidth: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      typescript: file(relativePath: {eq: "typescript.png"}) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      haskellBlack: file(relativePath: {eq: "haskellBlack.png"}) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      serverless: file(relativePath: {eq: "serverless.png"}) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      amplify: file(relativePath: {eq: "amplify.png"}) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sam: file(relativePath: {eq: "sam.png"}) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spring: file(relativePath: {eq: "spring.png"}) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hibernate: file(relativePath: {eq: "hibernate.png"}) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aws: file(relativePath: {eq: "aws.png"}) {
        childImageSharp {
          fluid(maxWidth: 57) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lambda: file(relativePath: {eq: "lambda.png"}) {
        childImageSharp {
          fluid(maxWidth: 54) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      appsync: file(relativePath: {eq: "appsync.png"}) {
        childImageSharp {
          fluid(maxWidth: 77) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gateway: file(relativePath: {eq: "gateway.png"}) {
        childImageSharp {
          fluid(maxWidth: 77) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      amazonS: file(relativePath: {eq: "amazonS.png"}) {
        childImageSharp {
          fluid(maxWidth: 77) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sns: file(relativePath: {eq: "sns.png"}) {
        childImageSharp {
          fluid(maxWidth: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kinesis: file(relativePath: {eq: "kinesis.png"}) {
        childImageSharp {
          fluid(maxWidth: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rds: file(relativePath: {eq: "rds.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dynamoDB: file(relativePath: {eq: "dynamoDB.png"}) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      azure: file(relativePath: {eq: "azure.png"}) {
        childImageSharp {
          fluid(maxWidth: 97) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cloud: file(relativePath: {eq: "cloud.png"}) {
        childImageSharp {
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      apache: file(relativePath: {eq: "apache.png"}) {
        childImageSharp {
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      stackery: file(relativePath: {eq: "stackery.png"}) {
        childImageSharp {
          fluid(maxWidth: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      epsagon: file(relativePath: {eq: "epsagon.png"}) {
        childImageSharp {
          fluid(maxWidth: 70) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      netlify: file(relativePath: {eq: "netlify.png"}) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contentful: file(relativePath: {eq: "contentful.png"}) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      auth: file(relativePath: {eq: "auth.png"}) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kafka: file(relativePath: {eq: "kafka.png"}) {
        childImageSharp {
          fluid(maxWidth: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      graphql: file(relativePath: {eq: "graphql.png"}) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rabbit: file(relativePath: {eq: "rabbit.png"}) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gatsby: file(relativePath: {eq: "gatsby.png"}) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      react: file(relativePath: {eq: "react.png"}) {
        childImageSharp {
          fluid(maxWidth: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
}
`


const OurStack = ({children}) => {

    const logos = useStaticQuery(getLogos)


    return (
      
         <div id="stack" className="container mx-auto w-auto sm:px-4 pt-12 sm:pt-32 pb-8 flex-grow">
           <div className="bg-white">
           
           <div className="flex flex-wrap sm:px-56 pt-12">
        <div className=" mb-6 sm:mb-0 sm:mx-auto px-4 flex flex-col ">
          
             <div className="">
                 <div className="flex flex-col">
                      <h1 className="text-black text-2xl sm:text-4xl font-bold py-2 text-left tracking-normal">Our Stack</h1>
                      <div className="bg-black h-2 w-24 -mt-4 sm:-mt-2"></div>
                 </div>
             </div> 
      
                     <div className="flex-grow flex flex-wrap  items-center sm:pb-2 pt-12 sm:pt-24">
                            <div className="w-full flex items-center border-b-2 border-black">
                               <span className="text-black text-xl font-bold pb-1 tracking-normal">Languages</span>
                            </div>
                            <div className="w-full mx-auto sm:mx-24 flex items-center pt-4 pb-6 flex-auto">
                          
                               <Img fluid={logos.java.childImageSharp.fluid} alt="java" className="w-full mr-10 ml-6"/>
                               <Img fluid={logos.kotlin.childImageSharp.fluid} alt="kotlin" className="w-full mr-10"/>
                               <Img fluid={logos.typescript.childImageSharp.fluid} alt="typescript" className="w-full mr-10"/>
                               <Img fluid={logos.haskellBlack.childImageSharp.fluid} alt="haskell" className="w-full mr-0"/>
                    
                            </div>
                            
                    </div>

                 <div className="flex-grow flex flex-wrap  py-6 items-center pb-1 sm:pb-2 mx-1">
                            <div className="w-full flex items-center border-b-2 border-black">
                               <span className="text-black text-xl font-bold pb-1 tracking-normal">Frameworks</span>
                            </div>
                            <div className="w-full mx-auto sm:mx-24 flex items-center pt-4 pb-1 sm:pb-6 flex-auto">
                          
                               <Img fluid={logos.serverless.childImageSharp.fluid} alt="serverless" className="w-full mr-8 ml-6"/>
                               <Img fluid={logos.amplify.childImageSharp.fluid} alt="amplify" className="w-full mr-6"/>
                               <Img fluid={logos.sam.childImageSharp.fluid} alt="sam" className="w-full mr-6"/>
                               <Img fluid={logos.spring.childImageSharp.fluid} alt="spring" className="w-full mr-10"/>
                               <Img fluid={logos.hibernate.childImageSharp.fluid} alt="hibernate" className="w-full mr-0"/>
                    
                            </div>
                            
                 </div>

                 <div className="flex-grow flex flex-wrap  py-6 items-center pb-2">
                            <div className="w-full flex items-center border-b-2 border-black">
                               <span className="text-black text-xl font-bold pb-1 tracking-normal">Serverless tools</span>
                            </div>
                            <div className="container sm:min-w-full mx-6 sm:mx-32 sm:mx-8 flex flex-wrap items-center pt-4 pb-1 flex-auto">

                                <div className="w-full mx-auto sm:mx-24 flex mb-12 items-center flex-auto">
                                <Img fluid={logos.aws.childImageSharp.fluid} alt="aws" className="w-full  mr-16"/>
                               <Img fluid={logos.lambda.childImageSharp.fluid} alt="lambda" className="w-full  mr-16"/>
                               <Img fluid={logos.appsync.childImageSharp.fluid} alt="appsync" className="w-full  mr-16"/>
                               <Img fluid={logos.gateway.childImageSharp.fluid} alt="gateway" className="w-full  mr-12"/>
                               <Img fluid={logos.amazonS.childImageSharp.fluid} alt="s3" className="w-full mr-0"/>
                                </div>
                          
                                <div className="w-full mx-auto sm:mx-24 flex mb-10 items-center flex-auto">
                                <Img fluid={logos.sns.childImageSharp.fluid} alt="sns" className="w-full mr-8 "/>
                               <Img fluid={logos.kinesis.childImageSharp.fluid} alt="kinesis" className="w-full mr-6"/>
                               <Img fluid={logos.rds.childImageSharp.fluid} alt="rds" className="w-full sm:mr-4"/>
                               <Img fluid={logos.dynamoDB.childImageSharp.fluid} alt="dynamoDB" className="w-full mr-6"/>
                               <Img fluid={logos.azure.childImageSharp.fluid} alt="azure" className="w-full mr-0"/>
                    
                                </div>

                                <div className="w-full mx-auto sm:mx-24  flex mb-12 items-center flex-auto">
                                <Img fluid={logos.cloud.childImageSharp.fluid} alt="cloud" className="w-full mr-4 "/>
                               <Img fluid={logos.apache.childImageSharp.fluid} alt="apache" className="w-full mr-10 sm:mr-4"/>
                               <Img fluid={logos.stackery.childImageSharp.fluid} alt="stackery" className="w-full mr-16  sm:mr-4"/>
                               <Img fluid={logos.epsagon.childImageSharp.fluid} alt="epsagon" className="w-full mr-12 sm:mr-6"/>
                               <Img fluid={logos.netlify.childImageSharp.fluid} alt="netlify" className="sw-full mr-0 "/>
                    
                                </div>

                                <div className="w-full mx-auto sm:mx-24 flex mb-4 items-center sm:-ml-64 flex-auto">
                                <Img fluid={logos.contentful.childImageSharp.fluid} alt="contentful" className="w-full mr-48 sm:mr-16 "/>
                                <Img fluid={logos.auth.childImageSharp.fluid} alt="auth" className="w-full mr-16 sm:mr-12"/>

                    
                                </div>


                            </div>
                            
                 </div>

                 <div className="flex-grow flex flex-wrap  py-2 sm:py-6 items-center pb-2">
                            <div className="w-full flex items-center border-b-2 border-black">
                               <span className="text-black text-xl font-bold pb-1 tracking-normal">Other tools</span>
                            </div>
                            <div className="w-full mx-auto sm:mx-24 flex items-center pt-4 pb-6 flex-auto">
                          
                               <Img fluid={logos.kafka.childImageSharp.fluid} alt="kafka" className="w-full mr-6 sm:ml-16"/>
                               <Img fluid={logos.graphql.childImageSharp.fluid} alt="graphql" className="w-full mr-6"/>
                               <Img fluid={logos.rabbit.childImageSharp.fluid} alt="rabbit" className="w-full mr-6"/>
                               <Img fluid={logos.gatsby.childImageSharp.fluid} alt="gatsby" className="w-full mr-8"/>
                               <Img fluid={logos.react.childImageSharp.fluid} alt="react" className="w-full mr-0"/>
                    
                            </div>
                            
                 </div>
                           
        
           </div>
        </div>
             </div>
       </div>

    
       
      
           
        
    )
}

export default OurStack;
