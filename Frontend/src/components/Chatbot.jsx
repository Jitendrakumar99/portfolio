import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaChevronUp, FaPaperPlane } from 'react-icons/fa';

// Expanded certifications list (from Certifications.jsx summary)
const certifications = [
  { title: "GalileoX", issuer: "Galileo University", date: "2024", skills: ["Python", "Data Science"] },
  { title: "Red Hat AD141", issuer: "Red Hat", date: "2024", skills: ["Python Automation"] },
  { title: "Red Hat RH124", issuer: "Red Hat", date: "2024", skills: ["Linux System Administration"] },
  { title: "Red Hat RH134", issuer: "Red Hat", date: "2024", skills: ["Linux System Administration"] },
  { title: "HackerRank Java", issuer: "HackerRank", date: "2024", skills: ["Java"] },
  { title: "CodSoft Internship", issuer: "CodSoft", date: "2024", skills: ["Web Development"] },
  { title: "CPA Programming", issuer: "C++ Institute", date: "2024", skills: ["C++"] },
  { title: "C Programming", issuer: "Technical Hub", date: "2024", skills: ["C"] },
  { title: "IBM SkillsBuild", issuer: "IBM", date: "2024", skills: ["Web Development"] },
  { title: "Frontend HTML & CSS", issuer: "Great Learning", date: "2024", skills: ["HTML", "CSS"] },
  { title: "Programming Essentials", issuer: "Technical Hub", date: "2024", skills: ["Programming"] },
  { title: "JavaScript Basic", issuer: "HackerRank", date: "2024", skills: ["JavaScript"] },
  { title: "Python Certification", issuer: "Technical Hub", date: "2024", skills: ["Python"] }
];

// Expanded projects list (from Projects.jsx summary)
const projects = [
  {
    title: "Page Engineer (Blog Website)",
    description: "A modern blog platform for engineers to share articles and tutorials.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    githubLink: "https://github.com/Jitendrakumar99/",
    liveLink: "https://pageengineer.com"
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with product management and secure authentication.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    githubLink: "https://github.com/Jitendrakumar99/E-commerce",
    liveLink: "https://e-commerce-b8pf.vercel.app/"
  },
  {
    title: "Blood Donation Website",
    description: "A responsive platform to connect blood donors and recipients.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Bootstrap", "AWS"],
    githubLink: "https://github.com/Jitendrakumar99/Blooddonation",
    liveLink: "http://adityauniversity.in/blooddonation"
  },
  {
    title: "API Playground",
    description: "A playground for testing and learning about APIs.",
    technologies: ["React", "Node.js"],
    githubLink: "https://github.com/Jitendrakumar99/",
    liveLink: "https://app.pageengineer.com/"
  },
  {
    title: "Whiteboard",
    description: "A collaborative online whiteboard for drawing and brainstorming.",
    technologies: ["React", "Socket.io"],
    githubLink: "https://github.com/Jitendrakumar99",
    liveLink: "https://jitendradev.tech/"
  },
  {
    title: "CourseHub Learning Website",
    description: "A platform for online courses and learning resources.",
    technologies: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/Jitendrakumar99",
    liveLink: "https://github.com/Jitendrakumar99"
  },
  {
    title: "Netflix Clone",
    description: "A clone of Netflix with streaming UI and authentication.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/Jitendrakumar99/Netflix",
    liveLink: "https://jitendrakumar99.github.io/Netflix/"
  }
];

// Expanded skills (from Skills.jsx)
const skills = [
  { name: 'HTML5', proficiency: 90 },
  { name: 'CSS3', proficiency: 85 },
  { name: 'JavaScript', proficiency: 88 },
  { name: 'React', proficiency: 85 },
  { name: 'React Native', proficiency: 80 },
  { name: 'Node.js', proficiency: 80 },
  { name: 'MongoDB', proficiency: 82 },
  { name: 'Mongoose', proficiency: 80 },
  { name: 'C++', proficiency: 85 },
  { name: 'Java', proficiency: 82 },
  { name: 'Tailwind CSS', proficiency: 50 },
  { name: 'Git', proficiency: 85 },
   {name:'Sql',proficiency:70}
];

