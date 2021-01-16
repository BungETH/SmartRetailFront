import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Dapp from '../../containers/Dapp';
import Account from '../../containers/Account';
import ProductPage from '../../components/ProductDetails/ProductPage';


const DappRouter = (drizzle) => (

  <div>
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
        path="/product/:id"
      >
        <ProductPage />
      </Route>
      <Route
        exact
        path="/account"
      >
        <Account 
          drizzle={drizzle}
        />
      </Route>
    </Switch>
  </div>
);

export default DappRouter;
