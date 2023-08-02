import React from 'react';
import './styles/sideMenu.css';
import Link from 'next/link';

const SideMenu = ({ isOpen, onClose }) => {
    return (
        <div className={`side-menu ${isOpen ? 'open' : ''}`}>
            <button className={"close-button"} src="../../public/photos/transparent.gif" onClick={onClose}></button>
            <ul>
                <li>
                    <Link href="/">Home Page</Link>
                </li>
                <li>
                    <Link href="/about">Chi siamo</Link>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;