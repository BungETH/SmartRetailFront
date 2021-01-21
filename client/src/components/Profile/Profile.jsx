//npm import
import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";
//local import
import "./profile.scss";



const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    flexGrow: 1,
  },
});

const Profile = ({ balance }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div className="container">
      
      <div className="profile-informations">
        <i className="name">Damien Heloise</i>
        <Paper>
          <CardMedia className={classes.media} image={""}/>
        </Paper>
        <i className="tokens">{balance}</i>
        <MobileStepper
          variant="progress"
          steps={6}
          position="static"
          activeStep={activeStep}
          className={classes.root}
          /*nextButton={
            
          }
          backButton={
            
          }*/
        />
      </div>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
