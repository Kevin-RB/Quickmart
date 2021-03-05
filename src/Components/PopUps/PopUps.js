import React from 'react';
import Check from './Check/Check';
import './PopUps.css';

// Componente del modal de métodos de pago
function PopUps() {

    return (
     <div>
               <h4> Selecciona el método de pago</h4>
               <hr className="o-divider-style-mm"></hr>  
               <div className="o-methods-component">
                <Check text={"Crédito"}></Check>
                <Check text={"Débito"}></Check>
                <Check text={"MasterCard Débito"}></Check>
                <Check text={"Pago contra entrega"}></Check>
               </div>
     </div>
    );
  }
  export default PopUps;