// Experience (from Experience.jsx)
const experiences = [
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
  {
    title: "C Intern",
    company: "Technical Hub",
    period: "2025-2026",
    description: [
      "Assisted students in understanding C programming concepts, including data structures and algorithms.",
      "Provided guidance on debugging and optimizing code for efficiency.",
      "Supported learners in solving programming challenges and enhancing problem-solving skills."
    ]
  }
];

// About (from About.jsx)
const aboutMe = `👋 Hi! I'm Jitendra Kumar, a passionate Full Stack Developer based in Andhra Pradesh.
- 1+ year of web development experience.
- B.Tech in Computer Science from Aditya College of Engineering and Technology (2022).
- I love building modern web apps, collaborating, and learning new technologies.
- Download my CV from the About section!`;

const personalInfo = {
  name: "Jitendra Kumar",
  role: "Full Stack Developer",
  location: "andhra pradesh",
  skills: {
    frontend: [
      { name: 'HTML5'},
      { name: 'CSS3'},
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'Tailwind CSS'},
      { name: 'Bootstrap'}
    ],
    backend: [
      { name: 'Node.js'},
      { name: 'Express.js' },
      { name: 'MongoDB'},
      { name: 'MySQL' }
    ],
    tools: [
      { name: 'Git' },
      { name: 'VS Code' },
      { name: 'Postman' }
    ],
    other: [
      { name: 'Problem Solving'},
      { name: 'Team Collaboration' },
      { name: 'Agile Methodology' },
      { name: 'RESTful APIs' }
    ]
  },
  hobbies: [
    "Coding and learning new technologies",
    "Reading tech blogs",
    "Playing video game",
    "Listening to music",
    "Problem-solving"
  ],
  goals: {
    shortTerm: [
      "Master advanced React concepts and patterns",
      "Build a comprehensive portfolio of full-stack projects",
      "Contribute to open-source projects",
      "Improve problem-solving skills through competitive programming"
    ],
    longTerm: [
      "Become a Senior Full Stack Developer",
      "Start a tech startup",
      "Create innovative solutions that impact people's lives",
      "Mentor aspiring developers"
    ]
  },
  futurePlans: [
    "Pursue Masters in Computer Science",
    "Specialize in AI and Machine Learning",
    "Work with cutting-edge technologies",
    "Build scalable applications that solve real-world problems"
  ],
  strengths: [
    "Quick learner and adaptable",
    "Strong problem-solving skills",
    "Good team player with excellent communication",
    "Passionate about coding and technology",
    "Detail-oriented and organized"
  ],
  weaknesses: [
    "Sometimes perfectionist which can slow down delivery",
    "Need to improve work-life balance",
    "Can be too focused on technical details",
    "Working on time management skills"
  ],
  education: {
    degree: "Bachelor of Technology",
    major: "Computer Science",
    university: "Aditya college of engineering and technology",
    year: "2022",
    achievements: [
      "Top performer in programming contests",
      "Led technical club activities",
      "Developed college project management system"
    ]
  }
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "👋 Hi! I'm your portfolio assistant. Ask me anything about Jitendra!", type: 'bot' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setMessages(prev => [...prev, { text: inputMessage, type: 'user' }]);

    setTimeout(() => {
      let response = getBotResponse(inputMessage.toLowerCase());
      setMessages(prev => [...prev, { text: response, type: 'bot' }]);
    }, 500);

    setInputMessage('');
  };

  const getBotResponse = (input) => {
    // About
    if (input.includes('about') || input.includes('yourself') || input.includes('bio')) {
      return aboutMe;
    }

    // Name and basic info
    if (input.includes('name') || input.includes('who are you')) {
      return `Hi! I'm ${personalInfo.name}, a ${personalInfo.role} based in ${personalInfo.location}.`;
    }

    // Hobbies
    if (input.includes('hobby') || input.includes('hobbies') || input.includes('do for fun')) {
      return `My hobbies:\n${personalInfo.hobbies.map(h => `• ${h}`).join('\n')}`;
    }

    // Goals
    if (input.includes('goal') || input.includes('aim') || input.includes('objective')) {
      return `My short-term goals:\n${personalInfo.goals.shortTerm.map(g => `• ${g}`).join('\n')}
\nMy long-term goals:\n${personalInfo.goals.longTerm.map(g => `• ${g}`).join('\n')}`;
    }

    // Future plans
    if (input.includes('future plan') || input.includes('future')) {
      return `My future plans:\n${personalInfo.futurePlans.map(f => `• ${f}`).join('\n')}`;
    }

    // Strengths
    if (input.includes('strength')) {
      return `My strengths:\n${personalInfo.strengths.map(s => `• ${s}`).join('\n')}`;
    }

    // Weaknesses
    if (input.includes('weakness')) {
      return `My weaknesses:\n${personalInfo.weaknesses.map(w => `• ${w}`).join('\n')}`;
    }

    // Skills
    if (input.includes('skill') || input.includes('technology') || input.includes('tech stack')) {
      return `Here are my main skills:\n${skills.map(s => `• ${s.name} (${s.proficiency}%)`).join('\n')}`;
    }

    // Projects
    if (input.includes('project')) {
      return `Here are my main projects:\n${projects.map(
        p => `• ${p.title}: ${p.description}\n  Tech: ${p.technologies.join(', ')}\n  [GitHub](${p.githubLink}) | [Live](${p.liveLink})`
      ).join('\n\n')}`;
    }

    // Certifications
    if (input.includes('certificate') || input.includes('certification')) {
      return `I have earned ${certifications.length}+ certificates, including:\n${certifications.map(
        c => `• ${c.title} (${c.date}) from ${c.issuer}`
      ).join('\n')}`;
    }

    // Experience
    if (input.includes('experience') || input.includes('work')) {
      return `Here is my experience:\n${experiences.map(
        exp => `• ${exp.title} at ${exp.company} (${exp.period})\n  ${exp.description.join('\n  ')}`
      ).join('\n\n')}`;
    }

    // Education
    if (input.includes('education') || input.includes('study') || input.includes('degree')) {
      return `🎓 Education:\n• ${personalInfo.education.degree} in ${personalInfo.education.major}\n• ${personalInfo.education.university} (${personalInfo.education.year})\nAchievements:\n${personalInfo.education.achievements.map(a => `• ${a}`).join('\n')}`;
    }

    // Help
    if (input.includes('help') || input.includes('what can you do')) {
      return `You can ask me about:\n• About Me / Bio\n• Skills / Tech Stack\n• Projects\n• Certifications\n• Experience\n• Education\n• Hobbies\n• Goals\n• Strengths\n• Weaknesses\nType your question or try: "Tell me about your skills", "List your projects", "Show certificates", "What is your experience?", "What are your hobbies?", etc.`;
    }

    // Default
    return "I'm your portfolio assistant! Ask me about my projects, skills, certificates, experience, education, hobbies, goals, strengths, or weaknesses. Type 'help' for options.";
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-400/20 hover:bg-primary/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <FaRobot className="text-2xl" />
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-2xl w-80 transition-all duration-300">
          {/* Chat Header */}
          <div className="bg-[#110031] bg-opacity-80 text-white p-3 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FaRobot className="text-xl" />
              <span className="font-medium">Portfolio Assistant</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:bg-primary-dark/20 p-1 rounded transition-colors"
              >
                <FaChevronUp className={`transform transition-transform ${isMinimized ? 'rotate-180' : ''}`} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-primary-dark/20 p-1 rounded transition-colors"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          {!isMinimized && (
            <>
              <div className="h-96 overflow-y-auto p-4 bg-[#110031]">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-4 ${
                      message.type === 'user' ? 'text-right' : 'text-left'
                    }`}
                  >
                    <div
                      className={`inline-block p-3 rounded-lg max-w-[80%] ${
                        message.type === 'user'
                          ? 'bg-blue-950 text-white'
                          : 'bg-blue-400/10 bg-opacity-50 text-white'
                      }`}
                      style={{ whiteSpace: 'pre-line', wordBreak: 'break-word' }}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="p-3 border-t bg-[#110031] bg-opacity-80 rounded-b-lg">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask me anything..."
                    className="flex-1 p-2 border text-white bg-[#110031] bg-opacity-80 rounded-lg  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <FaPaperPlane className="text-sm" />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
