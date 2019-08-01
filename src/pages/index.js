import React from "react"
import Layout from "../components/Layout";

import Projects from '../pages/projects'
import Home from './home'
import Afterwork from "./afterwork";
import OurStack from './stack'
import Principles from './principles'



export default () => {
    return (
        <Layout>

            <div className="container mx-auto">
                <div className="flex-col">
                   
                    <Home/>
                    <Projects/>
                    <Afterwork/>
                    <OurStack/>
                    <Principles/>
                </div>
            </div>

        </Layout>
    )
}
