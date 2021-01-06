import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const Account = () => {


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
    </div>
  );
};

export default Account;