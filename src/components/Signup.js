import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RoboduckyVisualBig from './RoboDuckyVisualBig';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


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
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
  },
}));

const Signup = ({onSignup, onSetNewDucky, newDuckyState}) => {
  const classes = useStyles();
  console.log(newDuckyState ? newDuckyState : 'hier kommt nix an')
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0} justify="center">
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} style={{ justifyContent: "center", display: "flex" }}>
            
              <RoboduckyVisualBig />

          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={0}>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>

              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="userName"
                  label="Username"
                  name="userName"
                  autoFocus
                  onChange={e => onSetNewDucky(e)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="duckyName"
                  name="duckyName"
                  label="Name your Ducky"
                  onChange={e => onSetNewDucky(e)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="userEmail"
                  label="E-Mail"
                  name="userEmail"
                  onChange={e => onSetNewDucky(e)}
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
                  onChange={e => onSetNewDucky(e)}
                />
              </form>

            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={0}>
              <Button component={Link} to={'/'}
                variant="contained"
                color="primary"
                className={classes.buttonStyle}
              >
                Home
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={0}>
              <Button 
                variant="contained"
                color="primary"
                className={classes.buttonStyle}
                onClick={() => onSignup()}
              >
                Sign up
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Signup;

