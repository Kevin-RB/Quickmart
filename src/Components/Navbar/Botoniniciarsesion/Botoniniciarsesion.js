import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";
import './Botoniniciarsesion.css';

// Componente del botón de iniciar sesión e ir al carrito

function Botoniniciarsesion(props) {

    return (
        <div className="o-last-container">

            {/* Botón del carrito del navbar */}
            <button className="o-cart" onClick={() => props.history.push("/MainCart")} >
                <FontAwesomeIcon className="o-icon1" icon="shopping-cart" />

            </button>
            {/* Botón de iniciar sesión del navbar */}
            <button className="o-button-login" onClick={() => props.history.push("/Login")} >
                <FontAwesomeIcon className="o-icon" icon="user-circle" />
                <p className="o-text-button">
                    Iniciar Sesión
                   </p>
            </button>
        </div>
    )
}

export default withRouter(Botoniniciarsesion);