import React from "react"
import Layout from "../components/Layout";
import Projects from '../pages/projects'
import Home from './home'
import Afterwork from "./afterwork";
import Principles from './principles'
import Stack from './stack2'
import { Helmet } from "react-helmet"


export default () => {
    return (
        <Layout>
              <Helmet>
                  <meta charSet="utf-8" />
                  <title>Pipes - The Data Platform</title>
                  <link rel="canonical" href="http://pipesdata.com" />
             </Helmet>

            <div className="container mx-auto">
                <div className="flex-col">
                   
                    <Home/>
                    <Projects/>
                     <Afterwork/>
                    <Stack/>
                    <Principles/>
                </div>
            </div>

        </Layout>
    )
}
