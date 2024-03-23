import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Feature from './components/Feature'
import About from './components/About'
import Price from './components/Price'
import Newsletter from './components/Newsletter'
import Footer from './shared/Footer'

function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Feature></Feature>
      <About></About>
      <Price></Price>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  )
}

export default App
