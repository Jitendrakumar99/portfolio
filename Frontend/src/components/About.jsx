import  { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Kill any existing animations
      if (tl.current) {
        tl.current.kill();
      }

      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }); 

      // Add animations to timeline
      tl.current
        .from(textRef.current, {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        })
        .from(
          imageRef.current,
          {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen  py-20 px-4 sm:px-6"
    >
      <div className="container about mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div ref={textRef} className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-400">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate developer with a strong foundation in both
              front-end and back-end technologies. My journey in tech started
              with a curiosity for creating beautiful and functional web
              applications.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">▹</span>
                <p className="text-gray-300">
                  Experience: 1 years in web development
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">▹</span>
                <p className="text-gray-300">Education: B-tech</p>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-400">▹</span>
                <p className="text-gray-300">Location: Andhra Pradesh</p>
              </div>
              <a
                href="/jitphotoresume.pdf"
                download="Jitendra_Resume.pdf"
                className="inline-block px-6 py-2 border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white rounded-md transition"
              >
                Download CV
              </a>
            </div>
          </div>
          <div
            ref={imageRef}
            className="relative max-w-md mx-auto md:max-w-none"
          >
            <div className="aspect-square rounded-full bg-blue-400/10  p-6">
              <div className="w-full h-full rounded-full  bg-gradient-to-bl from-blue-500/10 to-purple-500/10 flex items-center justify-center overflow-hidden">
                <img
                  src="22MH1A05H7-removebg-preview.png"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
