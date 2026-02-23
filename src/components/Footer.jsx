import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <a href="#home" className="logo">Arun<span>.</span></a>
        <p style={{ marginTop: '1rem', color: 'var(--text-gray)', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
          Cloud Computing & DevOps Engineer specializing in scalable solutions, automation, and full-stack development.
        </p>
        
        <div className="social-links">
          <a href="https://linkedin.com/in/arunpatidar6103/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/arunpatidar1267" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="mailto:arunpatidar6103@gmail.com" className="social-link">
            <FaEnvelope />
          </a>
        </div>
        
        <p className="copyright">
          &copy; 2025 Arun Patidar. All rights reserved.
        </p>
      </div>
      <style jsx>{`
        footer {
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 1));
          padding: 4rem 0 2rem;
          text-align: center;
          border-top: 1px solid rgba(37, 99, 235, 0.2);
          position: relative;
          overflow: hidden;
          animation: fadeInUp 0.8s ease-out;
        }

        footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
        }
        
        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-light);
          text-decoration: none;
          transition: var(--transition);
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo:hover {
          transform: scale(1.05);
        }
        
        .logo span {
          color: var(--primary-color);
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin: 2.5rem 0;
          flex-wrap: wrap;
        }
        
        .social-link {
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(16, 185, 129, 0.1));
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-light);
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 1.1rem;
          position: relative;
          overflow: hidden;
        }

        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          transition: left 0.4s ease;
          z-index: -1;
        }

        .social-link:hover::before {
          left: 0;
        }
        
        .social-link:hover {
          color: white;
          transform: translateY(-8px) scale(1.1);
          border-color: var(--primary-color);
          box-shadow: 0 15px 30px rgba(37, 99, 235, 0.3);
        }
        
        .copyright {
          color: var(--text-gray);
          font-size: 0.85rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }

        @media (max-width: 576px) {
          footer {
            padding: 3rem 0 1.5rem;
          }

          .social-links {
            gap: 1rem;
          }

          .social-link {
            width: 45px;
            height: 45px;
            font-size: 1rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;