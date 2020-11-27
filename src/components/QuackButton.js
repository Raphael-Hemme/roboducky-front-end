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

const QuackButton = () => {
  const classes = useStyles();

  return (
      <Button
        variant="contained"
        color="primary"
        className={classes.buttonStyle}
        startIcon={<SaveIcon />}
      >
        Quack!
      </Button>
  );
}

export default QuackButton;