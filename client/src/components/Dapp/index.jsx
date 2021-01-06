import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { usePromiseTracker } from "react-promise-tracker";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// local import
import Marketplace from '../../containers/Marketplace';
import Loading  from '../ReactLoading/Loading';
import './dapp.scss';

const Dapp = ({
  drizzle,
  currentAccount,
  fetchFidelityContract,
  fetchProducts,
  fetchEscrowContract,
  products,
  balance,
}) => {
  const fidelityContract = drizzle.drizzle.contracts.FidelityToken;
  const escrowContract = drizzle.drizzle.contracts.SmartRetailEscrow;
  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     flexGrow: 1,
  //   },
  //   menuButton: {
  //     marginRight: theme.spacing(2),
  //   },
  //   title: {
  //     flexGrow: 1,
  //   },
  //   media: {
  //     height: 140,
  //   },
  // }));
  // const classes = useStyles();

  useEffect(() => {
    fetchFidelityContract(fidelityContract);
    fetchEscrowContract(escrowContract)
    fetchProducts();
  }, []);

  const { promiseInProgress } = usePromiseTracker();
  return (
    <div className="dapp">
      {/* <div className={classes.root}>
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
              {balance}
            </Typography>
            <Typography variant="h6" align="right" className={classes.title}>
              <Link to="/account">{currentAccount}</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div> */}
      {promiseInProgress ? (
        <Loading type={"bubbles"} color={"#3F51B5"} />
      ) : (
        
        products.map((product) => (
          
          <Marketplace
            key={product.id}
            productId={product.id}
            title={product.title}
            description={product.description}
            price={product.unitPrice}
          />
        ))
      )}
      
    </div>
  );
};
Dapp.propTypes = {
  currentAccount: PropTypes.any.isRequired,
  drizzle: PropTypes.any.isRequired,
};

export default Dapp;
