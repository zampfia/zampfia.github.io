import React from 'react';
import 'app/styles/sideMenu.css';
import Link from 'next/link';

const SideMenu = ({ isOpen, onClose }) => {
    return (
        <div className={`side-menu ${isOpen ? 'open' : ''}`}>
            <button className={"close-button"} onClick={onClose}></button>
            <ul>
                <li>
                    <Link className="link" href="/">Home Page<br /></Link>
                </li>
                <li>
                    <Link className="link" href="/about">Chi siamo</Link>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;
