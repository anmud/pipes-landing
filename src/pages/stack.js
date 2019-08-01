import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'



const getLogos = graphql`
query Logos {
    java: file(relativePath: {eq: "java.png"}) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      kotlin: file(relativePath: {eq: "kotlin.png"}) {
        childImageSharp {
          fixed(width: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      typescript: file(relativePath: {eq: "typescript.png"}) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      haskellBlack: file(relativePath: {eq: "haskellBlack.png"}) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      serverless: file(relativePath: {eq: "serverless.png"}) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      amplify: file(relativePath: {eq: "amplify.png"}) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      sam: file(relativePath: {eq: "sam.png"}) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      spring: file(relativePath: {eq: "spring.png"}) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      hibernate: file(relativePath: {eq: "hibernate.png"}) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      aws: file(relativePath: {eq: "aws.png"}) {
        childImageSharp {
          fixed(width: 57) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lambda: file(relativePath: {eq: "lambda.png"}) {
        childImageSharp {
          fixed(width: 54) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      appsync: file(relativePath: {eq: "appsync.png"}) {
        childImageSharp {
          fixed(width: 77) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      gateway: file(relativePath: {eq: "gateway.png"}) {
        childImageSharp {
          fixed(width: 77) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      amazonS: file(relativePath: {eq: "amazonS.png"}) {
        childImageSharp {
          fixed(width: 77) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      sns: file(relativePath: {eq: "sns.png"}) {
        childImageSharp {
          fixed(width: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      kinesis: file(relativePath: {eq: "kinesis.png"}) {
        childImageSharp {
          fixed(width: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      rds: file(relativePath: {eq: "rds.jpg"}) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      dynamoDB: file(relativePath: {eq: "dynamoDB.png"}) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      azure: file(relativePath: {eq: "azure.png"}) {
        childImageSharp {
          fixed(width: 97) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      cloud: file(relativePath: {eq: "cloud.png"}) {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      apache: file(relativePath: {eq: "apache.png"}) {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      stackery: file(relativePath: {eq: "stackery.png"}) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      epsagon: file(relativePath: {eq: "epsagon.png"}) {
        childImageSharp {
          fixed(width: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      netlify: file(relativePath: {eq: "netlify.png"}) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      contentful: file(relativePath: {eq: "contentful.png"}) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      auth: file(relativePath: {eq: "auth.png"}) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      kafka: file(relativePath: {eq: "kafka.png"}) {
        childImageSharp {
          fixed(width: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      graphql: file(relativePath: {eq: "graphql.png"}) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      rabbit: file(relativePath: {eq: "rabbit.png"}) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      gatsby: file(relativePath: {eq: "gatsby.png"}) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      react: file(relativePath: {eq: "react.png"}) {
        childImageSharp {
          fixed(width: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      
}
`


