import React, { useState } from 'react';
import SocialLink from './SocialLink';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/SideBar.css';

const SideBar = () => {
    const [isVisible] = useState(false);

    return (
        <>
            <div className={`sidebar ${isVisible ? 'visible' : ''}`}>
                <SocialLink />
            </div>
        </>
    );
};

export default SideBar;
