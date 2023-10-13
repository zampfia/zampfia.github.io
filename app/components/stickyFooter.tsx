"use client";

import { useState } from "react";
import Link from "next/link";
import "@/styles/footer.css";
import "@/styles/layout.css";
import ContactForm from "./forms/contactForm";

const StickyFooter = () => {
    const [showFrame, setShowFrame] = useState(false);

    const openFrame = () => {
        setShowFrame(true);
    };

    const closeFrame = () => {
        setShowFrame(false);
    };

    return (
        <div>
            {showFrame && <ContactForm close={closeFrame} />}
            <footer>
                <Link className="link" href="/zampacy">
                    Zampacy Policy
                </Link>
                <Link className="link" href="/privacy">
                    Privacy Policy
                </Link>
                <button className="link" onClick={openFrame}>
                    Contattaci
                </button>
            </footer>
        </div>
    );
};

export default StickyFooter;
