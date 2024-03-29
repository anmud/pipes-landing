import React from 'react'



const Home = ({children}) => {

    return (
       
        <div id="home" className="container mx-auto w-full sm:px-2 pt-12 sm:pt-24 flex-grow">
        <div className="bg-white ">
           <div className="flex flex-col sm:px-56 mx-8 mb-2 mt-24">

               <div className="flex">
                  <h1 className="text-2xl text-left text-black font-normal">Hi!</h1> 
               </div>
             
         <div className="flex flex-col ">
         <p className="max-w-md mb-6 text-lg text-left font-semibold leading-relaxed tracking-wider  sm:max-w-md  md:max-w-lg lg:max-w-2xl  sm:text-2xl ">
        
         We are a team of aws certified data engineers. 
         We help companies to run digital analytics 
         and custom data pipelines with radically less cost. 
            </p>
            <div className="bg-black h-1 w-32 -mt-2"></div>
         </div>
           
           </div>
        </div>
     </div>

    


        
    )
}

export default Home;
