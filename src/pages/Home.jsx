// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* motion.div allows us to add animation props directly to the element */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hero-content"
      >
        <h1>SYS.ONLINE // HELLO_WORLD</h1>
        <p>
          Digital Media student specializing in Web Design at UCF. 
          Currently building immersive digital experiences, bridging design with code, and targeting a May 2027 launch.
        </p>
        
        {/* Animated button routing to your projects page */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <NavLink to="/projects" className="cta-button">
            INITIALIZE_PROJECTS
          </NavLink>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;