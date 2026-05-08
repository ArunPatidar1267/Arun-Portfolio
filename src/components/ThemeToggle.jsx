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
          position: fixed;
          top: 1rem;
          right: 1rem;
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
          z-index: 1002;
        }
        
        .theme-toggle:hover {
          color: var(--primary-color);
          transform: rotate(20deg);
        }

        @media (max-width: 768px) {
          .theme-toggle {
            margin: 3px 5rem 0px 0px;
          }
        }
      `}</style>
    </>
  );
};

export default ThemeToggle;
