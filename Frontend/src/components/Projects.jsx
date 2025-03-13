import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
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
    liveLink: "https://e-commerce-b8pf.vercel.app/",
    autoplayDelay: 2500, 
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
    autoplayDelay: 1500, 
  },
  {
    title: "Netflix Clone",
    description:
      "A clone of the popular streaming service Netflix. It has a user-friendly interface and is optimized for search engines.",
    images: ["netflix.png","net1.png"],
    technologies: ["React","TailwindCss" ],
    githubLink: "https://github.com/Jitendrakumar99/Netflix",
    liveLink: "https://net-psi-lime.vercel.app/",
    autoplayDelay: 1000, 
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [showLiveSite, setShowLiveSite] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLiveSite = (url) => {
    setIsLoading(true);
    setShowLiveSite(url);
    
    // Set a timeout to ensure loading state is shown
    setTimeout(() => {
      setIsLoading(false);
    }, 500); // 500 milliseconds loading time
  }

  const closeModal = () => {
    setShowLiveSite("");
    setIsLoading(false);
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
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
      className="min-h-screen py-20 px-4 sm:px-6"
    >
      <div className="about container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-blue-400/10 bg-opacity-70 rounded-lg overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            >
              <div className="relative group aspect-video">
                <div className="relative w-full h-full group">
                  <div className="w-full h-full">
                    <Swiper
                      autoplay={{
                        delay: project.autoplayDelay,
                        disableOnInteraction: false
                      }}
                      speed={4000}
                      loop={true}
                      slidesPerView={1}
                      freeMode={true}
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

                  <div className="absolute inset-0 bg-[#5C0041]/50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
                    <div className="flex space-x-4">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-200 transform hover:scale-110 transition-transform"
                      >
                        <FaGithub className="w-10 h-10" />
                      </a>
                      <button
                        onClick={() => handleLiveSite(project.liveLink)}
                        className="text-white hover:text-gray-200 transform hover:scale-110 transition-transform"
                      >
                        <FaExternalLinkAlt className="w-10 h-10" />
                      </button>
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

        {/* Live Site Modal */}
        {showLiveSite && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with blur */}
            <div 
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
              onClick={closeModal}
            ></div>
            
            {/* Modal content */}
            <div className="relative z-50 w-[95vw] h-[95vh] rounded-lg overflow-hidden">
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
              
              {/* Website iframe */}
              <div className="relative z-10 w-full h-full">
                {isLoading ? (
                  <div className="w-full h-full" />
                ) : (
                  <iframe 
                    src={showLiveSite}
                    className="w-full h-full border-0"
                    title="Live Website Preview"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
