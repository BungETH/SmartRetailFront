import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Account = ({
  fetchUserBalance,
  balance,
  sendConfirmationDelivery,
  claimTokens,
  
}) => {

  const useStyles = makeStyles({
    account_Paper: {
      backgroundColor: '#3f51b5',
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      marginTop: '4em',
      width: '60vw',
      height: '60vh',
    },
    account_buttons:{
      backgroundColor: 'white',
      margin:'1em auto',
      color: '#3f51b5',
    },
    account_text:{
      textAlign: 'center',
      fontSize: '2em',
      fontWeight: 'bold',
      color: 'white',
      marginTop:'4em',
      marginBottom: 0,
      
    }
  });

  const handleClaim = () => {
    claimTokens();
  }

  const handleDelivery = () => {
    sendConfirmationDelivery(balance);
  }
  
  const classes = useStyles();

  useEffect(() => {
    fetchUserBalance(1);
  },[])

  return(
    <div>
      <Paper className={classes.account_Paper} elevation={2} >
        <Typography
            className={classes.account_text}
            gutterBottom
            variant="h5"
            component="h2"
          >
            <p>Pending delivery :</p>
        </Typography>
        <Button
          className={classes.account_buttons}
          variant="contained"
          onClick={handleDelivery}
        >
          Confirm delivery
        </Button>
        <Typography
          className={classes.account_text}
          gutterBottom
          variant="h5"
          component="h2"
        >
            <p>Your balance :</p>
            <p>{balance} FDLT</p>
        </Typography>
        <Button
          className={classes.account_buttons}
          variant="contained"
          onClick={handleClaim}
        >
          Claim tokens
        </Button>
      </Paper>
    </div>
  );
};

export default Account;