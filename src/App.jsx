import React from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Layout from './pages/Layout'
import LearnMore from './pages/LearnMore';
import  Features  from './pages/Features';
import  Counting  from './pages/Counting';
import About from './pages/About'
import Feed from './pages/Feed'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}/>
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path='/features' element={<Features/>}/>
        <Route path='/counting' element={<Counting/>} /> 
        <Route path='/about' element={<About/>}/>  
        <Route path='/feed' element={<Feed/>} />
        </Routes>
    </>
  )
}

export default App
