import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { FaUser, FaEnvelope, FaRegComment } from 'react-icons/fa';
import NavBar from './NavBar';
import Footer from './Footer';
import './Css/Contact.css';
import SideBar from './SideBar';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const Contact = () => {
    const [formState, setFormState] = useState({
        nom: '',
        email: '',
        message: '',
        consent: false,
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormState({
            ...formState,
            [e.target.name]: value,
        });
        setErrors({
            ...errors,
            [e.target.name]: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        const newErrors = {};

        if (!formState.nom) {
            valid = false;
            newErrors.nom = 'Le nom est requis';
        }
        if (!formState.email) {
            valid = false;
            newErrors.email = 'L\'email est requis';
        } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
            valid = false;
            newErrors.email = 'L\'email est invalide';
        }
        if (!formState.message) {
            valid = false;
            newErrors.message = 'Le message est requis';
        }
        if (!formState.consent) {
            valid = false;
            newErrors.consent = 'Le consentement est requis';
        }

        setErrors(newErrors);

        if (valid) {
            emailjs.sendForm('service_8yevxnu', 'template_a73ou8c', e.target, '5NKawOiWMk4JWxMJN')
                .then((result) => {
                    console.log(result.text);
                    setSubmitted(true);
                }, (error) => {
                    console.log(error.text);
                    alert("Une erreur est survenue. Veuillez réessayer plus tard.");
                });
            e.target.reset();
            setFormState({ nom: '', email: '', message: '', consent: false });
        }
    };

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
        <div className="contact-page">
            <NavBar />
            <SideBar />
            <Container className="d-flex justify-content-center align-items-center min-vh-100">
                <Row className="w-100">
                    <Col md={8} lg={6} className="mx-auto">
                        <div className="contact-form p-5 rounded shadow">
                        <h2 className="mb-4 text-center">Prêt à travailler ensemble ?</h2>
                            <h4>Contactez Moi</h4>
                            {submitted && <Alert variant="success">Message envoyé avec succès!</Alert>}
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group controlId="formNom">
                                    <Form.Label><FaUser /> Nom</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="nom"
                                        value={formState.nom}
                                        onChange={handleChange}
                                        isInvalid={!!errors.nom}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.nom}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="formEmail">
                                    <Form.Label><FaEnvelope /> Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="formMessage">
                                    <Form.Label><FaRegComment /> Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        rows={5}
                                        isInvalid={!!errors.message}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
<br></br>
                                <Form.Group controlId="formConsent">
                                    <Form.Check 
                                        type="checkbox"
                                        name="consent"
                                        label="J'accepte que mes données personnelles soient utilisées pour répondre à ma demande."
                                        checked={formState.consent}
                                        onChange={handleChange}
                                        isInvalid={!!errors.consent}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.consent}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100 mt-3">
                                    Envoyer
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Contact;
