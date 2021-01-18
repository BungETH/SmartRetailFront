//npm import
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ShoppingBasketTwoToneIcon from "@material-ui/icons/ShoppingBasket";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CardMedia from "@material-ui/core/CardMedia";
//local import
import "./product.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& #image": {
      margin: theme.spacing(1),
    },

    "& #filled-read-only-input ": {
      margin: theme.spacing(2),
      width: theme.spacing(70),
      heigth: theme.spacing(15),
      fontSize: theme.spacing(5),
    },
    "& #description": {
      margin: theme.spacing(1),
      width: theme.spacing(70),
      height: theme.spacing(30),
      borderRadius: theme.spacing(2),
    },
    "& .button-wrap": {
      width: theme.spacing(70),
      heigth: theme.spacing(5),
    },
    "& #button": {
      width: theme.spacing(35),
    },
    "& .price-wrap": {
      width: theme.spacing(70),
      heigth: theme.spacing(70),
    },
    "& #price": {
      width: theme.spacing(20),
      height: theme.spacing(6),
    },
  },
  media: {
    height: 504,
  },
}));

const ProductDetails = ({ fetchItem, product, handleBuy }) => {
  const classes = useStyles();

  let { id } = useParams();

  useEffect(() => {
    fetchItem(id);
  }, []);

  const { imgUrl, title, description, unitPrice } = product;

  return (
    <div id="container" className={classes.root}>
      <Paper id="image" elevation={3}>
        <CardMedia className={classes.media} image={imgUrl} />
      </Paper>
      <div id="decriptionField">
        <Paper id="filled-read-only-input" elevation={2}>
          {title}
        </Paper>
        <Paper id="description" elevation={0}>
          {description}
        </Paper>
        <div className="price-wrap">
          <Paper id="price" elevation={3}>
            {unitPrice} <AttachMoneyIcon fontSize="medium"/>
          </Paper>
        </div>
        <div className="button-wrap">
          <Button
            id="button"
            variant="contained"
            color="primary"
            startIcon={<ShoppingBasketTwoToneIcon />}
            disableElevation
            onClick={() => handleBuy(id, unitPrice)}
          >
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  productTitle: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default ProductDetails;
