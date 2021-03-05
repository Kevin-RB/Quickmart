import React from 'react';
import { Dropdown } from 'react-bootstrap';
import '../Supermercado.css';

// Componente del dropdown de busqueda por secciones de los mercados
function DropDownSuperM(){

    return (
            <div className="seccion-container">
                <h5>Ir a la sección de:</h5>
                <Dropdown className="drop-c">
                    <Dropdown.Toggle>
                        Escoge sección
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Lácteos</Dropdown.Item>
                        <Dropdown.Item>Congelados</Dropdown.Item>
                        <Dropdown.Item>Frutas y verduras</Dropdown.Item>
                        <Dropdown.Item>Despensa</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
    )
}

export default DropDownSuperM;