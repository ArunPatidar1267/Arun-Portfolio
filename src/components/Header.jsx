import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Header = ({ isDarkMode, onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications & Publications' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  return (
    <header className="header">
      <div className="container nav-container">
        <a href="#home" className="logo" onClick={(e) => {
          e.preventDefault();
          handleNavClick('home');
        }}>
          Arun<span>.</span>
        </a>
        <div className="header-right">
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={activeSection === link.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          width: 100%;
          background-color: ${isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
          backdrop-filter: blur(10px);
          z-index: 1000;
          padding: 1rem 0;
          border-bottom: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }
        
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .header-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-light);
          text-decoration: none;
        }
        
        .logo span {
          color: var(--primary-color);
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-light);
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 1001;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        
        .nav-links a {
          color: var(--text-gray);
          text-decoration: none;
          font-weight: 500;
          transition: var(--transition);
          position: relative;
        }
        
        .nav-links a:hover,
        .nav-links a.active {
          color: var(--primary-color);
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary-color);
          transition: var(--transition);
        }
        
        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }
        
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }
          
          .nav-links {
            position: fixed;
            top: 70px;
            left: -100%;
            width: 100%;
            flex-direction: column;
            background-color: ${isDarkMode ? 'var(--dark-bg)' : '#ffffff'};
            padding: 2rem;
            transition: var(--transition);
            border-top: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }
          
          .nav-links.active {
            left: 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;