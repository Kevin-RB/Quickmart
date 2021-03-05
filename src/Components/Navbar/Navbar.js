import React from 'react';
import Ubicacion from './Ubicacion/Ubicacion';
import MainBuscador from './MainBuscador/MainBuscador';
import Botoniniciarsesion from './Botoniniciarsesion/Botoniniciarsesion';
import Logo from './Logo/Logo';
import './Navbar.css';

// Componente del navbar

function Navbar() {

        return (

        <div className="o-navbar-container">
            <Logo></Logo>
            <Ubicacion></Ubicacion>
            <MainBuscador></MainBuscador>
            <Botoniniciarsesion></Botoniniciarsesion>
        </div>
        
 )}

export default  Navbar;