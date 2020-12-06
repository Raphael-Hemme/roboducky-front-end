import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    color: "white",
    backgroundColor: "primary"
  }
}));

const QuackButton = ({monologText, currentSolution, currentTags, currentMood}) => {
  const classes = useStyles();

  const loggingFuntion = () => {
    console.log("your Issue: ", monologText)
    console.log("your Solution: ", currentSolution)
    console.log("your Tags: ", currentTags)
    console.log("your Mood: ", currentMood)
  }

  return (
      <Button
        variant="contained"
        color="primary"
        className={classes.buttonStyle}
        // startIcon={<SaveIcon />}
        onClick={() => loggingFuntion()}
      >
        Quack!
      </Button>
  );
}

export default QuackButton;