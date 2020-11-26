import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';



import roboduckyListeningImage from '../roboducky-patient_listener.png';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  image: {
    width: 150,
  }
});




const RoboduckyVisual = () => {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.image}
          component="img"
          alt="Roboducky is patiently listening to your struggles"
          height="230"
          image={roboduckyListeningImage}
          title="roboducky"
        />
    </Card>
  );
}

export default RoboduckyVisual;