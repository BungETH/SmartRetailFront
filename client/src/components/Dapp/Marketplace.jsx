//npm import
import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
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
  sendProductPrice,
  title,
  description,
  price,
  //tokenBalance,
  productId,
}) => {
  /*const fetchProducts = async () => {
    await axios.get(`https://salty-citadel-63624.herokuapp.com/api/products?page=1`)
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });
  }*/

  // const contract = drizzle.contracts.FidelityToken; 
  //const price = 1000;
  // const claimToken = async (price) => {
  //   const getToken = await contract.methods.claim(price*0.05).send({gas: 900000, from: account });
  //   console.log(getToken.events.Transfer.returnValues.value);
  //   getFidelityTokens(getToken.events.Transfer.returnValues.value)
  // }
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

  // const handleBuy = async () => {
  //   const headers = {
  //     'Content-Type': 'text/plain',
  //     'Access-Control-Allow-Origin': '*',
  //   };
  //   console.log('buy');
  //   await axios.post(`https://cors-anywhere.herokuapp.com/https://salty-citadel-63624.herokuapp.com/base?score=${price}`, { headers }, { price })
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.data);
  //     });
  // };
  const handleBuy = () => {
    // fetchProductPrice(price);
    sendProductPrice(productId);
  }
  /*useEffect(() => {
    fetchProducts();
  }, []);*/

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
          <Button size="small" color="primary" onClick={handleBuy}>
            Buy
          </Button>
          <Button size="small" color="primary">
            Show details
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
  drizzle: PropTypes.object,
  account: PropTypes.string,
  tokenAmount: PropTypes.number,
  handleBuy: PropTypes.func
}

export default Marketplace;
