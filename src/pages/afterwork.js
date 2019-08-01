import React from 'react'
import { graphql } from "gatsby"



const Afterwork = ({children}) => {

    return (
      
           <div  id="afterwork" className="container mx-auto w-auto sm:px-2  pt-16 sm:pt-48 pb-8 flex-grow">
      <div className="bg-white">
        <div className="flex flex-wrap sm:px-56 mx-8 -mb-24">
       

        <div  className="flex flex-col">
                    <h1 className=" text-2xl sm:text-4xl text-left font-bold tracking-normal">Afterwork</h1> 
                    <div className="bg-black h-2 w-24 -mt-2"></div>
         </div>


       <div className="pt-10 sm:pt-16 whitespace-normal">
       <div className="col w-full pb-4">
         <div className="flex flex-wrap items-center -mb-3">
          <h4 className="flex text-xl sm:text-2xl font-bold tracking-normal mr-2">eBay, VP Mobile Engineering.</h4>
          <p className="flex text-sm tracking-wide">Steve Romero.</p> 
         </div>
      
       <p className="max-w-full flex text-md italic text-left leading-snug tracking-wide ">The Agile Monkeys is one of my favorite teams ever, and I’ve worked with many.
          Aside from having very capable engineers (I refuse to work with anything less) they bring that little piece of magic that is 
         the difference between meeting the requirements of the spec and building a great application.</p>
       </div>
        

      <div className="col w-full pb-4">
        <div className="flex items-center -mb-3">
        <h4 className="flex text-xl sm:text-2xl font-bold tracking-normal mr-2">American Express, VP Engineering.</h4>
        <p className="flex text-sm tracking-wide">Aimee Cardwell.</p>
        </div>
        
        <p className="max-w-full flex text-md  italic text-left leading-snug tracking-wide">Working with The Agile Monkeys is such a pleasure. 
          They are always thinking about how the work can be done better, more scalably, and more efficiently. Jaime encourages his team members to become 
          members of the teams they’re working with so that they work as one team, not as a third party.</p>
      </div>
    
     
     <div className="col w-full pb-4">
       <div className="flex items-center -mb-3">
       <h4 className="flex text-xl sm:text-2xl font-bold tracking-normal mr-2">Rent the Runway, VP Engineering.</h4>
       <p className="flex text-sm tracking-wide">Hampton Catlin.</p>
       </div>

       <p className="max-w-full flex text-md  italic text-left leading-snug tracking-wide">The Agile Monkeys has been an awesome development partner for Rent the Runway.
          We’ve used their team in almost all of our critical systems, and they’ve done a great job integrating themselves into our teams.</p>
     </div>

    <div className="col w-full pb-4">
      <div className="flex flex-wrap sm:items-center -mb-3">
       <h4 className="flex text-left text-xl sm:text-2xl font-bold tracking-normal mr-2">Merrill Corporation, Senior Director of Engineering.</h4>
       <p className="flex text-sm tracking-wide">Billy Tobon.</p>
      </div>
        <p className="max-w-full flex text-md  italic text-left leading-snug tracking-wide">The Agile Monkeys possesses a seasoned team of engineers – and most of them are truly full-stack – 
          that not only participates in the development activities but also helps to mentor other in-house engineers and project stakeholders. 
          I have worked very closely with the The Agile Monkeys group in various projects in the last three years, 
          and every time they excelled in the quality of their solutions, during design, implementation, and production rollout.</p>
    </div>

       </div>
      
       </div>
        </div>
  </div>


    
    
  
       
       

        
    )
}

export default Afterwork;
