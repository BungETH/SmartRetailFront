import React, { useEffect } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Dapp from '../../containers/Dapp';
import Account from '../../containers/Account';
import ProductPage from '../../components/ProductDetails/ProductPage';


const DappRouter = ({ drizzle, fetchEscrowContract }) => {

  const escrowContract = drizzle.contracts.SmartRetailEscrow;
  console.log(escrowContract);
  useEffect(() => {
    fetchEscrowContract(escrowContract);
  }, []);
  return (
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
}

export default DappRouter;
