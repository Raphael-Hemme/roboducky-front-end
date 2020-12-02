import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  monologContainer: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "23ch"
  },
  input: {
    height: "80vh",
    fontSize: "2em"
  }
}));

const Monolog = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.monologContainer} >

      <form noValidate autoComplete="off">

      <TextField
        id="monologContainer"
        label="Your Thoughts"
        variant="outlined"
        style={{ margin: 8 }}
        placeholder="..."
        helperText="What are you struggling with"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
        inputProps={{ className: classes.input }}
      />
      </form>
    </div>
  );
}

export default Monolog;