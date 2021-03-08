import React, {useState} from 'react';
import './Button.css';
import { withRouter } from "react-router";
// import {useState} from 'React';
// Botón general para las cards de agregar productos 

function Button(props){
    const [btnText, setBtnT] = useState("AGREGAR");
    const changeT = (text) => {

        if (btnText=="AGREGAR"){
            setBtnT(text);
        }else{
            setBtnT("AGREGAR");
        }
    }

    // let btnText = props.btnText;
    return (
        <div>
            <button className="btnQuick" onClick={() => changeT("AGREGADO")} >{btnText}</button>

          
        </div>

        
    );
}
export default withRouter(Button);