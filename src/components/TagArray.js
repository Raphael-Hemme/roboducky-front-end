import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import teal from '@material-ui/core/colors/teal';


const useStyles = makeStyles((theme) => ({
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

const TagArray = ({ currentTags, onCurrentTags}) => {

  const classes = useStyles();

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
    let intermediaryChipArray = chipData
    const randomKey = () => {
      return Math.random() * 1000000;
    }
    intermediaryChipArray.push({"key": randomKey(), "label": currentTags})
    setChipData(intermediaryChipArray);
    console.log(chipData)
  };

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
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
                    onChange={(e) => onCurrentTags(e)}
                  />
                </form>
              </Paper>
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
  );
}


export default TagArray