// src/pages/About.jsx
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <motion.div 
      className="about-container"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="about-header">SYS.LOG // USER_DATA</h2>
      
      <div className="about-grid">
        {/* Left Column: Bio */}
        <div className="bio-section">
          <p>
            I am a <span className="highlight">Digital Media student specializing in Web Design</span> at the University of Central Florida. My journey didn't start in design, though. I began in Engineering before pivoting to Digital Media—a shift that allows me to combine structural logic with raw creative execution.
          </p>
          <p>
            When I'm not writing React components or PHP server scripts, I'm working as a freelance artist creating custom commissions—ranging from decorative objects and graduation stoles to custom apparel—using Procreate and Adobe Illustrator. 
          </p>
          <p>
            I also bring leadership and organizational experience to the table. As the Secretary and Decorations Chair for VASA, I managed our digital documentation and spearheaded merchandise design. Whether I'm managing schedules at a front desk or architecting an interactive narrative, I prioritize clean systems and compelling aesthetics.
          </p>
        </div>

        {/* Right Column: Skills & Interests */}
        <div className="skills-container">
          <h3>&gt;_ CAPABILITIES</h3>
          
          <div className="skill-category">
            <h4>Development</h4>
            <div className="skill-tags">
              <span className="tag">React.js</span>
              <span className="tag">Vanilla JS</span>
              <span className="tag">HTML5 / CSS3</span>
              <span className="tag">PHP</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>Design & Tools</h4>
            <div className="skill-tags">
              <span className="tag">Adobe Illustrator</span>
              <span className="tag">Procreate</span>
              <span className="tag">Figma</span>
              <span className="tag">Git / GitHub</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>Current Interests</h4>
            <div className="skill-tags">
              <span className="tag">Immersive Narrative Design</span>
              <span className="tag">AR / VR Prototyping</span>
              <span className="tag">High-End Stationery Collectibles</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;