import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';


import roboduckyListeningImage from '../roboducky-patient_listener.png';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  cover: {
    width: 200,
    height: 200,
  },

}));


const RoboduckyVisual = () => {

  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>

      <CardMedia
        className={classes.cover}
        image={roboduckyListeningImage}
        title="Live from space album cover"
        alt="Roboducky is patiently listening to your struggles"
      />
    </Card>
  );
}

export default RoboduckyVisual;