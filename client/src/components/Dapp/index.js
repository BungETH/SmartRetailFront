import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Marketplace from './Marketplace';

import './dapp.scss';

const Dapp = ({ drizzle, drizzleState, account }) => {
  // console.log(drizzle);
  // console.log(drizzleState);
  // console.log(account);
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

  return (
    <div className="dapp">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" align="right" className={classes.title}>
              {account}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Marketplace />
    </div>
  );
};

Dapp.propTypes = {
  account: PropTypes.any.isRequired,
  drizzle: PropTypes.any.isRequired,
  drizzleState: PropTypes.any.isRequired,
};

export default Dapp;
