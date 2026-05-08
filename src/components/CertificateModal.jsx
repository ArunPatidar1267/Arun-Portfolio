import { useState } from 'react';
import { FaTimes, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';

const CertificateModal = ({ isOpen, onClose, certificate }) => {
  const [imgError, setImgError] = useState(false);
  if (!isOpen || !certificate) return null;

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const fileUrl = certificate.file;

  return (
    <div className="modal" onClick={handleModalClick}>
      <button className="modal-close" onClick={onClose} aria-label="Close">
        <FaTimes />
      </button>
      <div className="modal-content">
        {certificate.type === 'image' ? (
          imgError ? (
            <div className="modal-fallback">
              <p>Unable to load image.</p>
              <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="btn">
                <FaExternalLinkAlt /> Open in new tab
              </a>
            </div>
          ) : (
            <img
              src={fileUrl}
              alt={certificate.title}
              className="modal-image"
              onError={() => setImgError(true)}
            />
          )
        ) : certificate.type === 'pdf' ? (
          <iframe
            src={fileUrl}
            className="modal-pdf"
            title={certificate.title}
          />
        ) : null}
      </div>

      <div className="modal-actions">
        <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="btn">
          <FaExternalLinkAlt /> Open
        </a>
        <a href={fileUrl} download className="btn">
          <FaDownload /> Download
        </a>
      </div>

      <style jsx>{`
        .modal {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.6);
          z-index: 2000;
          padding: 2rem;
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: transparent;
          border: none;
          color: white;
          font-size: 1.2rem;
          cursor: pointer;
        }

        .modal-content {
          max-width: 96vw;
          max-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--card-bg);
          padding: 1rem;
          border-radius: 8px;
          overflow: auto;
        }

        .modal-image {
          max-width: 90vw;
          max-height: 76vh;
          object-fit: contain;
          display: block;
        }

        .modal-pdf {
          width: 90vw;
          height: 76vh;
          border: none;
        }

        .modal-actions {
          margin-top: 0.75rem;
          display: flex;
          gap: 0.5rem;
          justify-content: center;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,255,255,0.06);
          color: white;
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          text-decoration: none;
        }

        .modal-fallback {
          color: var(--text-gray);
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default CertificateModal;