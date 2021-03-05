import React from 'react';
import './InfoPopCongrats.css';
import img from '../../../assets/img/logo2.png';

// Componente del modal de compra finalizada

function InfoPopCongrats() {

    return (
     <div >
         <div className="o-congrats-container">
            <img className="o-img-cong" src={img} />
         </div>
         <hr className="o-divider-style-cc"></hr>  
         <h4 className="o-title-cong"> ¡Compra Exitosa!</h4> 
         <div className="o-text-cong">
          <p> Tu compra se ha realizado exitosamente </p>
          </div>      
     </div>
    )
  }
  export default InfoPopCongrats;