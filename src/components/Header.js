import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Headset } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  title: {
    marginLeft: theme.spacing(2)
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Headset />
        <Typography className={classes.title} variant="h6" component="h1">
          Apollo Music App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
