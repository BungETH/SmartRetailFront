import React from 'react';
<<<<<<< HEAD
=======
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
>>>>>>> 4a8bf8caff1ba96fe6faf3840122f9c9490457e6
import Button from '@material-ui/core/Button';

const Account = () => {

<<<<<<< HEAD
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
=======

  const useStyles = makeStyles({
    accountPaper: {

      margin: 'auto',
      marginTop: '4em',
      width: '60vw',
      height: '60vh',
    },
    claimButton:{

    }
  });


  const handleClaim = () => {
    console.log('buy with tokens');

  }
  const classes = useStyles();

  return(
    <div>
      <Paper className={classes.accountPaper} elevation={3} >
        <Button
          className={classes.claimButton}
          variant="contained"
          size="medium"
          color="primary"
          onClick={handleClaim}
        >
          Buy with tokens
        </Button>
      </Paper>
>>>>>>> 4a8bf8caff1ba96fe6faf3840122f9c9490457e6
    </div>
  );
};

export default Account;