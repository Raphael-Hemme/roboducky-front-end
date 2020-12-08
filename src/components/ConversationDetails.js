import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'justify',
    color: theme.palette.text.secondary,
  },
}));

const ConversationDetails = ({ monologText, currentSolution, currentTags, currentMood }) => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Paper className={classes.paper} variant="outlined">
        <Grid container spacing={3}>

          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={0}></Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={0}><Typography variant="body1" align="right" gutterBottom>Date</Typography></Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper} variant="outlined">
              <Typography component="h1" variant="h5">
                Your Issue
              </Typography>
              <Divider />
              <br />
              <Typography variant="body1" gutterBottom>
                {monologText ? {monologText} : ' '}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper} variant="outlined">
              <Typography component="h1" variant="h5">
                Your Solution
              </Typography>
              <Divider />
              <br />
              <Typography variant="body1" gutterBottom>
                {currentSolution ? {currentSolution} : ' '}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={classes.paper} variant="outlined">
              <Typography component="h1" variant="h5">
                Tags
              </Typography>
              <Divider />
              <br />
              <Typography variant="body1" gutterBottom>
              {currentTags ? {currentTags} : ' '}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={classes.paper} variant="outlined">
              <Typography component="h1" variant="h5">
                Mood
              </Typography>
              <Divider />
              <br />
              <Typography variant="body1" gutterBottom>
                {currentMood ? {currentMood} : ' '}
              </Typography>
            </Paper>
          </Grid>

        </Grid>
      </Paper>
    </div>
  );
}

export default ConversationDetails;





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