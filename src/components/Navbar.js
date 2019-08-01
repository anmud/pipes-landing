import React, {useState} from 'react'
import {FaBars} from "react-icons/fa"
import logo from '../images/logo.png'
import links from '../constants/links'
import {Link} from 'gatsby'

const Navbar = () => {

  const [isOpen, setNav] = useState(false)

  console.log(isOpen)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (


  <div className="w-full px-8  mx-auto  bg-white flex-grow items-start sm:items-center fixed z-50">  

     <nav className="container mx-auto flex flex-grow items-center justify-between flex-wrap bg-white sm:px-24 pt-10  ">
   <div className="flex items-center flex-shrink-0 text-black -ml-12 mr-4">
     
         <Link to='/#' className="sm:inline-block text-2xl font-extrabold">
         <img src={logo} alt="pipes logo" className="hidden flex w-12 h-12 mr-2 sm:inline-block"/>
         Pipes</Link>
  
   </div>

   {/* hidden small part */}
   <div className="block sm:hidden"> 
      <button type="button"  onClick={toggleNav} className="flex text-right sm:hidden appearance-none">
          <FaBars className="w-6 h-5"/>
      </button>
   </div>

   <div className="w-full block flex-grow  sm:block md:flex  sm:w-auto lg:flex sm:items-center sm:w-auto bg-white">
     <div className="text-lg sm:flex-grow">
       <ul className="hidden sm:items-center sm:px-12 sm:flex-wrap sm:flex sm:flex-wrap ">
          {links.map((item, index) => (
          
          <li key={index} className="sm:flex mx-auto -mb-px  ">
          <Link to={item.path}  className="block text-xl font-extrabold font-serif flex items-center py-3 border-b-4 border-transparent sm:hover:border-black no-underline sm:inline-block mt-4 sm:mt-0 ">{item.text}</Link>
           </li>
            
          ))}
     </ul>
     </div>
     
   </div>

   
 </nav>
   </div>
  
  )
}

export default Navbar;