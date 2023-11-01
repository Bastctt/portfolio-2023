import React, { useState } from "react";
import "./Projects.css";
import Booki from "../../assets/images/Booki.png";
import Kasa from "../../assets/images/Kasa.png";
import Sophie from "../../assets/images/Sophie.png";
import Grimoire from "../../assets/images/Grimoire.png";
import Nina from "../../assets/images/Nina.png";
import ToDoList from "../../assets/images/ToDoList.png"

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [closingDescription, setClosingDescription] = useState(false);

  const projects = [
    {
      title: "Booki - Agence de voyage",
      image: Booki,
      description: "Réalisation du Frontend du site d'une agence de voyage nommée Booki. Utilisation de HTML et CSS pour ce projet.",
      url: "https://bastctt.github.io/Booki/",
    },
    {
      title: "Sophie Bluel - Architecte d'intérieur",
      image: Sophie,
      description: "Développement du site de Sophie Bluel avec Javascript. Les principales missions étaient de mettre en place la page de présentation des travaux de l'architecte, créer la page de connexion de l'administrateur du site et créer la modale.",
      url: "",
    },
    {
      title: "Nina Carducci - Photographe professionnelle",
      image: Nina,
      description: "Optimisation du site de la photographe Nina Carducci afin d'augmenter son référencement et améliorer les performances du site. Restructurage de la sémantique du code. Utilisation des outils de SEO tels que Lighthouse, Wave et des compresseurs d'images.",
      url: "https://bastctt.github.io/projet5/",
    },
    {
      title: "Kasa - Application Web de location immobilière",
      image: Kasa,
      description: "Développement d'une application de location immobilière avec React pour l'entreprise Kasa. Mise en place des différents composants React et des différentes Pages.",
      url: "https://bastctt.github.io/Projet6/",
    },
    {
      title: "Mon Vieux Grimoire - Notation de livres",
      image: Grimoire,
      description: "Mise en place de l'environnement Backend",
      url: "",
    },
    {
      title: "ToDoList",
      image: ToDoList,
      description: "Création d'une ToDoList avec React, suppression, ajouts de listes et archivages.",
      url: "https://to-do-list-beryl-eight.vercel.app/",
    },
  ];

  const handleCloseDescription = () => {
    setClosingDescription(true);
    setTimeout(() => {
      setDescriptionVisible(false);
      setClosingDescription(false);
    }, 500); 
  };

  return (
    <section id="projets" className="projects">
      <div className="fade-in">
        <h1>Mes Projets</h1>
      </div>
      <div className="container-card">
        {projects.map((project, index) => (
          <div className="card fade-in" key={index}>
            <h2 className="title-card">{project.title}</h2>
            <img src={project.image} alt={project.title} />
            <button className="btn-card" onClick={() => (window.location.href = project.url)}>Voir le site</button>
            <button className="btn-card info" onClick={() => {setSelectedProject(index); setDescriptionVisible(true);}}>Info</button>
            {selectedProject === index && descriptionVisible && (
              <div className={`project-description ${descriptionVisible ? 'show' : ''} ${closingDescription ? 'closing' : ''}`}>
                <p>{project.description}</p>
                <button className="btn-card close" onClick={handleCloseDescription}>Fermer</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
