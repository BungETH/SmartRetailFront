import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    alignSelf: 'center',
  },
  content: {
    margin: '6px 0',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
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
    flexBasis: '33.33%',
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
  fetchOrders,
}) => {
  const classes = useStyles();

  // useEffect(() => {
  //   fetchOrders();
  // }, []);

  return (
    <div className={classes.root}>
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
                <Typography className={classes.heading}>Command number</Typography>
                <Typography className={classes.secondaryHeading}>{order.referenceId}</Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.heading}>price</Typography>
                <Typography className={classes.secondaryHeading}>{order.price}</Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.heading}>status</Typography>
                <Typography className={classes.secondaryHeading}>{order.status}</Typography>
              </div>
            </AccordionSummary>
            <Divider />
            <AccordionActions>
              {order.status === 'Payed' && (
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
                Payed
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
