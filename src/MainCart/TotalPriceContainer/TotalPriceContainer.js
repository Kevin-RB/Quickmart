import React from 'react';
import '../MainCart.css';
import Totalprice from '../Totalprice/Totalprice';

// Componente del los totales del carrito
function TotalPriceContainer(){

    return (
        <div className="o-cart-subtotal">
            <Totalprice text={"Subtotal"} pricetext={"$73.690"}></Totalprice>
            <Totalprice text={"Gastos de envío"} pricetext={"A partir de $4.500"}></Totalprice>
            <hr className="o-divider-style-mm"></hr>
            <Totalprice text={"Total"} pricetext={"$78.190"}></Totalprice>
            <hr className="o-divider-style-mm"></hr>
        </div>
    )
}

export default TotalPriceContainer;