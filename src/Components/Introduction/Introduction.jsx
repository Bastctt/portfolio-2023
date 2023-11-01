import React from "react";
import './Introduction.css';
import image from '../../assets/images/image-intro.png';
import pdfFile from '../../assets/documents/CV.pdf';

function Introduction() {
  const redirectToCV = () => {
    window.location.href = pdfFile;
  };

  return (
    <section id="a-propos" className="section-intro">
      <div className="intro-container">
        <img src={image} className="img-intro" alt="Introduction" />
        <h1>Bastien Cochet<br /> 22 ans <br /> Développeur front-end Junior</h1>
        <p>Bienvenue sur mon portfolio de développeur !
        Je suis passionné par les nouvelles <strong>technologies</strong>, la création de solutions <strong>innovantes</strong> et la résolution de problèmes par le développement et la programmation. Diplômé Bac +2 en tant que Développeur Intégrateur web je suis actuellement à la recherche d'une opportunité d'alternance pour une durée de 22 mois.
       </p>
        <button onClick={redirectToCV}>Mon CV</button>
      </div>
    </section>
  );
}


export default Introduction;
