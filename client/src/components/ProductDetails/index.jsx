//npm import
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ShoppingBasketTwoToneIcon from "@material-ui/icons/ShoppingBasket";
//local import
import "./product.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& #image": {
      margin: theme.spacing(1),
      width: theme.spacing(70),
      height: theme.spacing(70),
      borderRadius: theme.spacing(2),
    },

    "& #filled-read-only-input ": {
      margin: theme.spacing(2),
      width: theme.spacing(70),
      heigth: theme.spacing(5),
      borderRadius: theme.spacing(2),
      fontSize: theme.spacing(4),
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
}));

const ProductDetails = ({ producTitle, description, imgUrl }) => {
  const classes = useStyles();

  return (
    <div id="container" className={classes.root}>
      <Paper id="image" elevation={3}>
        {imgUrl}
      </Paper>
      <div id="decriptionField">
        <TextField
          id="filled-read-only-input"
          defaultValue="Product Name"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        >
          {producTitle}
        </TextField>
        <Paper id="description" elevation={0}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A error
          magni inventore explicabo pariatur nesciunt, blanditiis eum modi
          repellat nam omnis, vero laborum corrupti rem fugit repudiandae
          expedita ex. Cum?
        </Paper>
        <div className="price-wrap">
          <Paper id="price" elevation={3}>
            Price
          </Paper>
        </div>
        <div className="button-wrap">
          <Button
            id="button"
            variant="contained"
            color="primary"
            startIcon={<ShoppingBasketTwoToneIcon />}
            disableElevation
          >
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
