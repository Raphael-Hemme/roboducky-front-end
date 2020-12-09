import React from 'react';
import { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { setAuthHeaders } from '../utils/auth'
import axios from 'axios';
import NoMemory from './NoMemory';
import SingleConvCard from './SingleConvCard';

import Chip from '@material-ui/core/Chip';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import teal from '@material-ui/core/colors/teal';



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
  tagPaper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
    color: "white",
    backgroundColor: teal[400],
  },
}));

const SearchConversationsByTags = () => {
  const classes = useStyles();

  const [ tagedDuckyMemory, setTagedDuckyMemory ] = useState([]);
  const [ searchString, setSearchString ] = useState(null);
  const [ tagsToSearch, setTagsToSearch ] = useState([]);
  const [ inputFieldValue, setInputFieldValue ] = useState([]);

  
  useEffect(() => {
    setAuthHeaders()
    let searchString = `/conversations/tagsearch?tags[]=boenito2&tags[]=JS`
    axios.get('/conversations')
    .then(res => setTagedDuckyMemory(res.data))
    .catch(error => console.log(error.message))
  }, []);

  const handleInput = (data) => {
    setInputFieldValue(data)
  }

  const [chipData, setChipData] = useState([
    /*     { key: 0, label: 'Angular' },
        { key: 1, label: 'jQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Vue.js' }, */
      ]);
    
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };


  const handleAdd = (e) => {
    //let intermediaryChipArray = chipData
    const randomKey = () => {
      return Math.random() * 1000000;
    }
    //intermediaryChipArray.push({"key": randomKey(), "label": currentTags})
    
    setChipData(prevChipData => [...prevChipData, {"key": randomKey(), "label": inputFieldValue}]);
  };


  console.log(tagedDuckyMemory ? tagedDuckyMemory : 'Does not work')
//  console.log(duckyMemory ? duckyMemory[0].convDescription : 'Does not work')
//  console.log(duckyMemory ? duckyMemory.map(el => el.convDate) : 'Does not work')

//  let myShort_convDescription =  duckyMemory.convDescription[1].split(' ').slice(200).join(' ');
//  console.log(duckyMemory ? shortenDescription(duckyMemory[2].convDescription) : 'Does not work')

  return (
      <div className={classes.root}>

        <>
        <Grid container className={classes.queryField} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
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
                      onChange={(e) => handleInput(e)}
                    />
                  </form>
                </Paper>

              </Grid>
              <Grid item xs={12}>
                <Button onClick={(e) => handleAdd(e)}>
                  Add
                </Button>
              </Grid>
              <Grid item xs={12}>

                  <Paper component="ul" className={classes.tagPaper}>
                    {chipData.map((data) => {
                      return (
                        <li key={data.key}>
                          <Chip
                            label={data.label}
                            onDelete={
                              handleDelete(data)
                            }
                            className={classes.chip}
                          />
                        </li>
                      );
                    })}
                  </Paper>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>

      <Paper className={classes.paper} variant="outlined" style={{maxHeight: 500, overflow: 'auto'}}>
        <Grid container spacing={3}>

          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={0}></Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={0}></Paper>
          </Grid>

          <Grid item xs={12}>

          { tagedDuckyMemory.length
          ? tagedDuckyMemory.map((el) => <SingleConvCard memoryElement={el}/>) 
          : <NoMemory />  }
            
          </Grid>

        </Grid>
      </Paper>
    </div>
  );
}

export default SearchConversationsByTags;