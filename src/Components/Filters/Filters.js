import React from 'react';
import './Filters.css';
import Marketbuttons from '../Filters/Market-Buttons/Marketbuttons';
import Pricebuttons from '../Filters/Price-buttons/Pricebutton';
import TitlesFilter from './TitlesFilter/TitlesFilter';
import {db} from '../../util/firebase';

// Componente del filtro de bsuqueda

class Filters extends React.Component {


    state = {
        filtro: null
    }

    cargaFiltros(){
        db.collection('filtros')
          .get()
          .then( snapshot => {
              const filtro = []
              snapshot.forEach( doc =>{
                  const datos = doc.data();
                  let id = doc.id;
                  const data = {datos,id}
                  filtro.push(data)
              })
              this.setState({
                  filtro : filtro
              })
              console.log(filtro)
          })

    }

    componentDidMount(){
        this.cargaFiltros();
    }



    // Arreglo de botones de mercados


    render(){

        return (
            <div className="o-filters-main">
               <TitlesFilter></TitlesFilter>

               {/* Se llama el componente de botones y se recorre con el map para llenar los componentes de MarketButtons */}
                <div className="o-dropdown-market-container">
                    {this.state.filtro &&
                    this.state.filtro.map(filtro =><Marketbuttons iconmarket={filtro.datos.icon}  text={filtro.datos.nombre}  />)}
                </div>
                <div className="o-main-info-filter" >
                    <h5 className="market-name-filter"> Precio: </h5>
                    {/* Container con el componente de los botones de los precios */}
                    <div className="o-price-button-container">
                        <Pricebuttons pricetext="Menor precio"></Pricebuttons>
                        <Pricebuttons pricetext="Mayor precio"></Pricebuttons>
                    </div>
                </div>
        </div>
        )

    } 
         
}

export default Filters;