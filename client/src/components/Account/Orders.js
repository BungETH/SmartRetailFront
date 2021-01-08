import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    alignSelf: 'center',
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

const Orders = ({ userOrders }) => {
  const classes = useStyles();
  console.log(userOrders[0].orderId);

  return (
    <div className={classes.root}>
      {userOrders[0].orderId !== 0 && (
        userOrders.map((order) => (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div className={classes.column}>
                <Typography className={classes.heading}>Command number</Typography>
                <Typography className={classes.secondaryHeading}>{order.orderId}</Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.heading}>seller</Typography>
                <Typography className={classes.secondaryHeading}>{order.seller.slice(0, 10)}{order.seller.length > 10 && ('...')}</Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.heading}>price</Typography>
                <Typography className={classes.secondaryHeading}>{order.amount.slice(0, 10)}{order.amount.length > 10 && ('...')}</Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.heading}>status</Typography>
                <Typography className={classes.secondaryHeading}>{order.state}</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <div className={classes.column} />
              <div className={classes.column}>
                <Chip label="Barbados" onDelete={() => {}} />
              </div>
              <div className={clsx(classes.column, classes.helper)}>
                <Typography variant="caption">
                  Select your destination of choice
                  <br />
                  <a href="#secondary-heading-and-columns" className={classes.link}>
                    Learn more
                  </a>
                </Typography>
              </div>
            </AccordionDetails>
            <Divider />
            <AccordionActions>
              <Button size="small">Cancel</Button>
              <Button size="small" color="primary">
                Save
              </Button>
            </AccordionActions>
          </Accordion>
        )))}
    </div>
  );
};
export default Orders;
Orders.propTypes = {
  userOrders: PropTypes.arrayOf(
    PropTypes.shape({
      orderId: PropTypes.number.isRequired,
      seller: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      state: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
