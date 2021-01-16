//npm import
import { connect } from "react-redux";

//local import
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { fetchItem } from "../../actions/products";
import {
  sendProduct,
  sendBalance,
} from '../../actions/fidelity';

const mapDispatchToProps = (dispatch) => ({
  fetchItem: (id) => {
    dispatch(fetchItem(id));
  },
  handleBuy: (unitPrice) => {
    dispatch(sendProduct(unitPrice));
  },
  sendBalance: (id) => {
    dispatch(sendBalance(id));
  },
});

const mapStateToProps = (state) => ({
  product: state.item,
});

const DetailsProduct = connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

export default DetailsProduct;


