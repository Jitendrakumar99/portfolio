import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaChevronUp, FaPaperPlane } from 'react-icons/fa';

const certifications = [
  {
    title: "React - The Complete Guide",
    issuer: "Udemy",
    date: "2023",
    skills: ["React", "Redux", "React Hooks", "Context API"],
  },
  {
    title: "Full Stack Web Development",
    issuer: "FreeCodeCamp",
    date: "2023",
    skills: ["JavaScript", "Node.js", "MongoDB", "Express"],
  },
 
];
const projects = [
  {
    title: "E-commerce Platform",
    // description:
    //   "An e-commerce platform for selling products online. It has a user-friendly interface and is optimized for search engines.",
    images: ["home.png", "pic1.png", "pic2.png","pic3.png"],
    technologies: ["React", "Node.js", "MongoDB", "Express", "TailwindCss"],
    githubLink: "https://github.com/Jitendrakumar99/E-commerce",
    liveLink: "https://project1.com",
  },
  {
    title: "Netflix Clone",
    // description:
    //   "A clone of the popular streaming service Netflix. It has a user-friendly interface and is optimized for search engines.",
    images: ["netflix.png","net1.png"],
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/Jitendrakumar99/Netflix",
    liveLink: "https://jitendrakumar99.github.io/Netflix/",
  },
  {
    title: "Blood Donation",
    // description:
    //   "A responsive Blood Donation website with secure donor registration, real-time database, smooth animations, and a user-friendly UI to connect donors with those in need.",
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

  const formatSkillCategory = (category, skills) => {
    return `${category}:
${skills.map(skill => `• ${skill.name} (${skill.proficiency}%)`).join('\n')}`;
  };

  const getBotResponse = (input) => {
    // Name and basic info
    if (input.includes('name') || input.includes('who')) {
      return `Hi! I'm ${personalInfo.name}, a ${personalInfo.role} based in ${personalInfo.location}.`;
    }

    // Detailed skills query
    if (input.includes('skill') || input.includes('tech') || input.includes('technologies')) {
      if (input.includes('front') || input.includes('ui')) {
        return formatSkillCategory('Frontend Skills', personalInfo.skills.frontend);
      }
      if (input.includes('back') || input.includes('server')) {
        return formatSkillCategory('Backend Skills', personalInfo.skills.backend);
      }
      if (input.includes('tool')) {
        return formatSkillCategory('Development Tools', personalInfo.skills.tools);
      }
      if (input.includes('other') || input.includes('soft')) {
        return formatSkillCategory('Other Skills', personalInfo.skills.other);
      }
      
      // Show all skills if no specific category is mentioned
      return `My Skills Overview:

${formatSkillCategory('Frontend Development', personalInfo.skills.frontend)}

${formatSkillCategory('Backend Development', personalInfo.skills.backend)}

${formatSkillCategory('Development Tools', personalInfo.skills.tools)}

${formatSkillCategory('Other Skills', personalInfo.skills.other)}`;
    }

    // Hobbies
    if (input.includes('hobby') || input.includes('hobbies') || input.includes('interests')) {
      return `Here are my hobbies:
${personalInfo.hobbies.map(hobby => `• ${hobby}`).join('\n')}`;
    }

    // Short-term goals
    if (input.includes('short term') || input.includes('short-term')) {
      return `My short-term goals are:
${personalInfo.goals.shortTerm.map(goal => `🎯 ${goal}`).join('\n')}`;
    }

    // Long-term goals
    if (input.includes('long term') || input.includes('long-term')) {
      return `My long-term goals are:
${personalInfo.goals.longTerm.map(goal => `🎯 ${goal}`).join('\n')}`;
    }

    // Future plans
    if (input.includes('future') || input.includes('plan')) {
      return `Here are my future plans:
${personalInfo.futurePlans.map(plan => `🚀 ${plan}`).join('\n')}`;
    }

    // Strengths
    if (input.includes('strength') || input.includes('good at')) {
      return `My strengths include:
${personalInfo.strengths.map(strength => `💪 ${strength}`).join('\n')}`;
    }

    // Weaknesses
    if (input.includes('weakness') || input.includes('improve')) {
      return `Areas I'm working on improving:
${personalInfo.weaknesses.map(weakness => `📈 ${weakness}`).join('\n')}`;
    }

    // Education
    if (input.includes('education') || input.includes('study') || input.includes('degree')) {
      return `🎓 Education Background:
• Degree: ${personalInfo.education.degree}
• Major: ${personalInfo.education.major}
• University: ${personalInfo.education.university}
• Year: ${personalInfo.education.year}

Achievements:
${personalInfo.education.achievements.map(achievement => `🏆 ${achievement}`).join('\n')}`;
    }

    //project
    if (input.includes('project') || input.includes('liveproject')) {
      return `Here are my Project:
${projects.map(cert => `📜 ${cert.title} (${cert.technologies})  ${cert.liveLink}`).join('\n')}`;
    }

    // Certification related queries
    if (input.includes('certification') || input.includes('certificate')) {
      return `Here are my certifications:
${certifications.map(cert => `📜 ${cert.title} (${cert.date}) from ${cert.issuer}`).join('\n')}`;
    }

    // Specific certification queries
    const specificCert = certifications.find(cert => 
      input.toLowerCase().includes(cert.title.toLowerCase())
    );
    if (specificCert) {
      return `About ${specificCert.title}:
📅 Completed: ${specificCert.date}
🏢 Issuer: ${specificCert.issuer}
💡 Skills: ${specificCert.skills.join(', ')}`;
    }

    // Help message
    if (input.includes('help') || input.includes('what') || input.includes('how')) {
      return `You can ask me about:
• Basic info (name, role)
• Skills (frontend, backend, tools, other)
• Hobbies and interests
• Short-term and long-term goals
• Future plans
• Strengths and weaknesses
• Education background
• Certifications`;
    }

    // Default response
    return "Feel free to ask about my skills, hobbies, goals, education, strengths, or type 'help' to see all options!";
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-400/20   hover:bg-primary/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
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
                      style={{ whiteSpace: 'pre-line',wordBreak: 'break-word'}}
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
