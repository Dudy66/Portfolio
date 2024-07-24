import React from 'react';
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import './Css/SocialLink.css';

const SocialLink = () => {
    return (
        <div className="social-links">
            <a href="https://github.com/Dudy66">
                <img className="git" src={github} alt='Github' />
            </a>
            <a href="https://www.linkedin.com/in/rudyrolland/">
                <img className="linkedin" src={linkedin} alt="LinkedIn" />
            </a>
        </div>
    );
};

export default SocialLink;
