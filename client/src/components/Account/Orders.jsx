import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Avatar from '@material-ui/core/Avatar';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    marginTop: '2em',
    alignSelf: 'center',
  },
  content: {
    margin: '6px 0',
  },
  head: {
    width: '80%',
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white',
  },
  head_title: {
    marginLeft: '2em',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(17),
    color: '#3f51b5',
  },
  avatar: {
    position: 'relative',
    left: '-0.5em',
    width: '3em',
    height: '2em',
    fontSize: '1.5em',
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    width: '20%',
    flexBasis: '45.33%',
    color: '#3f51b5',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const Orders = ({
  orders,
  sendConfirmationDelivery,
  deleteOrder,
}) => {
  const classes = useStyles();
  console.log(orders);

  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <Typography className={classes.head_title}>N°</Typography>
        <Typography className={classes.head_title}>Price</Typography>
        <Typography className={classes.head_title}>Product</Typography>
        <Typography className={classes.head_title}>Status</Typography>
      </div>
      {orders !== null && (
        orders.map((order) => (
          <Accordion
            key={order.id}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  {order.referenceId}
                </Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  {order.price} $
                </Typography>
              </div>
              <div className={classes.column}>
                <img
                  className={classes.avatar}
                  alt="product miniature"
                  src={order.miniature}
                />
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>{order.status}</Typography>
              </div>
            </AccordionSummary>
            <AccordionActions>
              {order.status === 'Paied' && (
              <Button
                className={classes.order_button}
                size="small"
                variant="contained"
                color="secondary"
                onClick={() => deleteOrder(order.id)}
              >
                Delete order
              </Button>
              )}
              {order.status === 'Awaiting payment' && (
              <Button
                className={classes.order_button}
                size="small"
                color="primary"
                variant="contained"
                onClick={() => sendConfirmationDelivery(order.referenceId, order.id)}
              >
                Confirm Delivery
              </Button>
              )}
              {order.status !== 'Awaiting payment' && (
              <Button
                disabled
                className={classes.order_button}
                size="small"
                color="primary"
                variant="contained"
              >
                Paied
              </Button>
              )}
            </AccordionActions>
          </Accordion>
        )))}
    </div>
  );
};

export default Orders;

Orders.defaultProps = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      referenceId: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
    }).isRequired,
  ),
  sendConfirmationDelivery: PropTypes.func.isRequired,
};
