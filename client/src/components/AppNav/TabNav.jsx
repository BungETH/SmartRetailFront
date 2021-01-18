//npm import
import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

//local import
import "./tabNav.scss"
import { Link } from "react-router-dom";
const TabNav = () => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className="paper-nav">
      <Tabs
        className="tab-nav"
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label=""
      >
        <Link to="/"><Tab label="HOME" /></Link>
        <Tab label="CLOTHING" />
        <Tab label="ELECTRONICS" />
        <Tab label={`HEALTH & BEAUTY`} />
        <Tab label="WATCHES" />
        <Tab label={`KIDS & BABIES`} />
      </Tabs>
    </Paper>
  );
};

export default TabNav;
