import React, { useState } from 'react';
import './SkillCard.css';

function SkillCard({ imgSrc, alt, title, skills }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const maxRating = 5; // Note maximale possible

  return (
    <div
      className={`skill-card ${isExpanded ? 'expanded' : ''}`}
      onClick={toggleExpand}
    >
      <div className="img-container">
        <img src={imgSrc} alt={alt} />
      </div>
      <div className={`card-content ${isExpanded ? 'show' : 'hide'}`}>
        <h2>{title}</h2>
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <p>{skill.name}</p>
            <div className="rating-bubbles">
              {[...Array(maxRating)].map((_, i) => (
                <span key={i} className={`bubble ${i < skill.rating ? 'active' : ''}`}></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
