import { FaCloud, FaCogs, FaShieldAlt } from 'react-icons/fa';
import { skillsData } from '../constants/data';

const Skills = () => {
  const skillCategories = [
    { icon: <FaCloud />, title: 'Cloud Platforms', skills: skillsData.cloud },
    { icon: <FaCogs />, title: 'DevOps Tools', skills: skillsData.devops },
    { icon: <FaShieldAlt />, title: 'Testing & Monitoring', skills: skillsData.developer }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">My expertise spans across cloud platforms, DevOps tools, programming languages, and frameworks.</p>
        
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.icon} {category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className={`skill-item ${skill.important ? 'important' : ''}`}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .skills-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .skill-category {
          background-color: var(--card-bg);
          border-radius: 10px;
          padding: 2rem;
          transition: var(--transition);
          border: 1px solid rgba(255, 255, 255, 0.05);
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .skill-category:nth-child(1) { animation-delay: 0.1s; }
        .skill-category:nth-child(2) { animation-delay: 0.2s; }
        .skill-category:nth-child(3) { animation-delay: 0.3s; }
        
        .skill-category:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border-color: rgba(37, 99, 235, 0.3);
        }
        
        .skill-category h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--primary-color);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          animation: fadeInDown 0.6s ease-out;
        }

        .skill-category:hover h3 {
          animation: none;
        }
        
        .skill-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }
        
        .skill-item {
          background-color: rgba(30, 41, 59, 0.8);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.9rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: default;
        }

        .skill-item:hover {
          transform: scale(1.1) translateY(-3px);
          background-color: rgba(37, 99, 235, 0.3);
          border-color: rgba(37, 99, 235, 0.6);
          box-shadow: 0 5px 15px rgba(37, 99, 235, 0.2);
        }
        
        .skill-item.important {
          background-color: rgba(37, 99, 235, 0.2);
          border-color: rgba(37, 99, 235, 0.4);
          color: var(--primary-color);
          font-weight: 600;
        }

        .skill-item.important:hover {
          background-color: rgba(37, 99, 235, 0.4);
          border-color: rgba(37, 99, 235, 0.8);
          box-shadow: 0 5px 20px rgba(37, 99, 235, 0.3);
        }

        body.light-mode .skill-item {
          background-color: rgba(226, 232, 240, 0.6);
          border-color: rgba(100, 116, 139, 0.2);
          color: #1e293b;
        }

        body.light-mode .skill-item:hover {
          background-color: rgba(147, 197, 253, 0.4);
          border-color: rgba(37, 99, 235, 0.5);
          box-shadow: 0 5px 15px rgba(37, 99, 235, 0.1);
        }

        body.light-mode .skill-item.important {
          background-color: rgba(147, 197, 253, 0.3);
          border-color: rgba(37, 99, 235, 0.5);
          color: #1e40af;
          font-weight: 600;
        }

        body.light-mode .skill-item.important:hover {
          background-color: rgba(147, 197, 253, 0.5);
          border-color: rgba(37, 99, 235, 0.8);
          box-shadow: 0 5px 20px rgba(37, 99, 235, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Skills;