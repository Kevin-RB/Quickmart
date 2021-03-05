import React, {useState} from 'react';
import './ButtonPlus.css';
import { withRouter } from "react-router";
// Botón general para las cards de agregar productos 

let numpro=0;
function ButtonPlus(props){
 
    return (
        <div>
            <button className="o-btnStyle btnMin " onClick={props.changeTMin}>- </button>
            <button className="o-btnStyle o-btnCenter">{props.btnText}</button>
            <button className="o-btnStyle btnMax" onClick={ props.changeTMax}>+ </button>

        </div>

        
    );
}
export default withRouter(ButtonPlus);