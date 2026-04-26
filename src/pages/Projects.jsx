// src/pages/Projects.jsx
import { motion } from 'framer-motion';
import './Projects.css';

// Project data array makes it easy to add or remove projects later
const projectsData = [
  {
    id: 1,
    title: "Let Me Cook",
    tech: "Twine / Interactive Narrative",
    desc: "An interactive application and visual novel narrative designed for young adults and college students, mapping out complex decision trees and asset management.",
    link: "https://github.com/", 
  },
  {
    id: 2,
    title: "Echoes of the Agora",
    tech: "Figma / AR Mobile Dev",
    desc: "An Augmented Reality mobile application prototype blending narrative design with immersive technology.",
    link: "https://github.com/",
  },
  {
    id: 3,
    title: "QuizApp",
    tech: "React / JavaScript",
    desc: "A dynamic quiz application built with modern web technologies, handling state management and real-time user feedback.",
    link: "https://github.com/",
  }
];

// Animation variants for the stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-header">SYS.LOG // PROJECT_ARCHIVE</h2>
      
      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {projectsData.map((project) => (
          <motion.div key={project.id} className="project-card" variants={cardVariants}>
            {/* Replace this div with an <img> tag when you have screenshots! */}
            <div className="project-image-placeholder">
              [ IMAGE_ASSET_MISSING ]
            </div>
            
            <div className="project-info">
              <h3>{project.title}</h3>
              <span className="project-tech">{project.tech}</span>
              <p>{project.desc}</p>
              
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  &gt; VIEW_CODE
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  &gt; LIVE_DEMO
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;