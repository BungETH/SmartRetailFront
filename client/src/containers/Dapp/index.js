import { connect } from 'react-redux';
<<<<<<< HEAD
import { fetchFidelityContract, fetchProducts  } from '../../actions/fidelity';
=======
import { fetchFidelityContract } from '../../actions/fidelity';
import { fetchProducts } from '../../actions/products';
>>>>>>> a7bb1db378f4e18fa3f29ad4df1e6e817346687b
import Dapp from '../../components/Dapp';

const mapStateToProps = (state) => ({
  currentAccount: state.fidelity.account,
  products: state.products
  });

const mapDispatchToProps = (dispatch) => ({
  fetchFidelityContract: (contract) => {
    dispatch(fetchFidelityContract(contract));
  },

  fetchProducts: (products) => {
    dispatch(fetchProducts(products));
},
<<<<<<< HEAD
  fetchProducts: () => {
    dispatch(fetchProducts());
  }
=======

>>>>>>> a7bb1db378f4e18fa3f29ad4df1e6e817346687b
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dapp);