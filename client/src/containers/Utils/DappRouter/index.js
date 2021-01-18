import { connect } from 'react-redux';
import { fetchEscrowContract } from '../../../actions/escrow';
import DappRouter from '../../../utils/DappRouter';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

  fetchEscrowContract: (contract) => {
    dispatch(fetchEscrowContract(contract));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DappRouter);