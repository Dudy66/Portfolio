import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/Projet.css';
import Footer from './Footer';
import SideBar from './SideBar';
import NavBar from './NavBar';
import PizzaApp1 from './images/PizzaApp1.png';
import BlogImage1 from './images/BlogImage1.png';
import IOSImage1 from './images/IOSImage1.png';
import AggloImage3 from './images/AggloImage3.png';

const Projet = () => {

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    cards.forEach(card => {
      observer.observe(card);
    });

    return () => {
      cards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="accueil-container">
      <NavBar />
      <SideBar />
      <div className="container my-4">
        <div className="row justify-content-center">
          {/* Pizza App Card */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex">
            <div className="card pizzaapp-card bg-dark text-white h-100">
              <img src={PizzaApp1} className="card-img-top-1" alt="Pizza App" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">PIZZA APP</h5>
                <br />
                <p className="card-text">Application mobile de type exercice</p>
                <div className="card-technologies mt-auto">
                  <h6>Technologies utilisées</h6>
                  <ul className="list-inline">
                    <li className="list-inline-item badge bg-primary">Flutter</li>
                    <li className="list-inline-item badge bg-primary">Dart</li>
                    <li className="list-inline-item badge bg-primary">Firebase</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* IOS Card */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex">
            <div className="card iosapp-card bg-dark text-white h-100">
              <img src={IOSImage1} className="card-img-top" alt="IOS App" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">IOS APP</h5>
                <br />
                <p className="card-text">Application mobile iOS de type exercice</p>
                <div className="card-technologies mt-auto">
                  <h6>Technologies utilisées</h6>
                  <ul className="list-inline">
                    <li className="list-inline-item badge bg-primary">Swift</li>
                    <li className="list-inline-item badge bg-primary">Xcode</li>
                    <li className="list-inline-item badge bg-primary">Firebase</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex flex-column justify-content-between">
            {/* Blog Card */}
            <div className="card bg-dark text-white mb-4 h-100">
              <img src={BlogImage1} className="card-img-top" alt="Blog" />
              <br />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">BLOG</h5>
                <br />
                <p className="card-text">Reproduction d'un blog de type exercice pratique</p>
                <div className="card-technologies mt-auto">
                <br />
                  <h6>Technologies utilisées</h6>
                  <ul className="list-inline">
                    <li className="list-inline-item badge bg-primary">HTML</li>
                    <li className="list-inline-item badge bg-primary">CSS</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* AGGLO Card */}
            <div className="card bg-dark text-white h-50">
              <img src={AggloImage3} className="card-img-top" alt="AGGLO" />
              <br />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">AGGLO</h5>
                <br />
                <p className="card-text">Projet interne à la formation pour l'agglomération de Montpellier</p>
                <div className="card-technologies mt-auto">
                  <br />
                  <h6>Technologies utilisées</h6>
                  <ul className="list-inline">
                    <li className="list-inline-item badge bg-primary">Symfony</li>
                    <li className="list-inline-item badge bg-primary">MySQL</li>
                    <li className="list-inline-item badge bg-primary">Bootstrap</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projet;
