import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaNode, FaDatabase, FaGit, FaDocker, FaJava ,FaPython
} from 'react-icons/fa';

import { SiCplusplus, SiTailwindcss, SiMongodb,SiMysql, SiNextdotjs, SiRedux } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26', proficiency: 90 },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', proficiency: 85 },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', proficiency: 88 },
  { name: 'React', icon: FaReact, color: '#61DAFB', proficiency: 85 },
  { name: 'React Native', icon: FaReact, color: '#61DAFB', proficiency: 80 },
  { name: 'Next.js', icon: SiNextdotjs, color: '#61DAFB', proficiency: 80 },
  { name: 'Redux', icon: SiRedux, color: '#61DAFB', proficiency: 80 },
  { name: 'Node.js', icon: FaNode, color: '#339933', proficiency: 80 },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', proficiency: 82 },
  { name: 'Mongoose', icon: FaDatabase, color: '#880000', proficiency: 80 },
  { name: 'C++', icon: SiCplusplus, color: '#00599C', proficiency: 85 },
  { name: 'Java', icon: FaJava, color: '#007396', proficiency: 82 },
  { name: 'Python', icon: FaPython, color: '#3776AB', proficiency: 82 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC', proficiency: 50 },
  { name: 'Git', icon: FaGit, color: '#F05032', proficiency: 85 },
  { name: 'MySql', icon: SiMysql, color: '#2496ED', proficiency: 70 },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const progressRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    const progressBars = progressRef.current;

    // Animate cards
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power3.out"
      });
    });

    // Animate progress bars
    progressBars.forEach((bar, index) => {
      gsap.from(bar, {
        scrollTrigger: {
          trigger: bar,
          start: "top bottom-=50",
          end: "top center",
          toggleActions: "play none none reverse",
        },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        delay: 0.2 + (index * 0.1),
        ease: "power3.out"
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="min-h-screen  py-20">
      <div className="container about mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-blue-400/10 bg-opacity-50 rounded-lg p-6 flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300"
            >
              <skill.icon size={48} color={skill.color} className="mb-4" />
              <h3 className="text-lg font-semibold text-white mb-4">{skill.name}</h3>
              {/* <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  ref={el => progressRef.current[index] = el}
                  className="h-full rounded-full bg-blue-500"
                  style={{ 
                    width: `${skill.proficiency}%`,
                    backgroundColor: skill.color 
                  }}
                />
              </div> */}
              {/* <span className="text-gray-400 mt-2">{skill.proficiency}%</span> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
