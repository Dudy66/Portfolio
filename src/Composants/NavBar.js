import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/navbar.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top bg-dark ${isOpen ? 'menu-open' : ''} ${scroll ? 'navbar-scroll' : ''}`}>
            <div className="container">
                {/* Menu Hamburger (Visible uniquement sur mobile) */}
                <button 
                    className={`navbar-toggler ${isOpen ? 'menu-open' : ''}`}
                    type="button" 
                    onClick={toggleNav}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
                
                {/* Menu Principal */}
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarMenu">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <RouterLink to="/" className="nav-link" onClick={toggleNav}>
                                ACCUEIL
                            </RouterLink>
                        </li>
                        <li className="nav-item">
                            <RouterLink to="/about" className="nav-link" onClick={toggleNav}>
                                COMPÉTENCES
                            </RouterLink>
                        </li>
                        <li className="nav-item">
                            <RouterLink to="/projet" className="nav-link" onClick={toggleNav}>
                                PROJETS
                            </RouterLink>
                        </li>
                        <li className="nav-item">
                            <RouterLink to="/contact" className="nav-link" onClick={toggleNav}>
                                CONTACT
                            </RouterLink>
                        </li>
                        <li className="nav-item">
                            <RouterLink to="/MonCv" className="nav-link" onClick={toggleNav}>
                                CV
                            </RouterLink>
                        </li>
                        <div className="d-lg-none">
                            <li className="nav-item">
                                <a href="https://www.linkedin.com/in/rudyrolland/" className="nav-link" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin /> LinkedIn
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://github.com/Dudy66" className="nav-link" target="_blank" rel="noopener noreferrer">
                                    <FaGithub /> GitHub
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
