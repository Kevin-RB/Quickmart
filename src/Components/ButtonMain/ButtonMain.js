import React from 'react';
import './ButtonMain.css';

// Componente del botón main para acciones de la página
function ButtonMain({children, type, onClick}) {

    return (
        <div className="o-main-button-container">
            <button className="button-main" onClick={onClick} type={type} >{children} {}</button>
        </div>
    )
}
export default ButtonMain;