//npm import
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import CardMedia from '@material-ui/core/CardMedia';
//local import
import "./slideshow.scss"

import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      
      width: theme.spacing(175),
      height: theme.spacing(50),
    },
  },
  
  media: {
    width: theme.spacing(175),
    height: theme.spacing(50),
  },
  informations: {
    width: theme.spacing(175),
    height: theme.spacing(15),
  }
}));
const SlideShow = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="container-slideshow">
      <Paper elevation={1}><CardMedia className={classes.media} image="https://www.vip.virginia.gov/media/vipvirginiagov/images/events/wingemtwo.jpg"/></Paper>
      <div className={classes.rootButton} id="button-slideshow">
        <Button className="join" variant="contained" color="secondary">
          JOIN NOW
        </Button>
      </div>
      <div id="informations" className={classes.informations}>
        <div className="item"><h4>Money Back</h4><p>10 Days Money Back Guarentee</p></div>
        <div className="item"><h4>Free Shipping</h4><p>Shipping on orders over 99$</p></div>
        <div className="item"><h4>Special Sale</h4><p>Extra 5$ off on all items</p></div>
      </div>
    </div>
  );
};

SlideShow.propTypes = {};

export default SlideShow;
