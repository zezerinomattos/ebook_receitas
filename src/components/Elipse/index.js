import React, {useState} from 'react';

// MY IMPORTS
import styles from './styles.css';

function Elipse({ size, opacity, styles }){

    //OBJETO DE ESTILO
    const circleStyle = {
        width: `${size}px`,
        height: `${size}px`,
        opacity: opacity,
    };
    
    return(
        <div style={circleStyle} className={`circle ${styles}`}></div>
    );
}

export default Elipse;