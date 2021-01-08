import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Dapp from '../../containers/Dapp';
import ProductDetails from '../../components/ProductDetails';
import Account from '../../containers/Account';

const DappRouter = (drizzle,currentAccount) => (

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
            <Account />
          </Route>
        </Switch>
    </div>
  );

export default DappRouter;
