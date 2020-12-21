import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';


import { userContext } from '../utils/auth'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RoboduckyVisualBig from './RoboDuckyVisualBig';
import grey from '@material-ui/core/colors/grey';
import teal from '@material-ui/core/colors/teal';

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
  },
  dontButtonStyle: {
    color: "white",
    backgroundColor: grey[500],
  },
  pleaseButtonStyle: {
    color: "white",
    backgroundColor: teal[400],
  }
}));

const Home = ({currentDucky, onCurrentDucky, onLogout}) => {
  const classes = useStyles();

  useEffect(() => {
    /*const userContextVar = userContext() // changed from just calling it like a function and then using it as if it returned apromise to this way of passing it to a new variable. Have to think through how to proceed from here. But not with .then  ...
    console.log("trying to get to the userContext in Home: ", userContextVar.data.userName)
    onCurrentDucky(userContextVar)*/
    userContext()
    .then(res => onCurrentDucky(res.data))
    .then(res => console.log(res.data))
    .catch(error => console.log(error.message))
  }, []);

  console.log(currentDucky ? currentDucky.userName : 'No ducky has landed.')
  
  const daytimeGreeting = () => {
    const date = Date(Date.now());
    let today = new Date();
    let hour = today.getHours() + "";

    if (hour >= 0 && hour <= 11) {
      return 'Good morning '
    } else if (hour >= 11 && hour <= 18) {
      return 'Hello '
    } else if (hour >= 18 && hour <= 23) {
      return 'Good evening '
    }
  }

  let personalGreeting = 'Hey there'
  currentDucky ? personalGreeting = `${daytimeGreeting()}${currentDucky.userName}` : personalGreeting = 'Hey there';
  

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0} justify="center">
        <Grid container spacing={3} justify="center">
          <Grid
            item
            xs={12}
            style={{ justifyContent: "center", display: "flex" }}
          >
            <RoboduckyVisualBig />
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={0}>
              <Typography component="h1" variant="h5">
                {personalGreeting}
              </Typography>
              <br />
              <Typography component="h1" variant="h6">
                I hope you have a nice day. <br />
              </Typography>
              <Typography variant="body2" gutterBottom>
                <br />
                I'm here if you need me.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              
                <Grid item>
                  <Paper className={classes.paper} elevation={0}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.dontButtonStyle}
                      onClick={() => onLogout()}
                      style={{maxWidth: '7rem', maxHeight: '2rem', minWidth: '7rem', minHeight: '2rem'}}
                    >
                      log out
                    </Button>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className={classes.paper} elevation={0}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.buttonStyle}
                      component={Link}
                      to={"/previous-conversations"}
                      style={{maxWidth: '7rem', maxHeight: '2rem', minWidth: '7rem', minHeight: '2rem'}}
                    >
                      remind me
                    </Button>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className={classes.paper} elevation={0}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.pleaseButtonStyle}
                      component={Link}
                      to={"/listening"}
                      style={{maxWidth: '7rem', maxHeight: '2rem', minWidth: '7rem', minHeight: '2rem'}}
                    >
                      listen
                    </Button>
                  </Paper>
                </Grid>

            </Grid>
          </Grid>

        </Grid>
      </Paper>
    </div>
  );
}

export default Home;

