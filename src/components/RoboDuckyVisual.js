import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import roboduckyListeningImage from '../roboducky-patient_listener.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
});




const RoboduckyVisual = () => {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Roboducky is patiently listening to your struggles"
          height="230"
          image={roboduckyListeningImage}
          title="roboducky"
        />
      </CardActionArea>
    </Card>
  );
}

export default RoboduckyVisual;