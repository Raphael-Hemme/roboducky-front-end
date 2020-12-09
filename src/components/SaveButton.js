import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';


const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    color: "white",
    backgroundColor: teal[400],
  }
}));

const SaveButton = ({onSaveConversation}) => {
  const classes = useStyles();

  return (
      <Button
        variant="contained"
        className={classes.buttonStyle}
        onClick={() => onSaveConversation()}
        style={{maxWidth: '7rem', maxHeight: '2rem', minWidth: '7rem', minHeight: '2rem'}}
      >
        save
      </Button>
  );
}

export default SaveButton;