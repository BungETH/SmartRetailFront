import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { usePromiseTracker } from 'react-promise-tracker';
// local import
import Marketplace from '../../containers/Marketplace';
import Loading from '../ReactLoading/Loading';
import './dapp.scss';
import AsideCategory from '../AsideCategory/AsideCategory';
import SlideShow from '../SlideShow/SlideShow';

const Dapp = ({
  fetchProducts,
  products,
}) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const { promiseInProgress } = usePromiseTracker();
  return (
    <div className="home">
      <div className="aside">
        <AsideCategory />
      </div>
      <div className="dapp">
        <SlideShow />
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
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      unitPrice: PropTypes.number.isRequired,
      imgUrl: PropTypes.string.isRequired,
      map: PropTypes.func,
    }).isRequired
  ),
};

export default Dapp;
