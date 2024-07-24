import React from 'react';
import './Css/Header.css'; 
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <section className="cv-header">
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <div className="header-container">
            <h1 className="rotate-animation">Rudy Rolland</h1>
            <div className="header-container-1">
              <p className="fade-in">Développeur Web Full Stack</p>
              <p className="fade-in titre-pro">Titre professionnel de niveau 5</p>
              <p className="fade-in">Montpellier</p>
            </div>
            </div>
            <div className="phone-email">
              <span className="contact-item fade-in">
                <FaEnvelope /> <a href="mailto:rudy.rolland34@gmail.com">rudy.rolland34@gmail.com</a>
              </span>
              <span className="contact-item fade-in">
                <FaPhone /> <a href="tel:0633130658">06 33 13 06 58</a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
