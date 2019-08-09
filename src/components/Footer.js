import React from 'react'
import {Link} from 'gatsby'



const Footer = () => {

  
  return (
    <>
      <div className="w-full px-8 py-10 text-black bg-white flex flex-wrap sm:flex-row justify-between items-start sm:items-center border-t border-black">
        <div className="container mx-auto w-auto sm:px-2 pt-6 pb-8 items-start flex-grow">
          <div className="flex  sm:px-48 items-center justify-between">
         
          <div className="flex-initial text-xl text-black mr-24">
            <div className="text-left font-bold pb-1 tracking-wider">Let's talk</div>
            <div className="text-sm ">
              <a href="mailto:hello@pipesdata.com" className="hover:underline">hello@pipesdata.com</a>
              </div>
            </div>

          <div className="flex">
          <ul className="flex flex-col md:flex-row text-md -mx-3 text-black font-bold tracking-wide">
            <li className="mx-3"><Link to="/" className="underline">Home</Link></li>
            <li className="sm:mr-10"><Link to="/imprint" className="underline">Imprint</Link></li>
          </ul>
        </div>
          </div>
       
         </div>
        </div>
        

      
    </>

  )
}

export default Footer;