"use client";

import React, { useState, useEffect } from "react";
import "@/styles/page.css";
import ZampaForm from "@/components/forms/zampaForm";

const getRandomImage = () => {
    const images = [
        "/photos/zampa1.png",
        "/photos/zampa2.png",
        "/photos/zampa3.png",
        // Add more image URLs as needed
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
};

export var showingFrame;

const ImageContainer = () => {
    const [clickCount, setClickCount] = useState(0);
    const [randomImage, setRandomImage] = useState(null);
    const [zampaCount, setZampaCount] = useState(0);
    const [showFrame, setShowFrame] = useState(false);

    useEffect(() => {
        if (clickCount === 30) {
            setShowFrame(true);
            showingFrame = true;
            setClickCount(0);
            setZampaCount(zampaCount + 1);
            setRandomImage(null);
        }
    }, [clickCount]);

    const handleClick = () => {
        setClickCount((prevCount) => prevCount + 1);
        setRandomImage(getRandomImage());
    };

    const handleClose = () => {
        setShowFrame(false);
        showingFrame = true;
    };

    return (
        <div>
            {showFrame && <ZampaForm close={handleClose} />}
            <div className="margin">
                <button
                    className="rounded-full bg-sky-500 px-5 py-2 text-lg font-normal leading-5 text-white hover:bg-sky-700"
                    onClick={handleClick}
                >
                    Cliccami
                </button>
                <p className="my-2 text-2xl">
                    Hai cliccato {clickCount} volte!
                </p>
                <p className="my-1 text-2xl">
                    Ti mancano {30 - clickCount} click per il premio!
                </p>
                <p className="my-2 mb-4 text-2xl">
                    Hai vinto {zampaCount} Zampa
                </p>
                {randomImage && (
                    <img
                        className="image"
                        src={randomImage}
                        alt="Random Image"
                    />
                )}
            </div>
        </div>
    );
};

export default ImageContainer;
