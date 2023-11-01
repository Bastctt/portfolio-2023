import React, { useEffect } from 'react';
import './Skills.css';
import FrontPic from '../../assets/images/frontend.svg';
import SEO from '../../assets/images/seo.png';
import WebDesign from '../../assets/images/web-design.svg';
import pdfFile from '../../assets/documents/MindMap.pdf';
import SkillCard from '../../Components/SkillCard/SkillCard';
import dataLogo from '../../assets/images/database.png'

function Skills() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((element) => {
        if (isElementInViewport(element)) {
          element.classList.add('fade-in-visible');
        }
      });
    };

    const isElementInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const redirectToMindMap = () => {
    window.location.href = pdfFile;
  };

  const skillsData = [
    {
      imgSrc: FrontPic,
      alt: 'Frontend',
      title: 'Frontend',
      skills: [
        { name: 'HTML5', rating: 5 },
        { name: 'CSS', rating: 4 },
        { name: 'SASS', rating: 4 },
        { name: 'React.js', rating: 4 },
        { name: 'Javascript', rating: 3 },
      ],
    },
    {
      imgSrc: WebDesign,
      alt: 'Web design',
      title: 'Web Design',
      skills: [
        { name: 'Photoshop', rating: 4 },
        { name: 'Figma', rating: 4 },
        { name: 'Illustrator', rating: 3 },
      ],
    },
    {
      imgSrc: SEO,
      alt: 'SEO',
      title: 'SEO',
      skills: [
        { name: 'Lighthouse', rating: 5 },
        { name: 'Wave', rating: 5 },
        { name: 'Schema.org', rating: 4 },
      ],
    },
    {
      imgSrc: dataLogo,
      alt: 'Backend',
      title: 'Backend',
      skills: [
        { name: 'Node.js', rating: 3 },
        { name: 'Express', rating: 3 },
        { name: 'MongoDB', rating: 2 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="fade-in">
        <h1>Mes compétences</h1>
      </div>
      <div className="container-skill">
        {skillsData.map((data, index) => (
          <SkillCard key={index} {...data} />
        ))}
      </div>
      <button className="button-mind" onClick={redirectToMindMap}>Mind map</button>
    </section>
  );
}

export default Skills;
