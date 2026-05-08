import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <>
      <button 
        className="theme-toggle" 
        onClick={onToggle}
        aria-label="Toggle theme"
        title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
      <style jsx>{`
        .theme-toggle {
          background: none;
          border: none;
          color: var(--text-light);
          font-size: 1.2rem;
          cursor: pointer;
          transition: var(--transition);
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .theme-toggle:hover {
          color: var(--primary-color);
          transform: rotate(20deg);
        }
      `}</style>
    </>
  );
};

export default ThemeToggle;
