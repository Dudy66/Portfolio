import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Css/Homepage.css';
import NavBar from './NavBar';
import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar'; 
import Moi from './images/Moi.JPG';

const Accueil = () => {

    return (
        <div id="home-page" className="accueil-container-home">
            <NavBar />
            <Header />
            <SideBar />
            <section id="profil" className="accueil-section container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-12 accueil-content">
                        <div className="d-flex flex-column align-items-center">
                            <img src={Moi} alt="Moi" className="rounded-circle mb-3" />
                            <p className="text-center">
                            En quête d’une opportunité d’alternance pour la rentrée 2024.
                            Je suis un passionné du développement web avec une affinité spéciale pour le framework Symfony.<br /><br />
                                Je suis prêt à mettre en pratique mes compétences et à contribuer à des projets innovants. Enthousiaste à l’idée de m’intégrer dans une entreprise dynamique, je suis à la recherche d'une alternance qui me permettra de booster mes compétences en développement web tout en me permettant de m'épanouir. De plus, j’ai une curiosité croissante pour le domaine de la cybersécurité.<br /><br />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Accueil;
