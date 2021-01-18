import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { usePromiseTracker } from 'react-promise-tracker';
// local import
import Marketplace from '../../containers/Marketplace';
import Loading from '../ReactLoading';
import './dapp.scss';

const useStyles = makeStyles({
  dapp_container: {

  },
  dapp_title: {
    textAlign: 'center',
    fontSize: '2em',
    marginTop: '2em',
    color: '#3f51b5',
  },
  dapp: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

const Dapp = ({
  drizzle,
  fetchFidelityContract,
  fetchProducts,
  fetchEscrowContract,
  products,
}) => {
  console.log(drizzle);
  const fidelityContract = drizzle.drizzle.options.contracts[1];
  const escrowContract = drizzle.drizzle.contracts.SmartRetailEscrow;

  useEffect(() => {
    fetchFidelityContract(fidelityContract);
    fetchEscrowContract(escrowContract);
    fetchProducts();
  }, []);

  const { promiseInProgress } = usePromiseTracker();
  const classes = useStyles();
  return (
    <div className={classes.dapp_container}>
      <Typography
        className={classes.dapp_title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        Welcome to Smart Retail, the Marketplace game changer
      </Typography>
      <div className={classes.dapp}>
        {promiseInProgress ? (
          <Loading type="bubbles" color="#3F51B5" />
        ) : (
          products.map((product) => (
            <Marketplace
              key={product.id}
              productId={product.id}
              title={product.title}
              img={product.imgUrl}
              description={product.description}
              price={product.unitPrice}
            />
          ))
        )}
      </div>
    </div>
  );
};
Dapp.propTypes = {
  drizzle: PropTypes.shape({
    drizzle: PropTypes.shape({
      contracts: PropTypes.shape({
        SmartRetailEscrow: PropTypes.any.isRequired,
      }).isRequired,
      options: PropTypes.shape({
        contracts: PropTypes.any.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  fetchEscrowContract: PropTypes.func.isRequired,
  fetchFidelityContract: PropTypes.func.isRequired,
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    unitPrice: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
    map: PropTypes.func,
  }).isRequired),
};

export default Dapp;
