import { useState } from 'react';
import { 
  FaAws, 
  FaDatabase, 
  FaCertificate, 
  FaGoogle, 
  FaFileAlt, 
  FaCopyright,
  FaExternalLinkAlt 
} from 'react-icons/fa';
import CertificateModal from './CertificateModal';
import { certificatesData } from '../constants/data';

const CertificationsPublications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'aws': return <FaAws />;
      case 'database': return <FaDatabase />;
      case 'certificate': return <FaCertificate />;
      case 'google': return <FaGoogle />;
      case 'file-alt': return <FaFileAlt />;
      case 'copyright': return <FaCopyright />;
      default: return <FaCertificate />;
    }
  };

  return (
    <>
      <section id="certifications" className="certifications">
        <div className="container">
          <h2 className="section-title">Certifications & Publications</h2>
          <p className="section-subtitle">
            Click on any certification to view it. Professional certifications and research publications demonstrating my expertise.
          </p>
          
          <div className="certifications-container">
            {certificatesData.map((cert) => (
              <div 
                key={cert.id} 
                className="cert-card clickable"
                onClick={() => handleCertificateClick(cert)}
              >
                <div className="clickable-indicator">Click to view</div>
                <div className="cert-header">
                  <div className="cert-icon">
                    {getIcon(cert.icon)}
                  </div>
                  <div className="cert-info">
                    <h3>{cert.title}</h3>
                    <p>{cert.issuer} | {cert.description}</p>
                  </div>
                </div>
                {cert.id === 'research-paper' && (
                  <p className="cert-description">
                    "GLOBON: Real-Time Carbon Footprint Calculator and Tracker" published in Volume 12, Issue 5.
                  </p>
                )}
                {cert.id === 'copyright' && (
                  <p className="cert-description">
                    Registered for "Globon: Real-time Tracking And Solutions For A Sustainable Future"
                  </p>
                )}
                <div className="cert-footer">
                  {cert.verifyLink && (
                    <a 
                      href={cert.verifyLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt /> Verify
                    </a>
                  )}
                  {cert.paperLink && (
                    <a 
                      href={cert.paperLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt /> View Paper
                    </a>
                  )}
                  {cert.certificateId && (
                    <span className="cert-id">Certificate ID: {cert.certificateId}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CertificateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        certificate={selectedCertificate}
      />
      <style jsx>{`
        .certifications-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .cert-card {
          background-color: var(--card-bg);
          border-radius: 10px;
          padding: 2rem;
          transition: var(--transition);
          border: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .cert-card:nth-child(1) { animation-delay: 0.1s; }
        .cert-card:nth-child(2) { animation-delay: 0.2s; }
        .cert-card:nth-child(3) { animation-delay: 0.3s; }
        .cert-card:nth-child(4) { animation-delay: 0.4s; }
        .cert-card:nth-child(5) { animation-delay: 0.5s; }
        .cert-card:nth-child(6) { animation-delay: 0.6s; }
        
        .cert-card:hover {
          transform: translateY(-5px);
          border-color: rgba(37, 99, 235, 0.3);
          box-shadow: 0 15px 40px rgba(37, 99, 235, 0.1);
        }

        .cert-card.clickable {
          cursor: pointer;
        }
        
        .cert-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .cert-icon {
          background-color: rgba(37, 99, 235, 0.2);
          width: 60px;
          height: 60px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          color: var(--primary-color);
          transition: var(--transition);
        }

        .cert-card:hover .cert-icon {
          background-color: rgba(37, 99, 235, 0.3);
          transform: scale(1.1) rotate(5deg);
        }
        
        .cert-info h3 {
          font-size: 1.2rem;
          margin-bottom: 0.3rem;
          transition: var(--transition);
        }

        .cert-card:hover .cert-info h3 {
          color: var(--primary-color);
        }
        
        .cert-info p {
          color: var(--text-gray);
          font-size: 0.9rem;
        }
        
        .cert-description {
          color: var(--text-gray);
          font-size: 0.9rem;
          margin-top: 1rem;
          transition: var(--transition);
        }

        .cert-card:hover .cert-description {
          color: var(--text-light);
        }
        
        .cert-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .cert-id {
          color: var(--text-gray);
          font-size: 0.9rem;
        }

        .clickable-indicator {
          position: absolute;
          top: 1rem;
          right: 1rem;
          font-size: 0.75rem;
          background: rgba(37, 99, 235, 0.3);
          color: var(--primary-color);
          padding: 0.3rem 0.6rem;
          border-radius: 4px;
          opacity: 0;
          transition: var(--transition);
        }

        .cert-card:hover .clickable-indicator {
          opacity: 1;
          animation: fadeInUp 0.3s ease-out;
        }
        
        @media (max-width: 576px) {
          .certifications-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default CertificationsPublications;