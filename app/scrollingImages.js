"use client";

import React, { useRef, useEffect } from 'react';
import styles from './styles/scrollingImages.module.css';

const ScrollingImages = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const container = containerRef.current;
      container.scrollLeft += e.deltaY;
    };

    const container = containerRef.current;
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.images}>
        <img src="/photos/zampa4.jpg" alt="Zampa 4" />
        <img src="/photos/zampa5.jpg" alt="Zampa 5" />
        <img src="/photos/zampa6.jpg" alt="Zampa 6" />
        <img src="/photos/zampa7.jpg" alt="Zampa 7" />
        <img src="/photos/zampa8.jpg" alt="Zampa 8" />
        <img src="/photos/zampa9.jpg" alt="Zampa 9" />
        <img src="/photos/zampa10.jpg" alt="Zampa 10" />
      </div>
    </div>
  );
};

export default ScrollingImages;