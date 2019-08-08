import React, {useState} from 'react'
import {FaBars} from "react-icons/fa"
import logo from '../images/logo.png'
import links from '../constants/links'
import {Link} from 'gatsby'

const Navbar = () => {

  const [isExpanded, toggleExpansion] = useState(false);

  
  const toggleNav = () => {
    toggleExpansion(isExpanded => !isExpanded)
  }

  return (


  <div className="w-full px-6 sm:px-20 -mt-3  mx-auto bg-white flex flex-wrap flex-grow items-start sm:items-center fixed z-50">  

     <nav className="container pt-10 mx-auto sm:flex sm:flex-wrap flex-grow sm:items-center sm:justify-between bg-white sm:px-24 sm:pt-0">
  
   <div className="flex justify-between items-center bg-white flex-shrink-0 text-black sm:mr-4">
         <Link to='/#' className=" sm:inline-block text-xl font-bold tracking-wide">
         <img src={logo} alt="pipes logo" className="hidden flex w-12 h-12 mr-2 sm:inline-block"/>
         Pipes</Link>
      
      
      <div className="block sm:hidden"> 
      <button type="button"  onClick={() => toggleNav()} className="flex text-right text-black sm:hidden appearance-none">
          <FaBars className="w-6 h-5"/>
      </button>
      </div>
  
   </div>

  

   <div className={`${
    isExpanded ? 'block' : 'hidden'
    }   mt-4 w-full bg-black flex-grow sm:block md:flex sm:w-auto lg:flex sm:items-center sm:w-auto sm:bg-white md:block md:flex md:items-center md:w-auto`} >
     <div className="text-lg sm:flex-grow py-10 ">
       <div className="min-w-full">
       <ul className="px-4  sm:items-center sm:px-12 sm:flex sm:flex-wrap ">
          {links.map((item, index) => (
          
          <li key={index} className="sm:flex mx-auto  ">
          <Link to={item.path} onClick={() => toggleNav()}  className="block text-xl font-medium tracking-wide text-white sm:text-black flex items-center border-b-4 border-transparent hover:border-yellow-500 sm:hover:border-black no-underline sm:inline-block mt-4 sm:mt-0 ">{item.text}</Link>
           </li>
            
          ))}
     </ul>
       </div>
      
     </div>
     
   </div>
 

  

 </nav>


 

   </div>
  
  )
}

export default Navbar;