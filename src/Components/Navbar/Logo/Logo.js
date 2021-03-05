import React from 'react';
import { withRouter } from "react-router";
import img from '../../../assets/img/logo2.png';
import '../Logo/Logo.css';


// Componente del logo de QuickMart
function Logo(props) {

    return (
        <div className="o-logo-container" >
            <button className="o-logo-styles" onClick={() => props.history.push("/")}>
                <img className="o-img-logo" src={img}  alt="ss"/>
            </button>
        </div>
    )
}

export default  withRouter(Logo);