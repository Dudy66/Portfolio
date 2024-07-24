import React, { useEffect } from 'react';
import './Css/Cv.css';
import NavBar from './NavBar';
import Competences from './Competences';
import Footer from './Footer';
import SideBar from './SideBar';

function Cv() {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'auto'; 
    };
  }, []);

  return (
    <div className="cv-container">
      <NavBar />
      <SideBar />
      <div className="cv-content">
        <Competences />
      </div>
      <Footer />
    </div>
  );
}

export default Cv;
