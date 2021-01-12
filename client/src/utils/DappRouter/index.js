import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Dapp from '../../containers/Dapp';
import ProductDetails from '../../components/ProductDetails';
import Account from '../../containers/Account';

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
        exact
        path="/product"
      >
        <ProductDetails />
      </Route>
      <Route
        exact
        path="/account"
      >
<<<<<<< HEAD
        <Account 
          drizzle={drizzle}
        />
=======
        <Account />
>>>>>>> 605ee880fa9dc29577edc1c6dea9cb9e4671e89c
      </Route>
    </Switch>
  </div>
);

export default DappRouter;
