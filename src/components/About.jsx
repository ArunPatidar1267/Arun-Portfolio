import { FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          BTech in Computer Science and Information Technology with 6.32 CGPA from Acropolis Institute of Technology and Research, Indore.
        </p>
        <div className="about-content">
          <p>
            I am a dedicated Cloud Computing and DevOps enthusiast with hands-on experience in AWS, Google Cloud, Oracle Cloud, 
            and various DevOps tools. My expertise includes designing scalable cloud architectures, implementing CI/CD pipelines, 
            and developing full-stack applications. I have published research papers, obtained multiple cloud certifications, 
            and successfully delivered projects with real-world impact.
          </p>
          <div className="about-info">
            <div className="info-item">
              <FaMapMarkerAlt style={{ color: 'var(--primary-color)' }} />
              <span>Indore, Madhya Pradesh, India</span>
            </div>
            <div className="info-item">
              <FaGraduationCap style={{ color: 'var(--primary-color)' }} />
              <span>Expected Graduation: June 2026</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about-content {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.4));
          padding: 3rem;
          border-radius: 12px;
          border: 1px solid rgba(37, 99, 235, 0.2);
          position: relative;
          overflow: hidden;
          animation: slideInUp 0.8s ease-out;
          transition: all 0.4s ease;
        }

        .about-content::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.1), transparent);
          animation: float 6s ease-in-out infinite;
        }

        .about-content:hover {
          border-color: rgba(37, 99, 235, 0.4);
          box-shadow: 0 20px 50px rgba(37, 99, 235, 0.1);
        }
        
        .about-content p {
          margin-bottom: 2rem;
          line-height: 1.9;
          color: var(--text-gray);
          font-size: 1.05rem;
          position: relative;
          z-index: 1;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .about-content p:first-of-type {
          color: var(--text-light);
          font-weight: 500;
        }
        
        .about-info {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-top: 2rem;
          position: relative;
          z-index: 1;
        }
        
        .info-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1rem 1.5rem;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(16, 185, 129, 0.05));
          border: 1px solid rgba(37, 99, 235, 0.2);
          border-radius: 10px;
          color: var(--text-light);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          animation: fadeInUp 0.8s ease-out 0.4s both;
          font-weight: 500;
          flex: 1;
          min-width: 200px;
          cursor: default;
        }

        .info-item:hover {
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(16, 185, 129, 0.1));
          border-color: rgba(37, 99, 235, 0.4);
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.1);
        }

        .info-item svg {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }

        .info-item:hover svg {
          transform: scale(1.2) rotate(10deg);
        }

        body.light-mode .about-content {
          background: linear-gradient(135deg, rgba(226, 232, 240, 0.6), rgba(226, 232, 240, 0.3));
          border-color: rgba(37, 99, 235, 0.15);
        }

        body.light-mode .about-content p {
          color: #475569;
        }

        body.light-mode .about-content p:first-of-type {
          color: #1e293b;
        }

        body.light-mode .info-item {
          background: linear-gradient(135deg, rgba(147, 197, 253, 0.15), rgba(167, 243, 208, 0.1));
          border-color: rgba(37, 99, 235, 0.2);
          color: #1e293b;
        }

        body.light-mode .info-item:hover {
          background: linear-gradient(135deg, rgba(147, 197, 253, 0.25), rgba(167, 243, 208, 0.15));
          border-color: rgba(37, 99, 235, 0.3);
        }

        @media (max-width: 768px) {
          .about-content {
            padding: 2rem;
          }

          .info-item {
            min-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default About;