import React from 'react'
import Banneer from '../shared/Banneer'
import happyPic from "../assets/happypic.png"

export default function Newsletter() {
  return (
    <div className='md:px-14 p-4 max-w-screen-2xl mx-auto my-12'>
    {/* use banner component and pass props */}
    <Banneer 
    banner={happyPic} 
    heading={"Each student an share their discount code for friends"} 
    subheading={"A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence."}
    btn1={"I have a code"}
    btn2={""}
    >

    </Banneer>
    </div>
  )
}
