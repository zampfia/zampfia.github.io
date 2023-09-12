import React from "react";
import "../styles/sideMenu.css";
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
                <button className={"close-button"} onClick={onClose}></button>
                <ul>
                    <li>
                        <Link className="link" href="/">
                            Home Page
                            <br />
                        </Link>
                    </li>
                    <li>
                        <Link className="link" href="/about">
                            Chi siamo
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideMenu;
