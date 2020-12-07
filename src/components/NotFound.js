import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RoboduckyVisual from './RoboDuckyVisual';

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

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0} justify="center">
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} style={{ justifyContent: "center", display: "flex" }}>
            
              <RoboduckyVisual />

          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={0}>
              <Typography component="h1" variant="h5">
                Hey there! I'm roboducky
              </Typography>
              <br />
              <Typography component="h1" variant="h6">
              Welcome to roboducky.dev! <br />
              </Typography>
              <Typography variant="body2" gutterBottom>
                Roboducky is the digital continuation of a long standing tradition in software development 
                - the practice of talking to a rubberduck when you have to figure out how to fix an issue or 
                solve a problem. <br /><br />
                While offering you the same experience of patiently listening to your troubles, roboducky 
                actually remembers your conversations for future reference in case you stumble upon a similar
                problem again.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={0}>
              <Typography component="h1" variant="h5">
                sign up
              </Typography>

            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={0}>
            <Typography component="h1" variant="h5">
                log in
              </Typography>

            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default NotFound;