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
            <button onClick={handleMenuClick} id={"toggle-button"} src="../../public/photos/transparent.gif"></button>
            <SideMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
        </div>
    );
};

export default Layout;
