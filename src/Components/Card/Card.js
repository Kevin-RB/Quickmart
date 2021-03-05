import React, {useState} from 'react';
import Button from '../Button/Button';
import ButtonPlus from '../ButtonPlus/ButtonPlus';

import './Card.css';
// Componente de las cards de los productos con imagen del producto, titulo, descrpción y marca
function Card({ imagePick, titleText, messageText, marcaText }) {
    
// Funciones para poder aumentar y disminuir la cantidad de productos desde el botón
    const [btnText, setBtnT] = useState(0);
    const changeTMin = () => {

        if (btnText >0){
            setBtnT(btnText-1);
        }else{
            setBtnT(0);
        }
    }

  const changeTMax = () => {
            setBtnT(btnText+1);
    }

    return (

        <div className="o-card">
            <div className="o-imgCard-container">
                <img className="o-imgCard" src={imagePick} />
            </div>
            <h2 className="o-title">{titleText}</h2>
            <p className="o-message">{messageText}</p>
            <br></br>
            <p className="o-marca">{marcaText}</p>
            <div className="o-btn-agregar">
                <ButtonPlus btnText={btnText} changeTMin={changeTMin}changeTMax={changeTMax} />
            </div>
        </div>
    );
}

export default Card;