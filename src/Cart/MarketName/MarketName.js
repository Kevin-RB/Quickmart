import React from 'react';
import './MarketName.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Componente del logo y el supermercado que aparecen en la página del carrito
function MarketName({ imgsrc, Marketname}) {

    return (
        <div className="o-cart-name">
            <div className="o-info-container-name">
                {/* Contenedor del logo del mercado y el nombre */}
                <img className="o-img-cart" src={imgsrc} />
                <h2 className="o-name-cart">
                    {Marketname}
                </h2>
            </div>
            {/* Botón de esconder o mostrar los mercados*/}
            <button className="o-drop-button">
                <FontAwesomeIcon className="o-icon-cart" icon="sort-down" />
            </button>
        </div>
    )
}
export default MarketName;