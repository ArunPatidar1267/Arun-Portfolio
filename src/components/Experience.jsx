import { FaBriefcase } from 'react-icons/fa';
import { experienceData } from '../constants/data';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey and training experiences in cloud computing and DevOps.</p>
        
        <div className="timeline">
          {experienceData.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">{exp.date}</div>
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
                {exp.type === 'full-time' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', color: 'var(--accent-color)' }}>
                    <FaBriefcase />
                    <span>Full-time Internship</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .timeline::after {
          content: '';
          position: absolute;
          width: 2px;
          background-color: var(--primary-color);
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -1px;
        }
        
        .timeline-item {
          padding: 10px 40px;
          position: relative;
          width: 50%;
          box-sizing: border-box;
          margin-bottom: 2rem;
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .timeline-item:nth-child(1) { animation-delay: 0.1s; }
        .timeline-item:nth-child(2) { animation-delay: 0.2s; }
        .timeline-item:nth-child(3) { animation-delay: 0.3s; }
        .timeline-item:nth-child(4) { animation-delay: 0.4s; }
        .timeline-item:nth-child(5) { animation-delay: 0.5s; }
        
        .timeline-item:nth-child(odd) {
          left: 0;
        }
        
        .timeline-item:nth-child(even) {
          left: 50%;
        }
        
        .timeline-content {
          background-color: var(--card-bg);
          padding: 1.5rem;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: var(--transition);
        }
        
        .timeline-content:hover {
          border-color: rgba(37, 99, 235, 0.3);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.1);
        }
        
        .timeline-item::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          background-color: var(--primary-color);
          border-radius: 50%;
          top: 20px;
          z-index: 1;
          transition: var(--transition);
          animation: pulse 2s ease-in-out infinite;
        }
        
        .timeline-item:nth-child(odd)::after {
          right: -10px;
        }
        
        .timeline-item:nth-child(even)::after {
          left: -10px;
        }

        .timeline-content:hover .timeline-date {
          color: var(--secondary-color);
        }
        
        .timeline-date {
          color: var(--primary-color);
          font-weight: 600;
          margin-bottom: 0.5rem;
          transition: var(--transition);
        }
        
        @media (max-width: 992px) {
          .timeline::after {
            left: 31px;
          }
          
          .timeline-item {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
          }
          
          .timeline-item:nth-child(even) {
            left: 0;
          }
          
          .timeline-item::after {
            left: 21px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;