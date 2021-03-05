import React from 'react';
import './Maincartproducts.css'

// Componente de los productos que se muestran en la página del carrito, manda la imagen del producto, el nombre, la cantidad, el precio y el total de los precios

function Maincartproducts({ imgsrc, productName, numproduct, price, totalProductPrice }) {

    return (
        <div className="o-cart-products-mm">
            <div className="o-cart-contain-mm">  
                <div className="info-img-name-cont-mm">
                    <img className="o-img-product-mm" src={imgsrc} />
                    <h5 className="product-style-mm"> {productName}</h5>
                </div>
                    <p className="product-style-mm" >{numproduct}</p>
                <h5 className="product-style-mm">{price}</h5>
                <h5 className="product-style-mm">{totalProductPrice}</h5>
            </div>
            <hr className="divider-products-mm"></hr>
        </div>
    )
}

export default Maincartproducts;