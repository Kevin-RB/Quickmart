
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Home  from './Home/Home';
import  Login  from './Login/Login';
import  Register  from './Register/Register';
import  Busqueda  from './Busqueda/Busqueda';
import Supermercado from './Supermercado/Supermercado';
import MainCart from './MainCart/MainCart';
import Lacteos from './Components/LacteosBusqueda/Lacteos';
import "./Components/FontAwesomeIcons/icons";

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Register" component={Register} />
          <Route path="/Login" component={Login} />
          <Route path="/Busqueda" component={Busqueda} />
          <Route path="/MainCart" component={MainCart} />
          <Route path="/Supermercado" component={Supermercado} />
          <Route path="/Lacteos" component={Lacteos} />
        </Switch>
      </Router>

    );
  }
}
export default App;
