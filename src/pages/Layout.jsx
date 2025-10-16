import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import About from './About'
import HeroBanner from './HeroBanner'
import Features from './Features'
import Counting from "./Counting"

function Layout() {
  return (
    <div>
        <Header/>
        <HeroBanner/>
        <About/>
        <Features/>
        <Counting/>
        <Footer/>
    </div>
  )
}

export default Layout