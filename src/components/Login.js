import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RoboduckyVisual from './RoboDuckyVisual';
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

const Login = ({onLogin, onSetCredentials}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0} justify="center">
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} style={{ justifyContent: "center", display: "flex" }}>
            
              <RoboduckyVisual size='300'/>

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
                  id="username"
                  label="Username"
                  name="username"
                  autoFocus
                  onChange={e => onSetCredentials(e)}
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
                  onChange={e => onSetCredentials(e)}
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
                style={{maxWidth: '7rem', maxHeight: '2rem', minWidth: '7rem', minHeight: '2rem'}}
              >
                Sign up
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={0}>
              <Button 
                variant="contained"
                color="primary"
                className={classes.buttonStyle}
                onClick={() => onLogin()}
                style={{maxWidth: '7rem', maxHeight: '2rem', minWidth: '7rem', minHeight: '2rem'}}
              >
                log in
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Login;

