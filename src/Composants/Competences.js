import React, { useEffect } from 'react';
import './Css/Competences.css';
import { FaReact, FaHtml5, FaCss3, FaJs, FaFigma, FaDocker, FaGithub, FaJira, FaSymfony } from 'react-icons/fa';
import { SiPostman, SiPhpmyadmin } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";

const Competences = () => {

  useEffect(() => {
    const sections = document.querySelectorAll('.cv-section, .cv-skills li');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="competences-container">
      <section className="cv-section">
        <h2>Compétences Back</h2>
        <ul className="cv-skills">
          <li><FaSymfony /> Symfony </li>
          <li><BsFiletypeSql /> SQL | <SiPhpmyadmin /> PhpMyAdmin </li>
          <li>API </li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>Compétences Front</h2>
        <ul className="cv-skills">
          <li><FaJs /> JavaScript</li>
          <li><FaHtml5 /> HTML</li>
          <li><FaCss3 /> CSS</li>
          <li><FaReact /> React</li>
          <li><FaFigma /> Figma</li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>Outils de développement</h2>
        <ul className="cv-skills">
          <li><FaGithub /> Git</li>
          <li><FaDocker /> Docker</li>
          <li><SiPostman /> Postman</li> 
        </ul>
        <br />
        <h2>Outils de gestion de projet</h2>
        <ul className="cv-skills">
          <li><FaJira /> Jira</li>
        </ul>
      </section>
    </div>
  );
};

export default Competences;
