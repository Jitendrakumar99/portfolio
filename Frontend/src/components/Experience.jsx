import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "C Intern",
    company: "Technical Hub",
    period: "2025-2026",
    description: [
      "Assisting students in understanding C programming concepts, including data structures and algorithms.",
      "Providing guidance on debugging and optimizing code for efficiency.",
      "Supporting learners in solving programming challenges and enhancing problem-solving skills."
    ]
  },
  {
    title: "Blood Donation website",
    company: "Technical Hub",
    period: "2025 - 2026",
    description: [
      "Developed a responsive Blood Donation website using React and Bootstrap with full validation.",
      "Implemented Framer Motion animations for smooth user interaction and dynamic form appearance.",
      "Integrated a backend to securely store and manage donor details for efficient record-keeping."
    ]
  },
  // Add more experiences as needed
];

const Experience = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const experienceRefs = useRef([]);

  useEffect(() => {
    const timeline = timelineRef.current;
    const cards = experienceRefs.current;

    // Animate the timeline line
    gsap.from(timeline, {
      scrollTrigger: {
        trigger: timeline,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
      scaleY: 0,
      transformOrigin: "top center",
      duration: 1.5,
      ease: "power3.out"
    });

    // Animate each experience card
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none reverse",
        },
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power3.out"
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="min-h-screen bg-gray-900 py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Experience</h2>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div 
            ref={timelineRef}
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/30 hidden md:block"
          />

          {/* Experience cards */}
          <div className="space-y-8 md:space-y-0">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-center mb-8 md:mb-24"
              >
                {/* Timeline dot with connecting line */}
                <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full" />
                  {index % 2 === 0 ? (
                    <div className="absolute top-2 left-2 w-[calc(50vw/4)] h-0.5 bg-blue-500/30" />
                  ) : (
                    <div className="absolute top-2 right-2 w-[calc(50vw/4)] h-0.5 bg-blue-500/30" />
                  )}
                </div>
                
                {/* Card */}
                <div 
                  ref={el => experienceRefs.current[index] = el}
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 
                      ? 'md:ml-auto md:pl-12' 
                      : 'md:mr-auto md:pr-12'
                  }`}
                >
                  <div className="bg-gray-800 rounded-lg p-8 shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
                    <h3 className="text-2xl font-semibold text-white mb-3">{exp.title}</h3>
                    <p className="text-blue-400 text-lg mb-2">{exp.company}</p>
                    <p className="text-gray-400 mb-6">{exp.period}</p>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 flex items-start text-lg">
                          <span className="text-blue-400 mr-3">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
