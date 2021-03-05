import React from 'react';
import Header from '../../../Components/CarrouselC/Header/Header';
import '../../../Busqueda/Busqueda.css';
import CarouselC from '../CarrouselC'

// Componente que contiene el carrousel con el titulo del mercado, el logo

function CarrouselContianer(props) {

    return (
        <div className="main-market-container">
            <div className="market-container-busqueda">
                        <Header textHeader={props.textHeader} imgHeader={props.imgHeader}></Header>
                         {/* Contenedor del separador entre el carousel y el título del mercado  */}
                        <div className="centerSolid">
                            <div className="solid"></div>
                        </div>

                        {/* Contenedor del carousel */}
                        <div className="card-container">
                            <CarouselC breakPoints={props.breakPoints}>
                                    {props.children}
                            </CarouselC>
                        </div>
                    </div>
        
    </div>
           
    )
}
export default CarrouselContianer;