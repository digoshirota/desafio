import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Header} from './header/Header';
import {ProductList} from "./ProductList/ProductList";


function Routes() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/camisetas" component={ProductList} />
        <Route exact path="/calcas" component={ProductList} />
        <Route exact path="/calcados" component={ProductList} />
        <Route exact path="/contato" component={Header} />
      </div>
    </Router>	
  );
}

export default Routes;