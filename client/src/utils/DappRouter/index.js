import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Dapp from '../../containers/Dapp';
import ProductDetails from '../../components/ProductDetails';
import Account from '../../components/Account';

const DappRouter = (drizzle) => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
      >
        <Dapp
          drizzle={drizzle}
        />
      </Route>
      <Route
        exact
        path="/product"
      >
        <ProductDetails />
      </Route>
      <Route
        exact
        path="/account"
      >
        <Account />
      </Route>
    </Switch>
  </Router>
);

export default DappRouter;
