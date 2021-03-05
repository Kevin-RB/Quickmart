// Página de Home
import React from 'react';
import '../Home/Home.css';
import Container from 'react-bootstrap/Container';
import  Navbar  from '../Components/Navbar/Navbar';
import  SubNavbar  from '../Components/SubNavbar/SubNavbar';
import HomeCardSection from '../Components/Home_cards_containers/HomeCardsSection';
import HomeCards from '../Components/Home_cards_containers/Cards/HomeCards';
import {db} from '../util/firebase';


class Home extends React.Component {

// Arreglo de elementos de mercado y promociones de la página inicial

state = {
  mercado: null,
  promos: null
}

cargaMercado(){
  db.collection('mercados')
    .get()
    .then( snapshot =>{
      const mercado = []
      snapshot.forEach( doc =>{
        const datos = doc.data();
        let id = doc.id;
        const data = {datos , id}
        mercado.push(data)
      })
      this.setState({
        mercado : mercado
      })
      console.log(mercado)
    }) 
}

cargarPromos(){
  db.collection('promociones')
    .get()
    .then( snapshot =>{
      const promos = []
      snapshot.forEach(doc =>{
        const datos = doc.data();
        let id = doc.id;
        const data = {datos , id}
        promos.push(data)
      })
      this.setState({
        promos : promos,
      })
      console.log(promos)
    })
}
 
componentDidMount(){
  this.cargaMercado();
  this.cargarPromos();
}


render(){
  console.log(this.state.mercado)
  return (
  <div>
    
{/* Se utilian los componentes de NavBar y SubNavBar */}
    <Navbar></Navbar>
    <SubNavbar></SubNavbar>

{/* Contenedor general que contendrá las  cards de los mercados */}
    <Container className="c-container" fluid>
        <div className="o-compras-container">
          <h5 className="o-compras-text"> REALIZA TUS COMPRAS</h5>
        </div>

{/* Componente de las cards que trae las props del titulo general y os titulos e imagenes de cada mercado */}
        <HomeCardSection  sectionTitle="Todas nuestras tiendas">
           {
            this.state.mercado &&
           this.state.mercado.map(mercado =><HomeCards key={mercado.id} title={mercado.datos.title}  src={mercado.datos.srcimg} />)
           }
        </HomeCardSection>

{/* Componente de las cards que trae las props del titulo general y os titulos e imagenes de las promociones */}
        <HomeCardSection  sectionTitle="Promociones">
          {
            this.state.promos &&
            this.state.promos.map(promo =><HomeCards key={promo.id} title={promo.datos.title}  src={promo.datos.srcimg}  />)
          }
        </HomeCardSection>
      </Container>
  </div>
    )
}
}
  export default Home;