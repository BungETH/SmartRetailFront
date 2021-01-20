// npm import
import React from "react";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import Typography from "@material-ui/core/Typography";
import DevicesIcon from "@material-ui/icons/Devices";
import WatchIcon from "@material-ui/icons/Watch";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import Toolbar from "@material-ui/core/Toolbar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

//local import
import "../AsideCategory/asideCategory.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  rootBar: {
    flexGrow: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

}));

const AsideCategory = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.rootBar}>
        <div position="static">
          <Toolbar className="toolbar">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Categories
            </Typography>
          </Toolbar>
        </div>
      </div>
      <Paper className={classes.root}>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <LocalMallIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Technology</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <DevicesIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Design</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <WatchIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              Art
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <FavoriteBorderIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              Ecology
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ChildCareIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              Game
            </Typography>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
};

export default AsideCategory;
