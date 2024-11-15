import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Experiance from './Components/Experiance'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import AOS from 'aos';
import "aos/dist/aos.css"
import Aos from 'aos'

const App = () => {
  useEffect(()=>{
    Aos.init();
    
  },[])
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Experiance/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>

    </>
  )
}

export default App
