"use client";

import React, { useState } from 'react';
import SideMenu from './sideMenu';
import "./styles/layout.css";

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div>
            <nav>
                <div className="divbar">
                    <h1>Zampfia, S.D.A.Z.</h1>
                    <button onClick={handleMenuClick} id={"toggle-button"}></button>
                </div>
            </nav>
            <SideMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
        </div>
    );
};

export default Layout;
