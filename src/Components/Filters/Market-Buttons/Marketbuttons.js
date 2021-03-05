import React from 'react';
import Image from 'react-bootstrap/Image'
import './Marketbuttons.css';

// Componente del botón de los supermercados del filtro

function Marketbuttons({ iconmarket, text }) {

    return (
        <div className="o-market-button-container">
            <button className="o-market-button">
                <Image className="o-icon-market" src={iconmarket}/>
                {text}
            </button>
        </div>
    )
}
export default Marketbuttons;