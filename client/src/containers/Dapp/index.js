import { connect } from 'react-redux';
import { fetchFidelityContract, fetchProducts  } from '../../actions/fidelity';
import Dapp from '../../components/Dapp';

const mapStateToProps = (state) => ({
  currentAccount: state.fidelity.account,
  products: state.products
  });

const mapDispatchToProps = (dispatch) => ({
  fetchFidelityContract: (contract) => {
    dispatch(fetchFidelityContract(contract));
},
  fetchProducts: () => {
    dispatch(fetchProducts());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dapp);