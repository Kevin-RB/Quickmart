import React from 'react';
import './Totalprice.css';

// Componente de los totales de los precios del carrito

function Totalprice({text, pricetext}) {

    return (
        <div className="o-info-price-container" >
         <h4 className="o-subtotal"> {text}</h4>
         <p className="o-sec-text">{pricetext}</p>
        </div>
    )
}
export default Totalprice;