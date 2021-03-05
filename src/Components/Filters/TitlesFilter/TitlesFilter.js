import React from 'react';
import '../Filters.css';

// Componente de los titulos y el input del filtro
function TitlesFilter() {

    return (
        <div className="o-main-info-filter">
            <h4 className="o-main-title"> Producto encontrado en: </h4>
            <h5 className="o-main-title"> Filtrar por: </h5>
            <h5 className="market-name-filter">  Nombre del mercado:</h5>
            <input className="o-input-Name-Market" type="text" placeholder="Ingresa el nombre" />
    </div>
    )
}
export default TitlesFilter;