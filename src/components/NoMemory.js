import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  buttonStyle: {
    color: "white",
    backgroundColor: "primary"
  }
}));

const NoMemory = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} variant="outlined">
      <Typography component="h2" variant="h5">
        I don't seem to remember any previous conversation
      </Typography>
      <br />
      <Typography component="h2" variant="h6">
        But how about just starting one?
      </Typography>
    </Paper>
  );
}

export default NoMemory;