import React, {useState} from 'react';
import Modal from 'react-modal';
import  Navbar  from '../Components/Navbar/Navbar';
import img from '../assets/img/bochalema.jpg';
import Maincartproducts from '../MainCart/Maincartproducts/Maincartproducts';
import MarketName from '../Cart/MarketName/MarketName';
import ButtonMain from '../Components/ButtonMain/ButtonMain';
import TotalPriceContainer from './TotalPriceContainer/TotalPriceContainer';
import InfoPopCongrats from '../Components/PopUps/InfoPopCongrats/InfoPopCongrats';
import { withRouter } from "react-router";
import './MainCart.css'
import PopUps from '../Components/PopUps/PopUps';
import TitleCart from './TitlesCart/TitleCart';
import {db} from '../util/firebase';


Modal.setAppElement('#root');

// Estilos predeterminados del modal

const modalstyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : '65%',
      bottom                : '2%',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      height                : '22rem'
    },
    overlay :{
        backgroundColor: 'rgba(0, 0, 0, 0.62)',
    }
  };

//  Página del carrito

class MainCart  extends React.Component{
    

 state = {
    modalIsOpen1: false,
    modalIsOpen2: false,
    products2: null
 }


 handleOpenModal1 (){
    this.setState({modalIsOpen1: true})
 }

 handleCloseModal1 (){
    this.setState({modalIsOpen1: false})
 }

 handleOpenModal2 (){
    this.setState({modalIsOpen2: true})
 }

 handleCloseModal2 (){
    this.setState({modalIsOpen2: false})
 }

  CloseCongrats(){
        this.handleCloseModal2();
        this.props.history.push("/");
}

cargaProductos(){
    db.collection('produCart')
        .get()
        .then(snapshot=>{
            const products2 =[]
            snapshot.forEach( doc=>{
                const datos = doc.data();
                let id = doc.id;
                const data = {datos , id}
                products2.push(data)


            })
            this.setState({
                products2:products2
            })
            console.log(products2)

        })
}

componentDidMount(){
    this.cargaProductos();
}

  render(){
   
                    
    return  (
        <div className="o-main-cart-page-mm">
            <Navbar></Navbar>
            <div className="main-container-cart-mm">
                <div className="cart-container-2-mm">
                    <div className="o-cart-name-main-mm">
                        <h4 className="o-carrito-style-mm"> Mi carrito</h4>
                    </div>   
                    <div className="o-market-name-mm">
                        <MarketName imgsrc={img} Marketname={"Supermercado Bochalema"}></MarketName>
                    </div>
                    <hr className="o-divider-style-mm"></hr>
                    <div className="o-cart-products-cart-mm">
                        <TitleCart></TitleCart>
                        {/* Se llama el arreglo y se recorre para mostrarlo como componente */}
                        <div className="products-main-cart-mm">
                        {
                          this.state.products2 &&
                          this.state.products2.map(producto =><Maincartproducts key={producto.id} imgsrc={producto.datos.image} productName={producto.datos.name} 
                            numproduct={producto.datos.quantity} price={producto.datos.price} 
                            totalProductPrice={producto.datos.total}/>)
                        }

                        </div>
                    </div>

                    {/* Botón para seleccionar el metodo de pago */}
                    <div className="o-total-cart-mm">
                        <h5 className="o-name-cart-mm" > Método de pago</h5>
                        <ButtonMain onClick={()=>this.handleOpenModal1()}>Selecciona método de pago</ButtonMain>
                    </div>
                    {/* Componente de los totales de precios del carrito */}
                    <TotalPriceContainer></TotalPriceContainer>
                    {/* Modal para la selección de los métodos de pago */}
                    <Modal isOpen={this.state.modalIsOpen1} shouldCloseOnOverlayClick={false} onRequestClose={ () => this.handleCloseModal1()} style={modalstyles}>                       
                        <PopUps></PopUps>
                        <div className="button-modal-container">
                            <ButtonMain onClick={()=>this.handleCloseModal1()}>Seleccionar</ButtonMain>
                        </div> 
                    </Modal>
                    {/* Modal para la confirmación de la compra */}
                    <Modal isOpen={this.state.modalIsOpen2} shouldCloseOnOverlayClick={false} onRequestClose={ () => this.handleCloseModal2()} style={modalstyles}>                       
                        <InfoPopCongrats></InfoPopCongrats>
                        <div className="button-modal-container">
                            <ButtonMain onClick={()=>this.CloseCongrats() }>Aceptar</ButtonMain>
                        </div> 
                    </Modal>
                    {/* Botónes para seguir comprando y finalizar la compra */}
                    <div className="o-cart-final-buttons">
                        <ButtonMain onClick={() => this.props.history.push("/Busqueda")}>Seguir comprando</ButtonMain>  
                        
                        <ButtonMain onClick={()=>this.handleOpenModal2()}> Finalizar compra</ButtonMain>   
                    </div>
                </div>
            </div>
        </div>
    
    )

                            }
}export default withRouter(MainCart);
