<<<<<<< HEAD:client/src/components/Dapp/index.jsx
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PlaceMarket from '../../containers/Marketplace/PlaceMarket';

import './dapp.scss';

const Dapp = ({ drizzle, account, handleBuy }) => {
  // console.log(drizzle);
  // console.log(drizzleState);
  // console.log(account);
=======
//npm import
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

//local import
import Marketplace from "../../containers/Marketplace";

import "./dapp.scss";

const Dapp = ({ drizzle, currentAccount, fetchFidelityContract, fetchProducts, products}) => {
  const contract = drizzle.contracts.FidelityToken;
  /*const [productsList, setProductsList] = useState([]);
  const test = async () => {
    await axios.get(`https://cors-anywhere.herokuapp.com/https://salty-citadel-63624.herokuapp.com/api/products?page=${1}`)
  .then(
    json => {
      const { data } = json;
      const products = data["hydra:member"];
      fetchProductsSucces(products)
      console.log(products)
      setProductsList(products)
    }
  )
  .catch( error => {
    fetchProductsError(error)
    console.log(error)
  })}*/

>>>>>>> dev:client/src/components/Dapp/index.js
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    media: {
      height: 140,
    },
  }));
  const classes = useStyles();

  useEffect(() => {
    fetchFidelityContract(contract);
    fetchProducts();  
  }, []);

  return (
    <div className="dapp">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" align="right" className={classes.title}>
              {currentAccount}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
<<<<<<< HEAD:client/src/components/Dapp/index.jsx
      <Marketplace
        drizzle={drizzle}
        account={account}
        onClick={handleBuy}
      />
=======
      {products.map((product) => (
        <Marketplace
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.unitPrice}
        />
      ))}
>>>>>>> dev:client/src/components/Dapp/index.js
    </div>
  );
};

Dapp.propTypes = {
  account: PropTypes.any.isRequired,
  drizzle: PropTypes.any.isRequired,
  drizzleState: PropTypes.any.isRequired,
};

export default Dapp;
