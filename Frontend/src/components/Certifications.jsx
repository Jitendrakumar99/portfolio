import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaExternalLinkAlt, FaCalendarAlt, FaAward } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    title: "GalileoX Progra001 Certificate | edX",
    issuer: "GalileoX edx",
    date: "24 April2024",
    credentialLink: "https://drive.google.com/file/d/1phqIgdlsQsSUea4lH4BS8zyfULZombSr/view?usp=drive_link",
    skills: ["Java Programming Fundamentals"],
    badgeUrl: "https://udemy-certificate.s3.amazonaws.com/image/your-badge.png"
  },
  {
    title: "Red Hat Training Presents - Introduction to Python Programming (AD141)",
    issuer: "Red Hat Academy",
    date: "Sept. 23, 2024",
    credentialLink: "https://drive.google.com/file/d/15lydcdYHOwu9q2HaYjYcJoOASZBOY08Z/view?usp=drive_link",
    skills: ["Python Programming"],
    badgeUrl: "https://udemy-certificate.s3.amazonaws.com/image/your-badge.png"
  },
  {
    title: "Red Hat System Administration I (RH124)",
    issuer: "Red Hat Academy",
    date: "April 25, 2024",
    credentialLink: "https://drive.google.com/file/d/1oFboptqsV828GjjbpiGSD6Sdl7St13A_/view?usp=drive_link",
    skills: ["System Administration"],
    badgeUrl: "https://udemy-certificate.s3.amazonaws.com/image/your-badge.png"
  },
  {
    title: "Red Hat System Administration II (RH134)",
    issuer: "Red Hat Academy",
    date: "April 25, 2024",
    credentialLink: "https://drive.google.com/file/d/10y3_iN_wwuoukldmK1x0GZ7UzndXfXtW/view?usp=drive_link",
    skills: ["System Administration"],
    badgeUrl: "https://udemy-certificate.s3.amazonaws.com/image/your-badge.png"
  },
  {
    title: "HackerRank java basics",
    issuer: "HackerRank",
    date: "Sep 23, 2024",
    credentialLink: "https://drive.google.com/file/d/1PXYt28A4OGV9LOBl-ipEDhRnIKTDbgXH/view?usp=drive_link",
    skills: ["Java Programming"],
    badgeUrl: "https://d3n93yrl3yuxvg.cloudfront.net/assets/hackerrank/certificates/your-badge.png"
  },
  {
    title: "CodeSoft",
    issuer: "CodeSoft",
    date: "Dec 3 2023",
    credentialLink: "https://drive.google.com/file/d/1xGx8BF-jzXeaxFeCn-4oHTkyGVdjd3au/view?usp=drive_link",
    skills: ["JavaScript", "Node.js", "MongoDB", "Express"],
    badgeUrl: "https://cdn.freecodecamp.org/your-badge.png"
  },
  {
    title: "CPA: Programming Essentials in C++",
    issuer: "C++ Instutute",
    date: "July 13 2023",
    credentialLink: "https://drive.google.com/file/d/1ujTKhFdrWi1GNW50D8Y1RU9PbVtR5W4a/view?usp=drive_link",
    skills: ["C++ Programming"],
    badgeUrl: "https://cdn.freecodecamp.org/your-badge.png"
  },
  {
    title: "CLA: Programming Essentials in C",
    issuer: "C++ Instutute",
    date: "Jan 22 2023",
    credentialLink: "https://drive.google.com/file/d/1XWvRdUAx0HmGghcScczoRLc2QSks3ly4/view?usp=drive_link",
    skills: ["C++ Programming"],
    badgeUrl: "https://cdn.freecodecamp.org/your-badge.png"
  },
  {
    title: "Full Stack Web Development",
    issuer: "FreeCodeCamp",
    date: "2023",
    credentialLink: "https://www.freecodecamp.org/certification/your-username",
    skills: ["JavaScript", "Node.js", "MongoDB", "Express"],
    badgeUrl: "https://cdn.freecodecamp.org/your-badge.png"
  },
  {
    title: "It Specialist",
    issuer: "IBM",
    date: "2023",
    credentialLink: "https://www.credly.com/badges/your-badge",
    skills: ["IT Specialist"],
    badgeUrl: "https://images.credly.com/your-badge.png"
  },
  // Add more certifications as needed
];

const Certifications = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=120",
            end: "top center",
            toggleActions: "play none none reverse"
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out"
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="certifications" className="min-h-screen  py-20">
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

              <a
                href={cert.credentialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Certificate
                <FaExternalLinkAlt className="ml-2 text-sm" />
              </a>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Certifications;
