import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Comprar } from '../components/Comprar';
import Login from '../components/Login';
import SigUp from '../components/SigUp';
import App from '../containers/App';
import CartPage from '../containers/CartPage';
const Routers = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/compras" component={Comprar} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sigup" component={SigUp} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routers;
