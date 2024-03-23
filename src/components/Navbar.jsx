import React, { useState } from 'react'
import logo from '../assets/logo.png'
// React icons
import { GrLanguage } from "react-icons/gr";
import {FaBars, FaXmark} from "react-icons/fa6";
import {Link} from "react-scroll"

export default function Navbar() {
const [isMenuOpen, setIsMenuOpen]= useState(false)

const toggleMenu=()=> {
setIsMenuOpen(!isMenuOpen)
}


const navItems =[
    {link: "Overview", path:"home"},
    {link: "Feature", path:"feature"},
    {link: "About", path:"about"},
    {link: "Pricing", path:"pricing"},
]
// adding scrolling effects


  return (

    <>
   <nav className='bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0 '>
      <div className='text-lg container mx-auto flex justify-between items-center font-normal'>
         <div className='flex space-x-14 items-center'>
         

  <a className='text-2x1 font-semibold flex items-center space-x-3' href='/'><img className='logo' src={logo}/> <span>XYZ</span></a>
  {/* <a href='/'>logo<span>XYZ</span></a> */}
                {/* showing navitem using map */}
                <ul className='md:flex space-x-12 hidden'>
                    {
                      navItems.map(({link,path})=> 
                      <Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block font-semibold hover:text-gray-300 cursor-pointer'>{link}</Link>)
                    }
                </ul>

         {/* language abd sign up */}
       <div className='space-x-12 hidden md:flex items-center'>
        <a href='#' className='hidden lg:flex items-center hover:text-secondary'><GrLanguage className='mr-2' />
        <span>Language </span></a>
        <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded
        hover:text-white hover:bg-indigo-600'>Sign Up</button>
       </div>

    
    </div>

                {/* menu btn. only display on mobile */}
       <div className='md:hidden '>
              <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300 '>
                 {
                      isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary'></FaXmark>)
                      :(<FaBars className='w-6 h-6 text-primary '></FaBars>)
                  }
              </button>
       </div>
      </div>
   </nav>

{/* nav item container for mobile */}
<div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${isMenuOpen?"block fixed top-0 right-0 left-0":"hidden"}`}>
 {navItems.map(({link,path})=>
 <Link activeClass='active' spy={true} smooth={true} offset={-100} to={path}key={link} className='block text-white font-semibold hover:text-gray-300'
 onClick={toggleMenu}
 >{link}</Link>)}


</div>
    </>   
  );
};
