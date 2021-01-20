//npm import
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
//local import
import "./slideshow.scss"

import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      width: theme.spacing(175),
      height: theme.spacing(80),
      justifyContent: 'center',
    },
  },
  media: {
    // width: theme.spacing(175),
    width: '100%',
    height: '80vh',
  },
  img_text: {
    color: 'white',
    fontSize: 'bolder',
    position: 'absolute',
    left: '-2em',
    top: '-1em',
  },
  informations: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    height: theme.spacing(13),
    backgroundColor: 'transparent',
    fontStyle: 'italic',
  },
}));
const SlideShow = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="container-slideshow">
      <img
        className={classes.media}
        alt="futuristic"
        src="https://koozarch.ams3.digitaloceanspaces.com/2018/10/05_a662_w17_oluhill_04_03_car-roundabout.jpg"
      />
      <div id="button-slideshow">
        <Typography
          className={classes.img_text}
          gutterBottom
          variant="h3"
          component="h2"
        >
          Spread innovation
        </Typography>
        <Button className="join" variant="contained" color="secondary">
          Discover post-crowdfunding innovations
        </Button>
      </div>
      <div id="informations" className={classes.informations}>
        <div className="item"><h4>Reward</h4><p>Get free FDLT tokens for each purchase</p></div>
        <div className="item"><h4>Crypto & Fiat paiements</h4><p>Choose your way to pay</p></div>
        <div className="item"><h4>Vote</h4><p>Submit and vote for the products you have chosen</p></div>
      </div>
    </div>
  );
};

SlideShow.propTypes = {};

export default SlideShow;
