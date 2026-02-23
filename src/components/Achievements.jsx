import { FaTrophy, FaAward, FaMedal, FaMicrophone } from 'react-icons/fa';
import { achievementsData } from '../constants/data';

const Achievements = () => {
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'trophy': return <FaTrophy />;
      case 'award': return <FaAward />;
      case 'medal': return <FaMedal />;
      case 'microphone': return <FaMicrophone />;
      default: return <FaAward />;
    }
  };

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">Recognitions and awards that highlight my skills and accomplishments.</p>
        
        <div className="achievements-grid">
          {achievementsData.map((achievement) => (
            <div key={achievement.id} className="achievement-card">
              <div className="achievement-icon">
                {getIcon(achievement.icon)}
              </div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
              {achievement.percentile && (
                <div className="percentile-badge">{achievement.percentile} Percentile</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .achievement-card {
          background-color: var(--card-bg);
          border-radius: 10px;
          padding: 1.5rem;
          transition: var(--transition);
          border: 1px solid rgba(255, 255, 255, 0.05);
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .achievement-card:nth-child(1) { animation-delay: 0.1s; }
        .achievement-card:nth-child(2) { animation-delay: 0.2s; }
        .achievement-card:nth-child(3) { animation-delay: 0.3s; }
        .achievement-card:nth-child(4) { animation-delay: 0.4s; }
        
        .achievement-card:hover {
          transform: translateY(-5px);
          border-color: rgba(37, 99, 235, 0.3);
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.1);
        }
        
        .achievement-icon {
          background-color: rgba(16, 185, 129, 0.2);
          width: 50px;
          height: 50px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: var(--accent-color);
          margin-bottom: 1rem;
          transition: var(--transition);
        }

        .achievement-card:hover .achievement-icon {
          animation: rotate 0.8s ease-in-out;
          transform: scale(1.2);
        }
        
        .achievement-card h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          transition: var(--transition);
        }

        .achievement-card:hover h3 {
          color: var(--accent-color);
        }
        
        .percentile-badge {
          display: inline-block;
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          margin-top: 0.5rem;
        }
      `}</style>
    </section>
  );
};

export default Achievements;