import React from 'react';
import './Css/Experiences.css'; 

const Experiences = () => {
  return (
    <section className="cv-section">
      <div className="card-container">
        <div className="card">
          <div className="card-body">
          <h2>Expériences Professionnelles</h2>
            <h3 className="card-title">Stage professionnel</h3>
            <h4 className="card-subtitle">2S Agency - Montpellier</h4>
            <p className="card-text">
              Gestion des incidents et résolution de bugs sur le SAAS<br />
              Développement de endpoints en API<br />
              Création de mailings<br />
              Conception et création de méthode magique “Login Link” sur Symfony<br />
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Mango - Montpellier</h3>
            <h4 className="card-subtitle">Hôte de caisse/Referrant numérique (2018-2023)</h4>
            <p className="card-text">
              Encaissement et fidélisation<br />
              Remontée des bugs sur nos outils<br />
              Gestion d’équipe<br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
