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
}));


const SingleColumnLayout = ({children}) => {

  const classes = useStyles();

  return (
    <div className="Welcome">

      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} lg={2}>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Paper className={classes.paper}>{children}</Paper>
        </Grid>
        <Grid item xs={12} lg={2}>
        </Grid>
      </Grid>
      </div>
  );
}

export default SingleColumnLayout;