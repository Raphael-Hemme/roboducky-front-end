import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import EditMenu from './EditMenu';
import SaveButton from './SaveButton';
import LogoutButton from './LogoutButton';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const MenuButtonGroup = ({ onMonolog, monologText, onCurrentSolution, currentSolution, onCurrentTags, currentTags, onCurrentMood, currentMood, onSaveConversation, onLogout }) => {
  const classes = useStyles();

  return (
    <div className="SingleColumnLayout">

      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={4} lg={12} className={classes.button} variant="outlined">
          <LogoutButton onLogout={onLogout}
          />
        </Grid>
        <Grid item xs={4} lg={12} className={classes.button} variant="outlined">
          <EditMenu />
        </Grid>
        <Grid item xs={4} lg={12} className={classes.button} variant="outlined">
          <SaveButton 
            onMonolog={onMonolog}
            monologText={monologText}
            onCurrentSolution={onCurrentSolution}
            currentSolution={currentSolution}
            onCurrentTags={onCurrentTags}
            currentTags={currentTags}
            onCurrentMood={onCurrentMood}
            currentMood={currentMood}
            onSaveConversation={onSaveConversation}
            />
        </Grid>
      </Grid>
      </div>
  );
}


export default MenuButtonGroup;