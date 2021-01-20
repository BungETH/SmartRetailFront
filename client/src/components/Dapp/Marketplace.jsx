// npm import
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
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import clsx from 'clsx';

// local import
import AsideCategory from '../AsideCategory/AsideCategory';

const Marketplace = ({
  sendProduct,
  title,
  img,
  productId,
  price,
}) => {
  const useStyles = makeStyles((theme) => ({
    homeCards: {
      width: 345,
      height: 500,
      margin: '5em 4em 1em 4em',
    },
    media: {
      height: 400,
      position: 'relative',
      paddingTop: 15,
    },
    outCard_container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'baseline',
    },
    typo: {
      fontSize: '1.2em',
    },
    shape: {
      backgroundColor: theme.palette.secondary.main,
      width: 60,
      height: 60,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop: '20px',
      fontSize: '18px',
      position: 'absolute',
      right: '1px',
    },
    shapeCircle: {
      borderRadius: '50%',
    },
    popup: {
      position: 'relative',
      left: '280px',
    },
  }));

  const classes = useStyles();
  const circle = (
    <div id="notification" className={clsx(classes.shape, classes.shapeCircle)}>
      NEW
    </div>
  );
  return (
    <div className="product-gallery">
      <Link to={`/product/${productId}`}>
        <Card className={classes.homeCards}>
          <CardActionArea>
            <CardMedia
              id="test"
              className={classes.media}
              image={img}
              title="products"
            >
              {circle}
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
      <div className="rating">
        <i className="good">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </i>
        <i className="bad"><StarBorderIcon /></i>
      </div>
      <div className={classes.outCard_container}>
        <Button
          className={classes.typo}
          variant="contained"
          color="primary"
          onClick={() => sendProduct(productId, price)}
        >
          Buy
        </Button>
        <Typography variant="h4" color="primary" component="p">
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
