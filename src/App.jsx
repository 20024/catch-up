import React from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Layout from './pages/Layout'
import LearnMore from './pages/LearnMore';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}/>
        <Route path="/learnmore" element={<LearnMore />} />
      </Routes>
    </>
  )
}

export default App
