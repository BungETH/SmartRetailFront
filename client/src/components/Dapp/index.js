import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Marketplace from '../../containers/Marketplace';

import './dapp.scss';

const Dapp = ({
  drizzle,
  currentAccount,
  fetchFidelityContract
}) => {
  const contract = drizzle.contracts.FidelityToken;

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    media: {
      height: 140,
    },
  }));
  const classes = useStyles();

  useEffect(() => {
    fetchFidelityContract(contract);
  }, []);

  return (
    <div className="dapp">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" align="right" className={classes.title}>
              {currentAccount}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Marketplace
      />
    </div>
  );
};

Dapp.propTypes = {
  account: PropTypes.any.isRequired,
  drizzle: PropTypes.any.isRequired,
  drizzleState: PropTypes.any.isRequired,
};

export default Dapp;
