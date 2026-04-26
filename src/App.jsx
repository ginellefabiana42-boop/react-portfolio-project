// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Import our new pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        
        <Navbar />
        
        {/* Main Content Area */}
        <main style={{ flex: 1, padding: '2rem 10%', display: 'flex' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer style={{ padding: '1.5rem', textAlign: 'center', borderTop: '1px solid var(--accent)', color: 'var(--text-muted)' }}>
          <p>© {new Date().getFullYear()} // PORTFOLIO_BUILD</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;