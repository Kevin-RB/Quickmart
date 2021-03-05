import React from 'react';
import MarketName from '../MarketName/MarketName'
import img from '../assets/img/bochalema.jpg';
import img2 from '../assets/img/poker.jpg';
import './Cart.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartProductos from '../Cartproducts/Cartproductos';

// Componente del carrito que aparece en el lado derecho como popup
function Cart() {

    return (
        <div className="o-main-cart-container">
            <div className="o-cart-container">
                <div className="o-cart-name-main">
                    <h4 className="o-carrito-style">
                        Tu carrito
                    </h4>
                    <button className="o-cart-close-button">
                        <FontAwesomeIcon className="o-icon-cart" icon="times-circle" />
                    </button>
                </div>
                <div className="o-market-name">
                    <MarketName imgsrc={img} Marketname={"Supermercado Bochalema"}></MarketName>
                </div>
                <hr className="o-divider-style"></hr>
                <div className="o-cart-products-cart">
                    <div className="o-title-name-cart">
                        <h5 className="o-tile-name"> Producto </h5>
                        <h5 className="o-tile-name"> Cantidad </h5>
                        <h5 className="o-tile-name"> Precio </h5>
                        <h5 className="o-tile-name"> Total </h5>
                    </div>

                    <CartProductos imgsrc={img2} productName={"Cerveza Poker"} numproduct={"4"} price={"2,500"} totalProductPrice={"12,500"}></CartProductos>
                    <CartProductos imgsrc={img2} productName={"Cerveza Poker"} numproduct={"5"} price={"2,500"} totalProductPrice={"12,500"}></CartProductos>
                    <CartProductos imgsrc={img2} productName={"Mangos"} numproduct={"4"} price={"2,500"} totalProductPrice={"12,500"}></CartProductos>

                </div>
            </div>
        </div>







    )
}

export default Cart;