import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Buscador from '../components/Buscador';
import { Comprar } from '../components/Comprar';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import SigUp from '../components/SigUp';
import CartPage from '../containers/CartPage';
import ListMealsMainPage from '../containers/ListMealsMainPage';

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Buscador />
            <ListMealsMainPage />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/sigup" component={SigUp} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/shop/:id" component={Comprar} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
