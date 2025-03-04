import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaExternalLinkAlt, FaCalendarAlt, FaAward, FaTimes } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    title: "GalileoX Progra001 Certificate | edX",
    issuer: "GalileoX edx",
    date: "24 April2024",
    credentialLink: "./certificate/GalileoX.png",
    skills: ["Java Programming Fundamentals"],
    badgeUrl: "https://udemy-certificate.s3.amazonaws.com/image/your-badge.png"
  },
  {
    title: "Red Hat Training Presents - Introduction to Python Programming (AD141)",
    issuer: "Red Hat Academy",
    date: "Sept. 23, 2024",
    credentialLink: "/certificate/Certificate of Attendance (AD141-9.0)-1.png",
    skills: ["Python Programming"],
    badgeUrl: "https://udemy-certificate.s3.amazonaws.com/image/your-badge.png"
  },
  {
    title: "Red Hat System Administration I (RH124)",
    issuer: "Red Hat Academy",
    date: "April 25, 2024",
    credentialLink: "./certificate/Certificate of Attendance (RH124-9.0)-1.png",
    skills: ["System Administration"],
    badgeUrl: "https://udemy-certificate.s3.amazonaws.com/image/your-badge.png"
  },
  {
    title: "Red Hat System Administration II (RH134)",
    issuer: "Red Hat Academy",
    date: "April 25, 2024",
    credentialLink: "./certificate/Certificate of Attendance (RH134-9.0)-1.png",
    skills: ["System Administration"],
    badgeUrl: "https://udemy-certificate.s3.amazonaws.com/image/your-badge.png"
  },
  {
    title: "HackerRank java basics",
    issuer: "HackerRank",
    date: "Sep 23, 2024",
    credentialLink: "./certificate/javascript_basic certificate-1.png",
    skills: ["Java Programming"],
    badgeUrl: "https://d3n93yrl3yuxvg.cloudfront.net/assets/hackerrank/certificates/your-badge.png"
  },
  {
    title: "CodeSoft",
    issuer: "CodeSoft",
    date: "Dec 3 2023",
    credentialLink: "./certificate/Jitendra Kumar codsoft -1.png",
    skills: ["JavaScript", "Node.js", "MongoDB", "Express"],
    badgeUrl: "https://cdn.freecodecamp.org/your-badge.png"
  },
  {
    title: "CPA: Programming Essentials in C++",
    issuer: "C++ Instutute",
    date: "July 13 2023",
    credentialLink: "./certificate/Jitendrakumar-CPA - Programmin-certificate-1.png",
    skills: ["C++ Programming"],
    badgeUrl: "https://cdn.freecodecamp.org/your-badge.png"
  },
  {
    title: "CLA: Programming Essentials in C",
    issuer: "C++ Instutute",
    date: "Jan 22 2023",
    credentialLink: "./certificate/Jitendrakumar-Programming Esse-certificate-1.png",
    skills: ["C Programming"],
    badgeUrl: "https://cdn.freecodecamp.org/your-badge.png"
  },
  {
    title: "Communicating with impact",
    issuer: "IBM",
    date: "2023",
    credentialLink: "./certificate/SkillsBuild-1.png",
    skills: ["Communication"],
    badgeUrl: "https://images.credly.com/your-badge.png"
  },
  {
    title:'Front End Development - CSS',
    issuer: "Great Learning",
    date: "April 23 2023",
    credentialLink: "./certificate/frontendcss.png",
    skills: ["CSS"],
    badgeUrl: "https://cdn.freecodecamp.org/your-badge.png"
  },
  {
    title:'Front End Development - HTML',
    issuer: "Great Learning",
    date: "January 2023",
    credentialLink: "./certificate/frontendhtml.png",
    skills: ["CSS"],
    badgeUrl: "https://cdn.freecodecamp.org/your-badge.png"
  },
  {
    title:'C-Intern',
    issuer: "Technical Hub",
    date: "29-08 to 21-12 2024",
    credentialLink: "./certificate/22MH1A05H7-1.png",
    skills: ["Gained Experience"],
    badgeUrl: "https://cdn.freecodecamp.org/your-badge.png"
  },
  {
    title:'Internship',
    issuer: "Technical Hub",
    date: "16-05 to 17-06  2024",
    credentialLink: "./certificate/22MH1A05H7INTERNSHIP-1.png",
    skills: ["Html,Css,Javascript,BootStrap"],
    badgeUrl: "https://cdn.freecodecamp.org/your-badge.png"
  }
  // Add more certifications as needed
];

const Certifications = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [showimage, setshowimage] = useState("");
  
  const handleimage = (img) => {
    setshowimage(img);
  }

  const closeModal = () => {
    setshowimage("");
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse"
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out"
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="certifications" className="min-h-screen py-20">
      <div className="container about mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-blue-400/10 bg-opacity-50 rounded-lg p-6 shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                  <p className="text-blue-400 flex items-center">
                    <FaAward className="mr-2" />
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="flex items-center text-gray-400 mb-4">
                <FaCalendarAlt className="mr-2" />
                <span>{cert.date}</span>
              </div>

              <div className="mb-6">
                <h4 className="text-gray-300 font-medium mb-2">Skills Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div
                onClick={() => handleimage(cert.credentialLink)}
                className="inline-flex items-center cursor-pointer text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Certificate
                <FaExternalLinkAlt className="ml-2 text-sm" />
              </div>
            </div>
          ))}
        </div>

        {showimage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with blur */}
            <div 
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
              onClick={closeModal}
            ></div>
            
            {/* Modal content */}
            <div className="relative z-50 max-w-[90vw] max-h-[90vh] rounded-lg overflow-hidden">
              {/* Loading video background */}
              <div className="absolute inset-0 w-full h-full">
                <video 
                  src="LoadingScreen.mp4" 
                  autoPlay 
                  muted 
                  loop 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 z-50 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
              >
                <FaTimes size={20} />
              </button>
              
              {/* Certificate image */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img 
                  src={showimage} 
                  alt="Certificate" 
                  className="max-w-full max-h-[85vh] object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
