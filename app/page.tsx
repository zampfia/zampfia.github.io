"use client";

import dynamic from 'next/dynamic';
import "./styles/page.css";
import ScrollingImages from './scrollingImages';
import Layout from './layoutMenu';
import { useState } from "react";

const ImageContainer = dynamic(() => import('./imgContainer'), {
    ssr: false,
});

export const metadata = {
    title: "Zampa è bravo",
};

export default function HomePage() {
    const [isUnicStyle, setIsUnicStyle] = useState();

    const handleStyleClick = () => {
        setIsUnicStyle(!isUnicStyle);
    };

	return (
        <div>
            <Layout>
            </Layout>
            <div className="margin">
                <h1 className="title">ZAMPA E' IL PIU' GRANDE</h1>
                <ImageContainer />
                <ScrollingImages />
                <button onClick={handleStyleClick}>Attiva lo stile <i>unico</i></button>
                <text>{isUnicStyle ? "Unic" : ""}</text>
            </div>
        </div>
    );
};

