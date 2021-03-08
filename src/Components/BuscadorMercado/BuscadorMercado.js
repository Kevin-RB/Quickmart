import React from 'react';
import MainBuscador from '../Navbar/MainBuscador/MainBuscador';

import './BuscadorMercado.css';
// Componente del buscador que se utiliza para cada mercado independiente con su logo y nombre

function BuscadorMercado({mercadoImg,mercadoText}){

    return (
        <div className="main-container">
            <div className="market-container-super">
                <img className="market-img" src={mercadoImg}></img>
                <h2 className="market-name">{mercadoText}</h2>
                <MainBuscador></MainBuscador>
            </div>
        </div>
    );
}
export default BuscadorMercado;