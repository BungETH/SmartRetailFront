import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Orders from '../../containers/Account/Orders';

const Account = ({
  drizzle,
  orders,
  fetchOrders,
  fetchUserBalance,
  balance,
  claimTokens,
  tokenAddress,
}) => {
  const useStyles = makeStyles({
    account_title: {
      textAlign: 'center',
      fontSize: '2em',
      marginTop: '1em',
      color: '#3f51b5',
    },
    account_container: {
      display: 'flex',
      height: '60vh',
    },
    account_Paper: {
      backgroundColor: '#3f51b5',
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      marginTop: '4em',
      width: '40vw',
      height: '30em',
      paddingBottom: '2em',
    },
    account_token: {
      backgroundColor: '#3f51b5',
      display: 'flex',
      flexDirection: 'column',
      //justifyContent: 'space-evenly',
      margin: 'auto',
      marginTop: '4em',
      width: '40vw',
      height: '30em',
      paddingBottom: '2em',
    },
    account_buttons: {
      backgroundColor: 'white',
      margin: '1em auto',
      color: '#3f51b5',
    },
    account_text: {
      textAlign: 'center',
      fontSize: '2em',
      fontWeight: 'bold',
      color: 'white',
      marginTop: '1em',
      marginBottom: 0,
    },
    account_token_text: {
      textAlign: 'center',
      fontSize: '2em',
      fontWeight: 'bold',
      color: 'white',
      marginTop: '1em',
      marginBottom: 0,
      // position: 'relative',
      // top: '-3.2em',
    },
    toggle_button: {
      alignSelf: 'center',
      color: '#ffffff',
      border: '2px solid #ffffff',
      width: 'fit-content',
      marginTop: '4em',
      '&:hover': {
        backgroundColor: 'white',
        color: '#3f51b5',
      },
    },
    account_address: {
      textAlign: 'center',
      color: 'white',
    },
    account_address_text: {
      marginTop: '2em',
      marginBottom: '1em',
      fontSize: '0.7em',
    },
  });
  const classes = useStyles();
  const [toogleButton, setToogleButton] = useState(false);

  const handleClaim = () => {
    claimTokens();
  };

  const handletokenAddress = () => {
    setToogleButton(!toogleButton);
  };

  useEffect(() => {
    fetchOrders();
    fetchUserBalance();
  }, []);

  return (
    <div>
      <Typography
        className={classes.account_title}
        gutterBottom
        variant="h5"
        component="h1"
      >
        <p>My account</p>
      </Typography>
      <div className={classes.account_container}>
        <Paper className={classes.account_Paper} elevation={2}>
          <Typography
            className={classes.account_text}
            gutterBottom
            variant="h5"
            component="h2"
          >
            <p>Orders :</p>
          </Typography>
          <Orders
            drizzle={drizzle}
          />
        </Paper>
        <Paper className={classes.account_token} elevation={2}>
          <Typography
            className={classes.account_token_text}
            gutterBottom
            variant="h5"
            component="h2"
          >
            <p>Your balance :</p>
            <p>{(balance/1000)} FDLT</p>
          </Typography>
          {balance > 0 && (
            <Button
              className={classes.account_buttons}
              variant="contained"
              onClick={handleClaim}
            >
              Claim tokens
            </Button>
          )}
          <Button
            className={classes.toggle_button}
            variant="outlined"
            onClick={handletokenAddress}
          >
            Show token address
          </Button>
          {toogleButton === true && (
          <Typography
            className={classes.account_address}
            gutterBottom
            variant="h5"
            component="h2"
          >
            <p
              className={classes.account_address_text}
            >
              Add this address on your metamask in order to retrieve your FDLT tokens !
            </p>
            <p>0xfb981f8d9b949bde92ee7cf582675a608945d831</p>
          </Typography>
          )}
        </Paper>
      </div>
    </div>
  );
};

Account.propTypes = {
  balance: PropTypes.number.isRequired,
  claimTokens: PropTypes.func.isRequired,
  tokenAddress: PropTypes.string.isRequired,
};

export default Account;
