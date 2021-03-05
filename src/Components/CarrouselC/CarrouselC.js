import React from 'react';
import Carousel from 'react-elastic-carousel';

// Componente que contiene el carousel de las cards

function CarrouselC(props) {
    return (
                <Carousel breakPoints={props.breakPoints}>
                    {props.children}
                </Carousel> 
    )
}
export default CarrouselC;