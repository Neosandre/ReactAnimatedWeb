import React from 'react'
//motion
import {motion} from "framer-motion"
//varriants
import {fadeIn} from "../variant"

const Banneer=({banner, heading, subheading, btn1, btn2})=> {
  return (
    <div className='gradiantBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
    <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
    {/* Bannser image */}
    <motion.div
    variants={fadeIn("down", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false, amount: 0.7}}
    >
       
        <img src={banner} alt='drawing picture' className='lg:h-[386px]'/>
    </motion.div>
        {/* Banner content */}
        <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount: 0.7}}
        className='md:w-3/5'>
            <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>{heading}</h2>
            <p className='text-[#EBEBEB'>{subheading}</p>
            <div className='space-x-5 space-y-4'>
                 <button className='btnPrimary'>{btn1}</button>
                 <button className='btnPrimary'>{btn2}</button>
            </div>
        </motion.div>
        
       
    </div>
  </div>
  )
}

export default Banneer;