import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    color: "white",
    backgroundColor: "primary"
  }
}));

const SaveButton = ({onSaveConversation}) => {
  const classes = useStyles();

  return (
      <Button
        variant="contained"
        color="primary"
        className={classes.buttonStyle}
        onClick={() => onSaveConversation()}
      >
        save
      </Button>
  );
}

export default SaveButton;