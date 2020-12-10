import React from 'react';
import { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { setAuthHeaders } from '../utils/auth'
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
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
    justifyContent: 'center',
    textAlign: 'justify',
    color: theme.palette.text.secondary,
  },
    tagPaper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
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
//  const [ tagsToSearch, setTagsToSearch ] = useState([]);
  const [ inputFieldValue, setInputFieldValue ] = useState([]);
//  const [ startSearch, setStartSearch ] = useState(false);


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
//    console.log('inside handleAdd', e)
    const randomKey = () => {
      return Math.random() * 1000000;
    }
    setChipData(prevChipData => [...prevChipData, {"key": randomKey(), "label": inputFieldValue}]);
  };


  const generateSearchString = () => {
    const endpoint = '/conversations/tagsearch'
    const searchparameters = chipData.map(el => `tags[]=${el.label}`);

    if (chipData.length > 1) {
      let innerSearchString = searchparameters.join('&');
      let compositeSearchString = endpoint + '?' + innerSearchString;
      return compositeSearchString
    } else {
      let compositeSearchString = endpoint + '?' + searchparameters[0];
      return compositeSearchString
    }
  }

  const handleTagedDuckyMemory = (data) => {
    let checkType = typeof data;
    if (checkType === "object" && data !== undefined)
      setTagedDuckyMemory(data)
  }

  useEffect(() => {
    setAuthHeaders()
    let axiosSearchString = searchString;
    axios.get(axiosSearchString)
    .then(res => handleTagedDuckyMemory(res.data))
    .catch(error => console.log(error.message))
  }, [searchString]);

  const handleInput = (e) => {
    setInputFieldValue(e.target.value)
  }



  const handleStartSearch = () => {
    setTagedDuckyMemory([])
    console.log('inside handleStartSearch')
    setSearchString(generateSearchString())
    console.log('inside handleStartSearch - searchstring: ', searchString)
    setInputFieldValue('')
  }

//  console.log(tagedDuckyMemory ? tagedDuckyMemory : 'Does not work')
  console.log(tagedDuckyMemory ? console.log(typeof tagedDuckyMemory) : 'Does not work')

  return (
      <div className={classes.root}>

        <>
        <Grid container className={classes.queryField} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <Grid item xs={12}>
              <Paper className={classes.paper} variant="outlined">
                <Paper className={classes.paper} elevation={0}>
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
                      value={inputFieldValue}
                      autoFocus
                      onChange={(e) => handleInput(e)}
                    />
                  </form>
                  <Paper className={classes.paper} elevation={0}>
                    <Button onClick={(e) => handleAdd(e)}
                      style={{maxWidth: '7rem', maxHeight: '2rem', minWidth: '7rem', minHeight: '2rem'}}>
                      Add
                    </Button>
                    <Button onClick={() => handleStartSearch()}
                      style={{maxWidth: '7rem', maxHeight: '2rem', minWidth: '7rem', minHeight: '2rem'}}>
                      Search
                    </Button>
                  </Paper>
                </Paper>
                <Paper component="ul" className={classes.tagPaper} elevation={0}>
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

          <Grid item xs={12}>
{/*          <Paper className={classes.paper} elevation={0}>Just to make it work</Paper>*/}
            {searchString && tagedDuckyMemory
            ? tagedDuckyMemory.map((el) => <SingleConvCard memoryElement={el}/>) 
            : <Paper className={classes.paper} elevation={0} >
                <Typography component="h1" variant="h5" align="center">
                  ...
                </Typography> 
              </Paper>
            } 
            
          </Grid>

        </Grid>
      </Paper>
    </div>
  );
}

export default SearchConversationsByTags;