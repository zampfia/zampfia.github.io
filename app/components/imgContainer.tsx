"use client";

import React, { useState, useEffect } from "react";
import "../styles/page.css";

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

const ImageContainer = () => {
    const [clickCount, setClickCount] = useState(0);
    const [randomImage, setRandomImage] = useState(null);
    const [zampaCount, setZampaCount] = useState(0);

    useEffect(() => {
        if (clickCount === 30) {
            alert(
                "HAI VINTO UN ZAMPA!\nTI VERRA' SPEDITO A CASA TRA 2/3 GIORNI LAVORATIVI!",
            );
            setClickCount(0);
            setZampaCount(zampaCount + 1);
        }
    }, [clickCount]);

    const handleClick = () => {
        setClickCount((prevCount) => prevCount + 1);
        setRandomImage(getRandomImage());
    };

    return (
        <div>
            <button
                className="rounded-full bg-sky-500 px-5 py-2 text-lg font-normal leading-5 text-white hover:bg-sky-700"
                onClick={handleClick}
            >
                Cliccami
            </button>
            <p className="my-2 text-2xl">Hai cliccato {clickCount} volte!</p>
            <p className="my-1 text-2xl">
                Ti mancano {30 - clickCount} click per il premio!
            </p>
            <p className="my-2 mb-4 text-2xl">Hai vinto {zampaCount} Zampa</p>
            {randomImage && (
                <img className="image" src={randomImage} alt="Random Image" />
            )}
        </div>
    );
};

export default ImageContainer;
