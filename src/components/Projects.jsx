import { FaExternalLinkAlt, FaCopyright } from 'react-icons/fa';
import { projectsData } from '../constants/data';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">A showcase of my key projects combining cloud computing, full-stack development, and sustainability.</p>
        
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <p style={{ color: 'var(--primary-color)', fontWeight: '500' }}>
                  {project.duration} | {project.role}
                </p>
              </div>
              <div className="project-desc">
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                {project.paperLink && (
                  <>
                    <a 
                      href={project.paperLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <FaExternalLinkAlt /> Published Paper
                    </a>
                    <a href="#certifications" className="btn btn-secondary">
                      <FaCopyright /> Copyright
                    </a>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .project-card {
          background-color: var(--card-bg);
          border-radius: 10px;
          overflow: hidden;
          transition: var(--transition);
          border: 1px solid rgba(255, 255, 255, 0.05);
          height: 100%;
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .project-card:nth-child(1) { animation-delay: 0.1s; }
        .project-card:nth-child(2) { animation-delay: 0.2s; }
        .project-card:nth-child(3) { animation-delay: 0.3s; }
        
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
          border-color: rgba(37, 99, 235, 0.3);
        }
        
        .project-header {
          padding: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .project-header h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          transition: var(--transition);
        }

        .project-card:hover .project-header h3 {
          color: var(--primary-color);
        }
        
        .project-desc {
          padding: 1.5rem;
          color: var(--text-gray);
        }
        
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        
        .tech-tag {
          background-color: rgba(37, 99, 235, 0.1);
          color: var(--primary-color);
          padding: 0.3rem 0.8rem;
          border-radius: 50px;
          font-size: 0.8rem;
          transition: var(--transition);
        }

        .project-card:hover .tech-tag {
          background-color: rgba(37, 99, 235, 0.2);
          transform: scale(1.05);
        }
        
        .project-footer {
          padding: 0 1.5rem 1.5rem;
          display: flex;
          gap: 1rem;
        }
        
        .project-footer .btn {
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
        }
      `}</style>
    </section>
  );
};

export default Projects;