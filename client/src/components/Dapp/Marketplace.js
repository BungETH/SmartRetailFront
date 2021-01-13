import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Marketplace = ({
  sendProduct,
  sendBalance,
  fetchTransactionParams,
  title,
  img,
  description,
  productId,
  price,
}) => {
  const useStyles = makeStyles({
    homeCards: {
      width: 345,
      height: 500,
      margin: '4em',
      marginTop: '5em',
    },
    media: {
      height: 240,
    },
    price: {
      paddingLeft: '1em',
    },
  });

  const sellerAddress = '0x4c0FeD497BC2868E1010C8eC8bEfcfCd3013601b';
  const classes = useStyles();
  const handleBuy = () => {
    sendProduct(productId);
    setTimeout(() => {
      fetchTransactionParams(sellerAddress, price);
    }, 2000);
    setTimeout(() => {
      sendBalance(35);
    }, 3000);
  };
  return (
    <div>
      <Card raised className={classes.homeCards}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actions}>
          <Button
            size="small"
            color="primary"
            onClick={handleBuy}
          >
            Buy
          </Button>
          <Button size="small" color="primary">
            <Link to="/product">
              Show details
            </Link>
          </Button>
          <Typography
            className={classes.price}
            variant="h4"
            color="primary"
            component="p"
          >
            {price} $
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
};

Marketplace.propTypes = {
  description: PropTypes.any.isRequired,
  fetchTransactionParams: PropTypes.func.isRequired,
  img: PropTypes.any.isRequired,
  price: PropTypes.any.isRequired,
  productId: PropTypes.any.isRequired,
  sendBalance: PropTypes.func.isRequired,
  sendProduct: PropTypes.func.isRequired,
  title: PropTypes.any.isRequired,
};

export default Marketplace;
