import React from 'react';
import './Css/MonCv.css';
import NavBar from './NavBar';
import SideBar from './SideBar';
import cvImage from './images/cv.png'; 

function MonCv() {
  return (
    <div className="cvv-container">
      <NavBar />
      <SideBar />
      <div className="cvv-content">
        <img src={cvImage} alt="Mon CV" className="cv-image" />
        <a href="/cv.pdf" download="Mon-CV" className="download-button">
          Télécharger mon CV
        </a>
      </div>
    </div>
  );
}

export default MonCv;
