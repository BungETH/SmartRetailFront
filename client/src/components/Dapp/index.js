import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// local import
import Marketplace from '../../containers/Marketplace';
import './dapp.scss';

const Dapp = ({
  drizzle,
  currentAccount,
  fetchFidelityContract,
  fetchProducts,
  products
}) => {
  console.log(drizzle);
  const contract = drizzle.drizzle.contracts.FidelityToken;
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
              <Link to="/account">{currentAccount}</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      {products.map((product) => (
        <Marketplace
          key={product.id}
          productId={product.id}
          title={product.title}
          description={product.description}
          price={product.unitPrice}
        />
      ))}
    </div>
  );
};
Dapp.propTypes = {
  currentAccount: PropTypes.any.isRequired,
  drizzle: PropTypes.any.isRequired,
};

export default Dapp;
