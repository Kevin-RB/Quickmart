import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Ubicacion.css';


// Componente del input de la ubicación del navbar
function Ubicacion() {

    return (

        <div className="o-main-location">
            <div className="o-location-container">
                <FontAwesomeIcon className="o-icon" icon="map-marker-alt" />
                <input className="o-input-location" type="text" placeholder="Ingresa tu ubicación" /> 
            </div>
        </div>
    )
}

export default Ubicacion;