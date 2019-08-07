import React from "react"
import Layout from "../components/Layout";

import Projects from '../pages/projects'
import Home from './home'
import Afterwork from "./afterwork";

import Principles from './principles'
import TestStack from './stack2'



export default () => {
    return (
        <Layout>

            <div className="container mx-auto">
                <div className="flex-col">
                   
                    <Home/>
                    <Projects/>
                     <Afterwork/>
                    <TestStack/>
                    <Principles/>
                </div>
            </div>

        </Layout>
    )
}
