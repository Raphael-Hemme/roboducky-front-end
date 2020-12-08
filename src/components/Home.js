import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';


import {userContext} from '../utils/auth'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RoboduckyVisual from './RoboDuckyVisual';
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
    userContext()
    .then(res => onCurrentDucky(res.data))
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
          <Grid item xs={12} style={{ justifyContent: "center", display: "flex" }}>
            
              <RoboduckyVisual size='400'/>

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
          <Grid item xs={3}>
            <Paper className={classes.paper} elevation={0}>
              <Button 
                variant="contained"
                color="primary"
                className={classes.dontButtonStyle}
                onClick={() => onLogout()}
              >
                log out
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper} elevation={0}>
              <Button 
                variant="contained"
                color="primary"
                className={classes.buttonStyle}
                component={Link} to={'/previous-conversations'}
              >
                remind me
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper} elevation={0}>
              <Button 
                variant="contained"
                color="primary"
                className={classes.pleaseButtonStyle}
                component={Link} to={'/review-and-options'}
              >
                listen
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Home;





/* ///////// Get human readable time stamp /////////
const getTimeStamp = () => {
  const date = Date(Date.now()); 
  let today = new Date();
  let day = today.getDate() + "";
  let month = (today.getMonth() + 1) + "";
  let year = today.getFullYear() + "";
  let hour = today.getHours() + "";
  let minutes = today.getMinutes() + "";
  let seconds = today.getSeconds() + "";

  const checkZero = (data) => {
    if(data.length == 1){
      data = "0" + data;
    }
    return data;
  }

  day = checkZero(day);
  month = checkZero(month);
  year = checkZero(year);
  hour = checkZero(hour);
  minutes = checkZero(minutes);
  seconds = checkZero(seconds);

  const timeStamp = day + "." + month + "." + year + " - " + hour + ":" + minutes + ":" + seconds;
  return timeStamp
} */