import React, {useState} from 'react';
import './Button.css';
import { withRouter } from "react-router";

function Button(){
    const [btnText, setBtnT] = useState("AGREGAR");
    const changeT = (text) => {

        if (btnText==="AGREGAR"){
            setBtnT(text);
        }else{
            setBtnT("AGREGAR");
        }
    }
    return (
        <div>
            <button className="btnQuick" onClick={() => changeT("AGREGADO")} >{btnText}</button>

          
        </div>

        
    );
}
export default withRouter(Button);