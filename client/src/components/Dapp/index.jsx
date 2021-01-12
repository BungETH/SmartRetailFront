import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { usePromiseTracker } from 'react-promise-tracker';
// local import
import Marketplace from '../../containers/Marketplace/index';
import Loading from '../ReactLoading/Loading';
import './dapp.scss';

const Dapp = ({
  drizzle,
  fetchFidelityContract,
  fetchProducts,
  fetchEscrowContract,
  products,
}) => {
  const fidelityContract = drizzle.drizzle.options.contracts[1];
  const escrowContract = drizzle.drizzle.contracts.SmartRetailEscrow;

  useEffect(() => {
    fetchFidelityContract(fidelityContract);
    fetchEscrowContract(escrowContract);
    fetchProducts();
  }, []);

  const { promiseInProgress } = usePromiseTracker();
  return (
    <div className="dapp">
      {promiseInProgress ? (
        <Loading type="bubbles" color="#3F51B5" />
      ) : (
        products.map((product) => (
          <Marketplace
            key={product.id}
            productId={product.id}
            imgUrl={product.imgUrl}
            title={product.title}
            img={product.imgUrl}
            description={product.description}
            price={product.unitPrice}
          />
        ))
      )}
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
  products: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};

export default Dapp;
