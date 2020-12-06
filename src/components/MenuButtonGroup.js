import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import EditMenu from './EditMenu';
import QuackButton from './QuackButton';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const MenuButtonGroup = () => {
  const classes = useStyles();

  return (
    <div className="SingleColumnLayout">

      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={4} lg={12} className={classes.button} variant="outlined">
          <EditMenu />
        </Grid>
        <Grid item xs={4} lg={12} className={classes.button} variant="outlined">
          <EditMenu />
        </Grid>
        <Grid item xs={4} lg={12} className={classes.button} variant="outlined">
          <QuackButton />
        </Grid>
      </Grid>
      </div>
  );
}


export default MenuButtonGroup;