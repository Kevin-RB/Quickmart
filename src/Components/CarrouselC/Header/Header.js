import React from 'react';

// Componente que permite visualizar el Logo, el nombre del mercado y el "ver más" dentro del componente de carousel

function Header({imgHeader, textHeader}) {

    return (

        <div>
            <div className="top">
                <div className="top-content">
                    <div className="topL-content">
                        <img className="img-market" src={imgHeader} />
                        <h2 className="T-title">{textHeader}</h2>
                    </div>
                    <div className="topR-content">
                        <a className="p-ver" href="/Supermercado">Ver más</a>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Header;