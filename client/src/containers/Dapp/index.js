import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/products';
import Dapp from '../../components/Dapp';

const mapStateToProps = (state) => ({
  currentAccount: state.fidelity.account,
  products: state.products,
  balance: state.fidelity.fidelityTokenAmount,
});

const mapDispatchToProps = (dispatch) => ({

  fetchProducts: (products) => {
    dispatch(fetchProducts(products));
},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dapp);
