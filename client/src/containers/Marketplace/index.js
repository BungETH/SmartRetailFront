import { connect } from 'react-redux';
import {
  sendProduct,
  sendBalance,
} from '../../actions/fidelity';
import { fetchTransactionParams } from '../../actions/escrow';
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
  fetchTransactionParams: (seller, value) => {
    dispatch(fetchTransactionParams(seller, value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Marketplace);
