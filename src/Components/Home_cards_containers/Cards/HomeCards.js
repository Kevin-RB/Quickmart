import React from 'react';
import Image from 'react-bootstrap/Image'
import './Cards.css';

// Componente de las cards de Home que manda props de la imagen y el título
function HomeCards(props) {
    return (
        <div className="Card">
            <div className="card-img">
                <a href="/Supermercado">
                    <Image alt="Home-Card-Img" src={props.src} fluid />
                </a>
            </div>
            <div className="card-title">
                <a href="/Supermercado">
                    <h5>{props.title}</h5>
                </a>
            </div>
        </div>
    );
}

export default HomeCards;