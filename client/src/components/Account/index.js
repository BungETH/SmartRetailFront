import React from 'react';
import Button from '@material-ui/core/Button';

const Account = () => {

  const handleBuy = () => {
    console.log('buy with tokens');

  }

  return(
    <div>
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={handleBuy}
      >
        Buy with tokens
      </Button>
    </div>
  );
};

export default Account;