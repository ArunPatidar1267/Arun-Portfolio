import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaDownload, FaLinkedin, FaGithub } from 'react-icons/fa';
import { resumeUrl } from '../constants/data';

const Contact = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Arun_Patidar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Feel free to reach out for collaborations, opportunities, or just to connect!</p>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div>
                <h3>Phone</h3>
                <p>+91 8085398012</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <h3>Email</h3>
                <p>arunpatidar6103@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3>Location</h3>
                <p>Indore, Madhya Pradesh, India - 452009</p>
              </div>
            </div>
            
            <div className="contact-actions">
              <button className="btn btn-resume" onClick={handleResumeDownload}>
                <FaDownload /> Download My Resume
              </button>
              <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Get my detailed resume with all qualifications and experience.
              </p>
            </div>
          </div>
          
          <div className="contact-links">
            <h3 style={{ marginBottom: '1.5rem' }}>Connect with me</h3>
            <p style={{ color: 'var(--text-gray)', marginBottom: '1.5rem' }}>
              I'm always open to discussing cloud computing, DevOps, or potential opportunities.
            </p>
            <div className="social-buttons">
              <a href="https://linkedin.com/in/arunpatidar6103/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/arunpatidar1267" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .contact-icon {
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(16, 185, 129, 0.1));
          width: 55px;
          height: 55px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-color);
          font-size: 1.3rem;
          flex-shrink: 0;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(37, 99, 235, 0.2);
        }

        .contact-item:hover .contact-icon {
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          color: white;
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(30, 41, 59, 0.3));
          border-radius: 12px;
          border: 1px solid rgba(37, 99, 235, 0.1);
          transition: all 0.4s ease;
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .contact-item:nth-child(1) { animation-delay: 0.1s; }
        .contact-item:nth-child(2) { animation-delay: 0.2s; }
        .contact-item:nth-child(3) { animation-delay: 0.3s; }

        .contact-item:hover {
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(16, 185, 129, 0.05));
          border-color: rgba(37, 99, 235, 0.2);
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.1);
        }

        .contact-item h3 {
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
          color: var(--text-light);
          transition: var(--transition);
        }

        .contact-item:hover h3 {
          color: var(--primary-color);
        }
        
        .contact-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
          animation: slideInUp 0.6s ease-out 0.4s both;
        }
        
        .contact-links {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.4));
          padding: 2.5rem;
          border-radius: 12px;
          border: 1px solid rgba(37, 99, 235, 0.2);
          transition: all 0.4s ease;
          animation: slideInUp 0.6s ease-out 0.5s both;
        }

        .contact-links:hover {
          border-color: rgba(37, 99, 235, 0.4);
          box-shadow: 0 15px 40px rgba(37, 99, 235, 0.1);
        }

        .contact-links h3 {
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 1.3rem;
        }
        
        .social-buttons {
          display: flex;
          gap: 1rem;
        }
        
        .social-buttons .btn {
          flex: 1;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .social-buttons .btn:hover {
          transform: translateY(-5px) scale(1.05);
        }

        body.light-mode .btn-secondary {
          border-color: rgba(0, 0, 0, 0.2) !important;
          color: #1e293b !important;
        }

        body.light-mode .btn-secondary:hover {
          background-color: rgba(37, 99, 235, 0.1) !important;
          border-color: var(--primary-color) !important;
        }

        body.light-mode .contact-item {
          background: linear-gradient(135deg, rgba(226, 232, 240, 0.5), rgba(226, 232, 240, 0.2));
          color: #1e293b;
        }

        body.light-mode .contact-item h3 {
          color: #1e293b;
        }

        body.light-mode .contact-links {
          background: linear-gradient(135deg, rgba(226, 232, 240, 0.6), rgba(226, 232, 240, 0.3));
          border-color: rgba(37, 99, 235, 0.15);
        }
        
        @media (max-width: 768px) {
          .social-buttons {
            flex-direction: column;
          }

          .contact-links {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;