const OurStack = ({children}) => {

    const logos = useStaticQuery(getLogos)


    return (
      
         <div id="stack" className="container mx-auto w-auto sm:px-4 pt-32 pb-8 flex-grow">
           <div className="bg-white">
           
           <div className="flex flex-wrap sm:px-56 pt-12">
        <div className=" mb-6 sm:mb-0 sm:mx-auto px-4 flex flex-col ">
          
             <div className="">
                 <div className="flex flex-col">
                      <h1 className="text-black text-4xl font-bold py-2 text-left tracking-normal">Our Stack</h1>
                      <div className="bg-black h-2 w-24 -mt-2"></div>
                 </div>
             </div> 
      
                     <div className="flex-grow flex flex-wrap  items-center pb-2 pt-24">
                            <div className="w-full flex items-center border-b-2 border-black">
                               <span className="text-black text-xl font-bold pb-1 tracking-normal">Languages</span>
                            </div>
                            <div className="w-full mx-24 flex items-center pt-4 pb-6">
                          
                               <Img fixed={logos.java.childImageSharp.fixed} alt="java" className="mr-10 ml-6"/>
                               <Img fixed={logos.kotlin.childImageSharp.fixed} alt="kotlin" className="mr-10"/>
                               <Img fixed={logos.typescript.childImageSharp.fixed} alt="typescript" className="mr-10"/>
                               <Img fixed={logos.haskellBlack.childImageSharp.fixed} alt="haskell" className="mr-0"/>
                    
                            </div>
                            
                 </div>

                 <div className="flex-grow flex flex-wrap  py-6 items-center pb-2 mx-1">
                            <div className="w-full flex items-center border-b-2 border-black">
                               <span className="text-black text-xl font-bold pb-1 tracking-normal">Frameworks</span>
                            </div>
                            <div className="w-full mx-24 flex items-center pt-4 pb-6">
                          
                               <Img fixed={logos.serverless.childImageSharp.fixed} alt="serverless" className="mr-8 ml-6"/>
                               <Img fixed={logos.amplify.childImageSharp.fixed} alt="amplify" className="mr-6"/>
                               <Img fixed={logos.sam.childImageSharp.fixed} alt="sam" className="mr-6"/>
                               <Img fixed={logos.spring.childImageSharp.fixed} alt="spring" className="mr-10"/>
                               <Img fixed={logos.hibernate.childImageSharp.fixed} alt="hibernate" className="mr-0"/>
                    
                            </div>
                            
                 </div>

                 <div className="flex-grow flex flex-wrap  py-6 items-center pb-2">
                            <div className="w-full flex items-center border-b-2 border-black">
                               <span className="text-black text-xl font-bold pb-1 tracking-normal">Serverless tools</span>
                            </div>
                            <div className="min-w-full mx-8 flex flex-col items-center pt-4 pb-1 ">

                                <div className="flex mb-12 items-center">
                                <Img fixed={logos.aws.childImageSharp.fixed} alt="aws" className="mr-16"/>
                               <Img fixed={logos.lambda.childImageSharp.fixed} alt="lanbda" className="mr-16"/>
                               <Img fixed={logos.appsync.childImageSharp.fixed} alt="appsync" className="mr-16"/>
                               <Img fixed={logos.gateway.childImageSharp.fixed} alt="gateway" className="mr-12"/>
                               <Img fixed={logos.amazonS.childImageSharp.fixed} alt="s3" className="mr-0"/>
                                </div>
                          
                                <div className="flex mb-10 items-center">
                                <Img fixed={logos.sns.childImageSharp.fixed} alt="sns" className="mr-8 "/>
                               <Img fixed={logos.kinesis.childImageSharp.fixed} alt="kinesis" className="mr-6"/>
                               <Img fixed={logos.rds.childImageSharp.fixed} alt="rds" className="mr-4"/>
                               <Img fixed={logos.dynamoDB.childImageSharp.fixed} alt="dynamoDB" className="mr-6"/>
                               <Img fixed={logos.azure.childImageSharp.fixed} alt="azure" className="mr-0"/>
                    
                                </div>

                                <div className="flex mb-12 items-center">
                                <Img fixed={logos.cloud.childImageSharp.fixed} alt="cloud" className="mr-4 "/>
                               <Img fixed={logos.apache.childImageSharp.fixed} alt="apache" className="mr-4"/>
                               <Img fixed={logos.stackery.childImageSharp.fixed} alt="stackery" className="mr-4"/>
                               <Img fixed={logos.epsagon.childImageSharp.fixed} alt="epsagon" className="mr-6"/>
                               <Img fixed={logos.netlify.childImageSharp.fixed} alt="netlify" className="mr-0 "/>
                    
                                </div>

                                <div className="flex mb-4 items-center -ml-64">
                                <Img fixed={logos.contentful.childImageSharp.fixed} alt="contentful" className="mr-16 "/>
                               <Img fixed={logos.auth.childImageSharp.fixed} alt="auth" className="mr-12"/>

                    
                                </div>


                            </div>
                            
                 </div>

                 <div className="flex-grow flex flex-wrap  py-6 items-center pb-2">
                            <div className="w-full flex items-center border-b-2 border-black">
                               <span className="text-black text-xl font-bold pb-1 tracking-normal">Other tools</span>
                            </div>
                            <div className="w-full mx-24 flex items-center pt-4 pb-6">
                          
                               <Img fixed={logos.kafka.childImageSharp.fixed} alt="kafka" className="mr-6 ml-16"/>
                               <Img fixed={logos.graphql.childImageSharp.fixed} alt="graphql" className="mr-6"/>
                               <Img fixed={logos.rabbit.childImageSharp.fixed} alt="rabbit" className="mr-6"/>
                               <Img fixed={logos.gatsby.childImageSharp.fixed} alt="gatsby" className="mr-8"/>
                               <Img fixed={logos.react.childImageSharp.fixed} alt="react" className="mr-0"/>
                    
                            </div>
                            
                 </div>
                           
        
           </div>
        </div>
             </div>
       </div>

    
       
      
           
        
    )
}

export default OurStack;
