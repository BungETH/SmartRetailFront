import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { usePromiseTracker } from "react-promise-tracker";
// local import
import Marketplace from '../../containers/Marketplace';
import Loading from '../ReactLoading/Loading';
import './dapp.scss';

const Dapp = ({
  drizzle,
  fetchFidelityContract,
  fetchProducts,
  fetchEscrowContract,
  products,
}) => {
  const fidelityContract = drizzle.drizzle.contracts.FDLTTokenManager;
  const escrowContract = drizzle.drizzle.contracts.SmartRetailEscrow;
 
  useEffect(() => {
    fetchFidelityContract(fidelityContract);
    fetchEscrowContract(escrowContract)
    fetchProducts();
  }, []);

  const { promiseInProgress } = usePromiseTracker();
  return (
    <div className="dapp">
      {promiseInProgress ? (
        <Loading type={"bubbles"} color={"#3F51B5"} />
      ) : (
        
        products.map((product) => (
          
          <Marketplace
            key={product.id}
            productId={product.id}
            imgUrl={product.imgUrl}
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
