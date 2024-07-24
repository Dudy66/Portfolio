import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Css/footer.css'; 

const Footer = () => {
    return (
        <footer className="footer-container bg-dark text-white py-2 text-center">
            <p className="mb-0">
                © 2024 Rudy Rolland | Développeur Web FullStack | Montpellier, France | Site réalisé en React
            </p>
        </footer>
    );
}

export default Footer;