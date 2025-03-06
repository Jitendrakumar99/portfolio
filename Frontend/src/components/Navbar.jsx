import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isNightMode, setIsNightMode] = useState(false); // New state for night mode

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    document.body.classList.toggle('night-mode', !isNightMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
  
    const navbarHeight = 70; 
    const targetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800; 
    let startTime = null;
  
    const smoothScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
  
      window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));
  
      if (timeElapsed < duration) {
        requestAnimationFrame(smoothScroll);
      } else {
        setTimeout(() => setIsOpen(false), 500); 
      }
    };
  
    const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  
    requestAnimationFrame(smoothScroll);
  };
  
  

  
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="fixed top-0 backdrop-blur-sm shadow-md z-50 w-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold text-white truncate">Jitendra&apos;s Portfolio</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {['home', 'about', 'projects', 'skills', 'experience', 'certifications', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors text-sm lg:text-base ${
                  activeSection === item ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={toggleNightMode}
              className="capitalize transition-colors text-sm lg:text-base text-gray-300 hover:text-white"
            >
              {isNightMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
          <button
                  onClick={toggleNightMode}
                  className="block w-full text-left px-3 py-2 capitalize transition-colors text-sm text-gray-300 hover:text-white"
                >
                  {isNightMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0  bg-blue-300/10 backdrop-blur-sm shadow-lg border-t border-gray-600/20">
            <div className="max-w-[1400px] mx-auto">
              <div className="px-4 py-2 space-y-1">
                {['home', 'about', 'projects', 'skills', 'experience', 'certifications', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`block w-full text-left px-3 py-2 capitalize transition-colors text-sm ${
                      activeSection === item ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
                
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
