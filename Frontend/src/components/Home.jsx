import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
const Home = () => {
  const containerRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = containerRef.current.children;
      
      if (tl.current) {
        tl.current.kill();
      }

      tl.current = gsap.timeline()
        .set(elements, { 
          opacity: 0,
          y: 50
        })
        .to(elements, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out"
        });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div ref={containerRef} className="text-center w-full max-w-4xl mx-auto px-4 sm:px-6 pt-20 md:pt-16">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 break-words">
          <span className="text-white">Hi, I&apos;m </span>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Jitendra Kumar
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8"> 
          Full Stack Developer | UI/UX Designer | Tech Enthusiast
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mb-8">
          <a href="https://github.com/Jitendrakumar99" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl sm:text-4xl hover:text-white transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/jitendra-kumar-530b78260/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl sm:text-4xl hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://twitter.com/Jitendra6839" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-3xl sm:text-4xl hover:text-blue-400 transition duration-300" />
          </a>
          <a href="https://www.geeksforgeeks.org/user/kumarjitealxt/" target="_blank" rel="noopener noreferrer">
            <SiGeeksforgeeks className="text-2xl sm:text-3xl hover:text-green-500 transition duration-300" />
          </a>
          <a href="https://leetcode.com/u/Jitendra_kumar11/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="text-2xl sm:text-3xl hover:text-yellow-500 transition duration-300" />
          </a>
        </div>
        <div>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold transition-colors"
          >
            Get In Touch
          </button>
        </div>
        <div style="display: block;">
  <a href="https://page.engineer/" style="display: block;">https://page.engineer/</a>
  <a href="https://page.engineer/about" style="display: block;">https://page.engineer/about</a>
  <a href="https://page.engineer/contact" style="display: block;">https://page.engineer/contact</a>
  <a href="https://page.engineer/privacy-policy" style="display: block;">https://page.engineer/privacy-policy</a>
  <a href="https://page.engineer/terms" style="display: block;">https://page.engineer/terms</a>
  <a href="https://page.engineer/cookie-policy" style="display: block;">https://page.engineer/cookie-policy</a>
  <a href="https://page.engineer/advertise" style="display: block;">https://page.engineer/advertise</a>
  <a href="https://page.engineer/game" style="display: block;">https://page.engineer/game</a>
  <a href="https://page.engineer/category/web-development" style="display: block;">https://page.engineer/category/web-development</a>
  <a href="https://page.engineer/category/technology" style="display: block;">https://page.engineer/category/technology</a>
  <a href="https://page.engineer/category/programming" style="display: block;">https://page.engineer/category/programming</a>
  <a href="https://page.engineer/category/comparisons" style="display: block;">https://page.engineer/category/comparisons</a>
  <a href="https://page.engineer/blog/css-quiz-test-your-knowledge-50-questions" style="display: block;">https://page.engineer/blog/css-quiz-test-your-knowledge-50-questions</a>
  <a href="https://page.engineer/blog/html-quiz-test-your-knowledge-top-50-questions" style="display: block;">https://page.engineer/blog/html-quiz-test-your-knowledge-top-50-questions</a>
  <a href="https://page.engineer/blog/placement-woes-skills-vs-opportunity-in-college" style="display: block;">https://page.engineer/blog/placement-woes-skills-vs-opportunity-in-college</a>
  <a href="https://page.engineer/blog/top-50-full-stack-developer-interview-questions" style="display: block;">https://page.engineer/blog/top-50-full-stack-developer-interview-questions</a>
  <a href="https://page.engineer/blog/10-best-ai-tools-every-web-developer-should-use-in-2025-with-official-links" style="display: block;">https://page.engineer/blog/10-best-ai-tools-every-web-developer-should-use-in-2025-with-official-links</a>
  <a href="https://page.engineer/blog/what-you-should-know-in-react-js-for-cracking-developer-interviews" style="display: block;">https://page.engineer/blog/what-you-should-know-in-react-js-for-cracking-developer-interviews</a>
  <a href="https://page.engineer/blog/how-to-use-github-a-step-by-step-guide-to-push-clone-and-collaborate-on-code" style="display: block;">https://page.engineer/blog/how-to-use-github-a-step-by-step-guide-to-push-clone-and-collaborate-on-code</a>
  <a href="https://page.engineer/blog/deploy-next-js-with-domain-on-vps-via-nginx-github-page-engineer" style="display: block;">https://page.engineer/blog/deploy-next-js-with-domain-on-vps-via-nginx-github-page-engineer</a>
  <a href="https://page.engineer/blog/how-to-add-an-a-or-aaaa-dns-record" style="display: block;">https://page.engineer/blog/how-to-add-an-a-or-aaaa-dns-record</a>
  <a href="https://page.engineer/blog/which-dns-record-should-you-use-a-complete-guide-to-dns-record-types" style="display: block;">https://page.engineer/blog/which-dns-record-should-you-use-a-complete-guide-to-dns-record-types</a>
</div>

      </div>
    </section>
  );
};

export default Home;
