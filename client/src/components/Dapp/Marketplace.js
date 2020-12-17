import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import testImg from '../../assets/citation_NH_mindPower.jpg';

const Marketplace = () => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginLeft: '10em',
      marginTop: '4em',
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();

  const handleBuy = () => {
    console.log('buy');
    axios.post('http', 1000)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <Card raised className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={testImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Audio Book Reader
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Some text about product details
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
      </CardActions>
    </Card>
  );
};

export default Marketplace;
