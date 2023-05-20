"use client";

import React, { useState, useEffect } from 'react';
import styles from './styles/page.module.css';

const getRandomImage = () => {
  const images = [
    '/photos/zampa1.png',
    '/photos/zampa2.png',
    '/photos/zampa3.png',
    // Add more image URLs as needed
  ];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
  };

  const ImageContainer = () => {
    const [clickCount, setClickCount] = useState(0);
    const [randomImage, setRandomImage] = useState(null);

    useEffect(() => {
      if (clickCount === 30) {
      alert('HAI VINTO UN ZAMPA!\nTI VERRA\' SPEDITO A CASA TRA 2/3 GIORNI LAVORATIVI!');
      setClickCount(0);
      }
  }, [clickCount]);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
    setRandomImage(getRandomImage());
    console.log(randomImage);
  };

  return (
    <div>
      <button onClick={handleClick}>Cliccami</button>
      <p className={styles.label}>Hai cliccato {clickCount} volte!</p>
      <p className={styles.label}>Ti mancano {30 - clickCount} click per il premio!</p>
      {randomImage && <img src={randomImage} alt="Random Image" />}
    </div>
  );
};

export default ImageContainer;
