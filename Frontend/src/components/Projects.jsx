import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "An e-commerce platform for selling products online. It has a user-friendly interface and is optimized for search engines.",
    images: ["home.png", "pic1.png", "pic2.png","pic3.png"],
    technologies: ["React", "Node.js", "MongoDB", "Express", "TailwindCss"],
    githubLink: "https://github.com/Jitendrakumar99/E-commerce",
    liveLink: "https://e-commerce-kappa-five-61.vercel.app/",
  },
  {
    title: "Netflix Clone",
    description:
      "A clone of the popular streaming service Netflix. It has a user-friendly interface and is optimized for search engines.",
    images: ["netflix.png","net1.png"],
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/Jitendrakumar99/Netflix",
    liveLink: "https://jitendrakumar99.github.io/Netflix/",
  },
  {
    title: "Blood Donation",
    description:
      "A responsive Blood Donation website with secure donor registration, real-time database, smooth animations, and a user-friendly UI to connect donors with those in need.",
    images: ["image.png","blood.png"],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "TailwindCss",
      "Bootstrap",
      "AWS",
    ],
    githubLink: "https://github.com/Jitendrakumar99/Blooddonation",
    liveLink: "http://adityauniversity.in:7006/blooddonation",
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each card
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen bg-gray-800 py-20 px-4 sm:px-6"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            >
              <div className="relative group aspect-video">
                <div className="relative w-full h-full group">
                  <div className="w-full h-full">
                    <Swiper
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      loop={true}
                      modules={[Pagination, Autoplay]}
                      className="w-full h-full"
                    >
                      {project.images.map((img, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={img}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-cover"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  <div className="absolute inset-0 bg-blue-600/40 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
                    <div className="flex space-x-4">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-200 transform hover:scale-110 transition-transform"
                      >
                        <FaGithub className="w-10 h-10" />
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-200 transform hover:scale-110 transition-transform"
                      >
                        <FaExternalLinkAlt className="w-10 h-10" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
