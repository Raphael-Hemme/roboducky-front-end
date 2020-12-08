import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
  buttonStyle: {
    color: "white",
    backgroundColor: "primary"
  }
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0} justify="center">
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} style={{ justifyContent: "center", display: "flex" }}>
            
              <RoboduckyVisual size="400"/>

          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={0}>
              <Typography component="h1" variant="h5">
                404
              </Typography>
              <br />
              <Typography component="h1" variant="h6">
                The site you are looking for, does not seem to be there.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={0}>
              <Button component={Link} to={'/'}
                  variant="contained"
                  color="primary"
                  className={classes.buttonStyle}
              >
                home
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default NotFound;