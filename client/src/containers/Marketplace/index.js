import { connect } from 'react-redux';
import {
  sendProduct,
  sendBalance,
} from '../../actions/fidelity';
<<<<<<< HEAD
=======
import { fetchTransactionParams } from '../../actions/escrow';
>>>>>>> 605ee880fa9dc29577edc1c6dea9cb9e4671e89c
import Marketplace from '../../components/Dapp/Marketplace';

const mapStateToProps = (state) => ({
  tokenBalance: state.fidelity.fidelityTokenAmount,
});

const mapDispatchToProps = (dispatch) => ({

  sendProduct: (productPrice) => {
    dispatch(sendProduct(productPrice));
  },
  sendBalance: (id) => {
    dispatch(sendBalance(id));
  },
<<<<<<< HEAD
=======
  fetchTransactionParams: (seller, value) => {
    dispatch(fetchTransactionParams(seller, value));
  },
>>>>>>> 605ee880fa9dc29577edc1c6dea9cb9e4671e89c
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Marketplace);
