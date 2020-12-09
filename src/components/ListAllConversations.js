import React from 'react';
import { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { login, logout, setAuthHeaders, saveConversation } from '../utils/auth'
import axios from 'axios';
import NoMemory from './NoMemory';
import SingleConvCard from './SingleConvCard';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    textAlign: 'justify',
    color: theme.palette.text.secondary,
  },
}));

const ListAllConversations = () => {
  const classes = useStyles();

  const [ duckyMemory, setDuckyMemory ] = useState([])
  
  useEffect(() => {
    setAuthHeaders()
    axios.get('/conversations')
    .then(res => setDuckyMemory(res.data))
    .catch(error => console.log(error.message))
  }, []);

/*   const shortenDescription = (longInput) => {
    if (longInput.split(' ').length >= 100 ) {
      let shortened = longInput.split(' ').slice(100).join(' ');
      return shortened
    } else {
      return longInput;
    }
  } */


  console.log(duckyMemory ? duckyMemory : 'Does not work')
//  console.log(duckyMemory ? duckyMemory[0].convDescription : 'Does not work')
//  console.log(duckyMemory ? duckyMemory.map(el => el.convDate) : 'Does not work')

//  let myShort_convDescription =  duckyMemory.convDescription[1].split(' ').slice(200).join(' ');
//  console.log(duckyMemory ? shortenDescription(duckyMemory[2].convDescription) : 'Does not work')

  return (
      <div className={classes.root}>
      <Paper className={classes.paper} variant="outlined" style={{maxHeight: 500, overflow: 'auto'}}>
        <Grid container spacing={3}>

          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={0}></Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={0}></Paper>
          </Grid>

          <Grid item xs={12}>

          { duckyMemory.length
          ? duckyMemory.map((el) => <SingleConvCard memoryElement={el}/>) 
          : <NoMemory />  }
            
          </Grid>

        </Grid>
      </Paper>
    </div>
  );
}

export default ListAllConversations;





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



