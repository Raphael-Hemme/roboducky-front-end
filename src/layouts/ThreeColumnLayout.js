import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    padding: theme.spacing(2),
  }
}));


const ThreeColumnLayout = ({children}) => {


// Function to address individual children and position them in the layout grid.
// Components are wrapped with layout components in the Switch in App.js and need
// to be assigned keys as props that are used for addressing in this function.
  const getComponentByKey = (compKey) => {
    return children.filter((component) => {
      return component.key === compKey;
    })
  }


  const classes = useStyles();

  return (
    <div className="ThreeColumnLayout">

      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} lg={2} container
          direction="column"
          justify="center"
          alignItems="center"
          height="100%"
        >
          <Grid item xs={12} lg={12}>
            <Paper className={classes.paper}>
              {getComponentByKey('visual')}
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={6} lg={6}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={12} lg={2}>
          <Paper className={classes.paper}></Paper>
        </Grid>
      </Grid>
      </div>
  );
}

export default ThreeColumnLayout;

//<Paper className={classes.paper}></Paper>