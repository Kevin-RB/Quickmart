import React from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap';
import '../SubNavbar/SubNav.css';
import { withRouter } from "react-router";

// Componente del SubNavbar

function SubNavbar(props) {

    return (

        <div>
            <Navbar collapseOnSelect id="subBar" expand="lg" className="navColor" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsibe-navbar-nav">
                    <NavDropdown title="Lacteos" id="">
                        <NavDropdown.Item onClick={() => props.history.push("/Lacteos")} >Leche</NavDropdown.Item>
                        <NavDropdown.Item>Queso</NavDropdown.Item>
                        <NavDropdown.Item>Huevos</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Congelados" id="">
                        <NavDropdown.Item>Helados</NavDropdown.Item>
                        <NavDropdown.Item>Comida precocida</NavDropdown.Item>
                        <NavDropdown.Item>Hielo</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Frutas y verduras" id="">
                        <NavDropdown.Item>Frutas</NavDropdown.Item>
                        <NavDropdown.Item>Verduras</NavDropdown.Item>
                        <NavDropdown.Item>Hierbas</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Despensa" id="">
                        <NavDropdown.Item>Arroz</NavDropdown.Item>
                        <NavDropdown.Item>Aceite</NavDropdown.Item>
                        <NavDropdown.Item>Azúcar</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Licores" id="">
                        <NavDropdown.Item>Cerveza</NavDropdown.Item>
                        <NavDropdown.Item>Whisky</NavDropdown.Item>
                        <NavDropdown.Item>Vinos</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Aseo del hogar" id="">
                        <NavDropdown.Item>Ambientadores</NavDropdown.Item>
                        <NavDropdown.Item>Cuidado de baño</NavDropdown.Item>
                        <NavDropdown.Item>Cuidado de ropa</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Cuidado personal" id="">
                        <NavDropdown.Item>Corta uñas</NavDropdown.Item>
                        <NavDropdown.Item>Desodorante</NavDropdown.Item>
                        <NavDropdown.Item>Shampoo</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Carnes" id="">
                        <NavDropdown.Item>Res</NavDropdown.Item>
                        <NavDropdown.Item>Cerdo</NavDropdown.Item>
                        <NavDropdown.Item>Otros</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Bebidas y snacks" id="">
                    <NavDropdown.Item>Chocolate</NavDropdown.Item>
                    <NavDropdown.Item>Pasabocas</NavDropdown.Item>
                    <NavDropdown.Item>Bebidas</NavDropdown.Item>
                </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
        </div>

)}
export default  withRouter(SubNavbar);