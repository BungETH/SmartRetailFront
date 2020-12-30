import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//local import
import testImg from '../../assets/citation_NH_mindPower.jpg';

const Marketplace = ({
  sendProduct,
  sendBalance,
  title,
  description,
  price,
  tokenBalance,
  productId,
}) => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginLeft: '10em',
      marginTop: '4em',
    },
    media: {
      height: 140,
    },
    price: {
      paddingLeft: '1em',
    },
  });

  const classes = useStyles();
  const handleBuy = () => {
    sendProduct(productId);
    setTimeout(() => { 
      sendBalance(33);
    }, 3000);
  };
  return (
    <div>
      <Card raised className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={testImg}
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
        <CardActions>
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
      <Typography gutterBottom variant="h5" component="h2">
        {tokenBalance}
      </Typography>
    </div>
  );
};

Marketplace.propTypes = {
  drizzle: PropTypes.object,
  account: PropTypes.string,
  tokenAmount: PropTypes.number,
  handleBuy: PropTypes.func
}

export default Marketplace;
