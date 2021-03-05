// Página que permite ve la busqueda realizada por el cliente

import React from 'react';
import Card from '../Components/Card/Card';
import  Navbar  from '../Components/Navbar/Navbar';
import SubNavbar  from '../Components/SubNavbar/SubNavbar';
import imgBochalema from '../assets/img/bochalema.jpg';
import CarrouselContianer from '../Components/CarrouselC/CarrouselContainer/CarrouselContianer';
import '../Busqueda/Busqueda.css';
import Filters from '../Components/Filters/Filters';
import { db } from '../util/firebase';
import Spinner from '../Components/Spinner/Spinner';
import './Busqueda.css';

class Busqueda extends React.Component {

    // Arreglo de productos con su Imagen, precio, mensaje, marca
    state = {
        productos: null
    }

    cargarProductos() {
        db.collection('productosB')
            .get()
            .then(snapshot => {
                const productos = [];
                snapshot.forEach(doc => {
                    const datos = doc.data();
                    let id = doc.id;
                    const data = { datos, id }
                    productos.push(data)
                })
                this.setState({
                    productos
                })
                // console.log(productos)
            })
    }

    componentDidMount(){
        this.cargarProductos();
    }

    render() {
        let superBocha = <Spinner></Spinner>
        if (this.state.productos) {
            superBocha=<CarrouselContianer breakPoints={
                [{ width: 1, itemsToShow: 1 },
                { width: 550, itemsToShow: 2 },
                { width: 768, itemsToShow: 3 },
                { width: 1200, itemsToShow: 4 },]
            } textHeader="Supermercado Bochalema" imgHeader={imgBochalema}>
                {
                    this.state.productos.map(productC => <Card key={productC.id} imagePick={productC.datos.image} titleText={productC.datos.title}
                        messageText={productC.datos.message} marcaText={productC.datos.brand} />)
                }
            </CarrouselContianer>
        }

        let MercaPatty = <Spinner></Spinner>
        if (this.state.productos) {
            MercaPatty=<CarrouselContianer breakPoints={
                [{ width: 1, itemsToShow: 1 },
                { width: 550, itemsToShow: 2 },
                { width: 768, itemsToShow: 3 },
                { width: 1200, itemsToShow: 4 },]
            } textHeader="Mercado Doña Patty" imgHeader={imgBochalema}>
                {
                    this.state.productos.map(productC => <Card key={productC.id} imagePick={productC.datos.image} titleText={productC.datos.title}
                        messageText={productC.datos.message} marcaText={productC.datos.brand} />)
                }
            </CarrouselContianer>
        }

    
    
    return (
    <div className="o-main-search-container">
        <Navbar></Navbar>
        <SubNavbar></SubNavbar>
        <div className="o-info-container">
            <Filters></Filters>
            <div className="main-big-container">
              {/* Se trae el componente de carrousel con sus breakpoints que cambian dependiendo de en donde se utilice  */}
              {superBocha}
                <br></br>
                {MercaPatty}

                <br></br>  
            </div>                            
        </div>
    </div>

)}
}
export default Busqueda;