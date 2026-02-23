import { FaCloud, FaCode, FaEnvelope, FaDownload } from 'react-icons/fa';
import ProfileImage from "../assets/Arun_Patidar.jpeg"
const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/pdfs/Arun-Patidar.pdf';
    link.download = 'Arun-Patidar.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showDownloadNotification();
  };

  const showDownloadNotification = () => {
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--accent-color)';
    notification.style.color = 'white';
    notification.style.padding = '1rem 1.5rem';
    notification.style.borderRadius = '8px';
    notification.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    notification.style.zIndex = '10000';
    notification.style.transition = 'all 0.3s ease';
    notification.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <i class="fas fa-check-circle"></i>
        <span>Resume download started!</span>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateY(20px)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="role-tag">
              <FaCloud /> Cloud & DevOps Engineer
            </div>
            <h1>Hi, I'm <span>Arun Patidar</span></h1>
            <p>
              Junior DevOps Engineer with experience in AWS, GCP, CI/CD (Jenkins), Docker, Git, Git-hub, ELK Stack, and Kubernetes & Terraform. 
              Completed DevOps internship and cloud training with hands-on exposure to automation, deployment pipelines, and cloud infrastructure management.
            </p>
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary">
                <FaCode /> View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                <FaEnvelope /> Get In Touch
              </a>
              <button className="btn btn-resume" onClick={handleResumeDownload}>
                <FaDownload /> Download Resume
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src={ProfileImage}
              alt="Arun Patidar" 
              className="profile-pic" 
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          padding: 150px 0 100px;
          display: flex;
          align-items: center;
          min-height: 100vh;
        }
        
        .hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4rem;
        }
        
        .hero-text {
          flex: 1;
          animation: fadeInLeft 0.8s ease-out;
        }
        
        .hero-image {
          flex: 0 0 300px;
          display: flex;
          justify-content: center;
          animation: fadeInRight 0.8s ease-out;
        }
        
        .profile-pic {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          object-fit: cover;
          border: 5px solid var(--primary-color);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          transition: var(--transition);
          animation: float 3s ease-in-out infinite;
        }
        
        .profile-pic:hover {
          transform: scale(1.03);
          box-shadow: 0 25px 50px rgba(37, 99, 235, 0.4);
        }
        
        .hero h1 {
          font-size: 3.5rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          animation: slideInUp 0.8s ease-out 0.2s both;
        }
        
        .hero h1 span {
          color: var(--primary-color);
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero p {
          font-size: 1.2rem;
          color: var(--text-gray);
          margin-bottom: 2rem;
          max-width: 600px;
          animation: slideInUp 0.8s ease-out 0.4s both;
        }
        
        .role-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: rgba(37, 99, 235, 0.2);
          color: var(--primary-color);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-weight: 600;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(37, 99, 235, 0.5);
          animation: slideInUp 0.8s ease-out both;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          flex-wrap: wrap;
          animation: slideInUp 0.8s ease-out 0.6s both;
        }

        .cta-buttons .btn {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .cta-buttons .btn:hover {
          animation: bounce 0.6s ease-in-out;
        }
        
        @media (max-width: 992px) {
          .hero {
            padding: 100px 0 80px;
          }

          .hero-content {
            flex-direction: column;
            text-align: center;
            gap: 2rem;
          }
          
          .hero-image {
            order: -1;
            flex: 0 0 auto;
          }
          
          .profile-pic {
            width: 220px;
            height: 220px;
          }
          
          .hero h1 {
            font-size: 2.8rem;
          }

          .hero-text {
            width: 100%;
          }
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 80px 0 60px;
          }

          .hero h1 {
            font-size: 2.3rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            width: 100%;
          }
          
          .btn {
            width: 100%;
            justify-content: center;
          }

          .profile-pic {
            width: 200px;
            height: 200px;
          }
        }
        
        @media (max-width: 576px) {
          .hero {
            padding: 60px 0 40px;
            min-height: auto;
          }

          .hero-text {
            animation: fadeInLeft 0.8s ease-out;
          }

          .hero-image {
            animation: fadeInRight 0.8s ease-out;
          }

          .hero h1 {
            font-size: 2rem;
            animation: slideInUp 0.8s ease-out 0.2s both;
          }

          .role-tag {
            animation: slideInUp 0.8s ease-out both;
          }

          .hero p {
            font-size: 1rem;
            animation: slideInUp 0.8s ease-out 0.4s both;
          }

          .cta-buttons {
            animation: slideInUp 0.8s ease-out 0.6s both;
          }
          
          .profile-pic {
            width: 180px;
            height: 180px;
            margin-top: 6rem;
            animation: float 3s ease-in-out infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
