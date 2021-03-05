import  React from 'react';
import CardTitle from './CardContainerTitle';
import './HomeCardContainer.css';

// Componente que contiene el título y las cards de la pagina Home

function HomeCardSection(props){
    return(
        <div className="Home-Card-Section-Container">
            <CardTitle sectionTitle={props.sectionTitle}></CardTitle>
            <div className="Cards-container">
                {props.children}
            </div>
        </div>
    );
}
export default  HomeCardSection;