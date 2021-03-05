import React from 'react';
import '../MainCart.css';


// Componente del los títulos del carrito
function TitleCart(){

    return (
        <div className="o-title-name-cart-mm">
            <h5 className="o-tile-name-mm"> Producto </h5>
            <h5 className="o-tile-name-mm"> Cantidad </h5>
            <h5 className="o-tile-name-mm"> Precio </h5>
            <h5 className="o-tile-name-mm"> Total </h5>
        </div>
    )
}

export default TitleCart;