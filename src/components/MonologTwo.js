import React, { useContext, useState}  from 'react';


///// MUI imports /////
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';



import ConversationContext from '../contexts/ConversationContext';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'justify',
    color: theme.palette.text.secondary,
  },
  heading: {
    color: theme.palette.primary.main
  },
}));

const MonologTwo = ({ onMonolog, onCurrentSolution, onCurrentTags, onCurrentMood }) => {
  const classes = useStyles();

//  const currentConversation = useContext(ConversationContext);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} variant="outlined" style={{maxHeight: '100%', overflow: 'auto'}}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={0}>
              <Typography component="h1" variant="h5" className={classes.heading} align="center">
                I'm listening
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={0}>
              <Typography component="h1" variant="h5">
                Your Issue
              </Typography>
              <Divider />
              <br />
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  multiline
                  rows="7"
                  fullWidth
                  id="monolog"
                  label="Your Thoughts"
                  name="monolog"
                  autoFocus
                  onChange={e => onMonolog(e)}
                />

              </form>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={0}>
              <Typography component="h1" variant="h5">
                Your Solution
              </Typography>
              <Divider />
              <br />
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  multiline
                  rows="7"
                  fullWidth
                  id="solution"
                  label="Your Solution"
                  name="solution"
                  autoFocus
                  onChange={e => onCurrentSolution(e)}
                />
              </form>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={0}>
              <Typography component="h1" variant="h5">
                Tags
              </Typography>
              <Divider />
              <br />
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  multiline
                  rows="1"
                  fullWidth
                  id="tags"
                  label="Tags"
                  name="tags"
                  autoFocus
                  onChange={e => onCurrentTags(e)}
                />
              </form>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={0}>
            <Typography component="h1" variant="h5">
                Mood
              </Typography>
              <Divider />
              <br />
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  multiline
                  rows="1"
                  fullWidth
                  id="mood"
                  label="Your mood"
                  name="mood"
                  autoFocus
                  onChange={e => onCurrentMood(e)}
                />
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default MonologTwo;





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