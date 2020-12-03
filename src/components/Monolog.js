import React from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { light } from '@material-ui/core/styles/createPalette';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alighItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  heading: {
    color: theme.palette.primary.main
  }
}));

const Monolog = ({ onMonolog, monologText }) => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={12} component={Paper} elevation={0} square>
        <div className={classes.paper}>
        
          <Typography component="h1" variant="h5" className={classes.heading}>
            I'm Listening
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              multiline
              rows="7"
              fullWidth
              id="monolog"
              label="Your Thoughts"
              name="monolog"
              autoFocus
              onChange={e => onMonolog(e)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              onClick={() => console.log(monologText)}
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>

          </form>
        </div>
      </Grid>
    </Grid>
  )
}

export default Monolog;