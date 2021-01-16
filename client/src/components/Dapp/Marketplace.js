import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Marketplace = ({
  sendProduct,
  title,
  img,
  productId,
  price,
}) => {
  const useStyles = makeStyles({
    homeCards: {
      width: 345,
      height: 500,
      margin: '5em 4em 1em 4em',
    },
    media: {
      height: 400,
    },
    outCard_container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: '4em',
      alignItems: 'baseline',
    },
    typo: {
      marginRight: '6em',
      padding: '0.2em 1em',
    },
    price: {
      fontSize: '1.5em',
    },
  });

  const classes = useStyles();
  return (
    <div>
      <Card className={classes.homeCards}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={img}
            title="products"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <div className={classes.outCard_container}>
        <Button
          className={classes.typo}
          variant="contained"
          color="primary"
          onClick={() => sendProduct(productId, price)}
        >
          Buy
        </Button>
        <Typography
          className={classes.price}
          variant="h4"
          color="primary"
          component="p"
        >
          {price} $
        </Typography>
      </div>
    </div>
  );
};

Marketplace.propTypes = {
  description: PropTypes.any.isRequired,
  img: PropTypes.any.isRequired,
  price: PropTypes.any.isRequired,
  productId: PropTypes.any.isRequired,
  sendBalance: PropTypes.func.isRequired,
  sendProduct: PropTypes.func.isRequired,
  title: PropTypes.any.isRequired,
};

export default Marketplace;
