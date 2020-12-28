import { connect } from 'react-redux';
import {
  // fetchProductPrice,
  sendProductPrice,
} from '../../actions/fidelity';
import Marketplace from '../../components/Dapp/Marketplace';

const mapStateToProps = (state) => ({
    productPrice: state.fidelity.productPrice,
  });

const mapDispatchToProps = (dispatch) => ({
  // fetchProductPrice: (productPrice) => {
  //   dispatch(fetchProductPrice(productPrice));
  // },

  sendProductPrice: (productPrice) => {
    dispatch(sendProductPrice(productPrice));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Marketplace);