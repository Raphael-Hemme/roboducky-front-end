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

const QuackButton = ({monologText, currentSolution, currentTags, currentMood, onSaveConversation}) => {
  const classes = useStyles();

  return (
      <Button
        variant="contained"
        color="primary"
        className={classes.buttonStyle}
        // startIcon={<SaveIcon />}
        onClick={() => onSaveConversation()}
      >
        Quack!
      </Button>
  );
}

export default QuackButton;