import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './MainBuscador.css';
import { withRouter } from "react-router";

// Componente del buscador del nav de la página, contiene el input y el boton de buscar
function MainBuscador(props) {

    return (
        <div className="o-main-search">
            <div className="o-buscador-container">
                <input className="o-input-buscador" type="text" placeholder="Busca por producto, marcas o tiendas" />
                <button className="o-button-searchbar" onClick={() => props.history.push("/Busqueda")}>
                <FontAwesomeIcon className="o-icon" icon="search" />
                </button>
            </div>
        </div>
    )
}
export default withRouter(MainBuscador);