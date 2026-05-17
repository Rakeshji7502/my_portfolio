import React from 'react'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Skill from './Components/Skill'


const App = () => {
  return (
    <div className = "font-sans" scroll-behavior="smooth"> 
      <Navbar />
      <Hero />
      <Skill />
      <Projects />
      <Contact />
    </div>
    
  )
}

export default App
