import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Chatbot from './components/Chatbot'
function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main className="max-w-[1400px] mx-auto">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
        <Chatbot />
      </main>
    </div>
  )
}

export default App
