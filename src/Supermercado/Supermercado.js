import React from 'react';
import './Supermercado.css';
import CarrouselContianer from '../Components/CarrouselC/CarrouselContainer/CarrouselContianer';
import Card from '../Components/Card/Card';
import Navbar from '../Components/Navbar/Navbar';
import SubNavbar from '../Components/SubNavbar/SubNavbar';
import BuscadorMercado from '../Components/BuscadorMercado/BuscadorMercado';
import imgBochalema from '../assets/img/bochalema.jpg';
import DropDownSuperM from './DropDownSuperM/DropDownSuperM';
import { db } from '../util/firebase';
import Spinner from '../Components/Spinner/Spinner';

// Página de cada supermercado

class Supermercado extends React.Component {

// Conexión y envío de datos desde firebase
    state = {
        productos: null,
        congelados: null
    }

    cargarProductos() {
        db.collection('productos')
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

    cargarCongelados() {
        db.collection('conge')
            .get()
            .then(snapshot => {
                const congelados = [];
                snapshot.forEach(doc => {
                    const datos = doc.data();
                    let id = doc.id;
                    const data = { datos, id }
                    congelados.push(data)
                })
                this.setState({
                    congelados
                })
                // console.log(productos)
            })
    }

    componentDidMount(){
        this.cargarProductos();
        this.cargarCongelados();
    }

    render() {


        let carnes = <Spinner></Spinner>
        if (this.state.productos) {
            carnes=<CarrouselContianer breakPoints={
                [{ width: 1, itemsToShow: 1 },
                { width: 550, itemsToShow: 2 },
                { width: 768, itemsToShow: 3 },
                { width: 1200, itemsToShow: 4 },]
            } textHeader="Carnes" imgHeader={imgBochalema}>
                {
                    this.state.productos.map(productC => <Card key={productC.id} imagePick={productC.datos.image} titleText={productC.datos.title}
                        messageText={productC.datos.message} marcaText={productC.datos.brand} />)
                }
            </CarrouselContianer>
        }

        let congela = <Spinner></Spinner>
        if (this.state.congelados) {
            congela=<CarrouselContianer breakPoints={
                [{ width: 1, itemsToShow: 1 },
                { width: 550, itemsToShow: 2 },
                { width: 768, itemsToShow: 3 },
                { width: 1200, itemsToShow: 4 },]
            } textHeader="Congelados" imgHeader={imgBochalema}>
                {
                    this.state.congelados.map(congelado => <Card key={congelado.id} imagePick={congelado.datos.image} titleText={congelado.datos.title}
                        messageText={congelado.datos.message} marcaText={congelado.datos.brand} />)
                }
            </CarrouselContianer>
        }

        return (
            <div>
                <Navbar></Navbar>
                <SubNavbar></SubNavbar>
                <div className="global-container">
                    <BuscadorMercado mercadoImg={imgBochalema} mercadoText="Supermercado Bochalema"></BuscadorMercado>
                    <br></br>
                    {/* Componente del dropdown de seleccion */}
                    <DropDownSuperM></DropDownSuperM>
                    <div className="main-cont">
                        <div className="main-big-container-market">
                            {carnes}
                            <br></br>
                            {congela}
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
export default Supermercado;


