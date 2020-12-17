import PropTypes from 'prop-types';
import React from 'react';

import './dapp.scss';

const Dapp = ({ drizzle, drizzleState, account }) => {

  // console.log(drizzle);
  // console.log(drizzleState);
  // console.log(account);

  return (
    <div className="dapp">
    </div>
  );
};

Dapp.propTypes = {
  account: PropTypes.any.isRequired,
  drizzle: PropTypes.any.isRequired,
  drizzleState: PropTypes.any.isRequired,
};

export default Dapp;
