import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "white",
    backgroundColor: "blue",
  },
/*  image: {
  ////////////////////
    The following bit could be used to set a top margin ONLY on images when the display
    size is md or up while defaulting to no top margin for sm and down. Could use this later
    to change the justify="center" to "flex-start" with an offset only for desktop (md and up).
    ////////////////////

    marginTop: "0rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "5rem",
    }, 
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "white",
    backgroundColor: "blue",
  },*/
}));

const ThreeColumnLayout = ({children}) => {

  const classes = useStyles();

  ////////////////////
  // Function to address individual children and position them in the layout grid.
  // Components are wrapped with layout components in the Switch in App.js and need
  // to be assigned keys as props that are used for addressing in this function.
  ////////////////////
  const getComponentByKey = (compKey) => {
    return children.filter((component) => {
      return component.key === compKey;
    })
  }

  ////////////////////
  // Pass the children components to variables for left, center and right to use them 
  // in their respective slots
  ////////////////////
  const componentLeftColumn = getComponentByKey('leftComp');
  const componentCenterColumn = getComponentByKey('centerComp');
  const componentRightColumn = getComponentByKey('rightComp');

  return (
    <div className={classes.root}>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} lg={2} container direction="column" alignItems="center" justify="center">
          <Grid item>
              {componentLeftColumn}
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6} container direction="column" alignItems="center" justify="flex-start">
          <Container maxWidth="lg" m={0}>
            {componentCenterColumn}
          </Container>
        </Grid>
        <Grid item xs={12} lg={2} container direction="column" alignItems="center" justify="center">
          <Grid item>
            {componentRightColumn}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ThreeColumnLayout;

// removed from Grid item (center): style={{height: '500px'}}