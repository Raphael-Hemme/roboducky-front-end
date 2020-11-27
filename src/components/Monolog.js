import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: "100%",
      height: "100%",
    },
  },
  textInput: {
    width: "100%",
    height: "100%",
  }
}));

const Monolog = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">

      <div>
        <TextField
          id="outlined-multiline-static"
          className={classes.textInput}
          label="Your Thoughts"
          multiline
          rows={4}
          defaultValue="..."
          variant="outlined"
          
        />
      </div>
    </form>
  );
}

export default Monolog;