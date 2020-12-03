import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';



import roboduckyListeningImage from '../roboducky-patient_listener.png';

let imgSize = 200;



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  cover: {
    width: imgSize,
    height: imgSize,
  },

}));


const RoboduckyVisual = ({size}) => {
  
  imgSize = Number(size);

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