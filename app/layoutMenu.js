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
            <nav className="navbar">
                <div className="divbar">
                    <text className="titlebar">Zampfia, S.D.A.Z.</text>
                    <button onClick={handleMenuClick} id={"toggle-button"}></button>
                </div>
            </nav>
            <SideMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
        </div>
    );
};

export default Layout;
