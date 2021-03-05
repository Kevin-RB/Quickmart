import React from 'react';
import './Cartproductos.css'

// Componente para mostrar el carrito al lado derecho de la pagina

function Cartproductos({ imgsrc, productName, numproduct, price, totalProductPrice }) {

    return (


        <div className="o-cart-products">
            <div className="o-cart-contain">
            <div className="info-img-name-cont">
                <img className="o-img-product" src={imgsrc} />
                <h5 className="product-style"> {productName}</h5>
            </div>
                <p className="product-style" >{numproduct}</p>
            <h5 className="product-style">{price}</h5>
            <h5 className="product-style">{totalProductPrice}</h5>
            </div>
            <hr className="divider-products"></hr>
        </div>
    )
}

export default Cartproductos;