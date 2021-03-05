import React from 'react';
import './Pricebutton.css';

// Componente para los botones de los filtros de precios

function Pricebutton({ pricetext }) {

    return (

        <div className="o-price-button-container">
            <button className="o-price-button">
                {pricetext}
            </button>
        </div>

    )
}

export default Pricebutton;