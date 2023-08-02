import React from 'react';

export default function ElementLoop({ count }){
    const elements = [];
    
    // JavaScript loop to generate HTML elements
    for (let i = 0; i < count; i++) {
        elements.push(<div key={i}><h1 id="empty"></h1></div>);
    }
    
    return <>{elements}</>;
};
