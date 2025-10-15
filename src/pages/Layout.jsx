import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import About from './About'
import HeroBanner from './HeroBanner'

function Layout() {
  return (
    <div>
        <Header/>
        <HeroBanner/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Layout