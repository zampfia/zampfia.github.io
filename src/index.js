import React, { useState } from 'react';

const getRandomImage = () => {
    const images = [
        'photos/zampa1.png',
        'photos/zampa2.png',
        'photos/zampa3.png',
        // Add more image URLs as needed
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
};

const HomePage = () => {
    const [clickCount, setClickCount] = useState(0);
    const [randomImage, setRandomImage] = useState(null);

    const handleClick = () => {
        setClickCount(prevCount => prevCount + 1);

        if (clickCount === 29) {
            alert('Congratulations! You clicked 30 times!');
        }

        setRandomImage(getRandomImage());
    };

    return (
        <div>
            <h1>Random Image App</h1>
            <button onClick={handleClick}>Click Me</button>
            {randomImage && <img src={randomImage} alt="Random Image" />}
        </div>
    );
};

export default HomePage;
