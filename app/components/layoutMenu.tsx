"use client";

import React, { useState } from "react";
import SideMenu from "./sideMenu";
import "../styles/layout.css";

export default function Layout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="sticky top-0">
            <nav className="navbar mb-2">
                <div className="divbar">
                    <text className="titlebar">Zampfia, S.D.A.Z.</text>
                    <button
                        onClick={handleMenuClick}
                        id={"toggle-button"}
                    ></button>
                </div>
            </nav>
            <SideMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
        </div>
    );
}
