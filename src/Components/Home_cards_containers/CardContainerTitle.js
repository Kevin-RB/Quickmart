import  React from 'react';
import './HomeCardContainer.css';

// Componente del titulo de las cards de la página de home

function CardTitle(props){
    return(
        <div className="CardContainerTitle">
            <h2>{props.sectionTitle}</h2>
        </div>
    )
}
export default  CardTitle;