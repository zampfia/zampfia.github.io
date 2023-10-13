import React from "react";
import "@/styles/sideMenu.css";
import Link from "next/link";

const SideMenu = ({ isOpen, onClose }) => {
    return (
        <div>
            <div>
                <button
                    className={`close-panel ${isOpen ? "open" : ""}`}
                    onClick={onClose}
                ></button>
            </div>
            <div className={`side-menu ${isOpen ? "open" : ""}`}>
                <button
                    className="close-button mb-2"
                    onClick={onClose}
                ></button>
                <ul>
                    <li className="pl-5">
                        <Link href="/">Home Page</Link>
                    </li>
                    <li className="pl-5">
                        <Link href="/about">Chi siamo</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideMenu;
