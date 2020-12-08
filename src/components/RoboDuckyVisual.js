import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';


import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


import {decodeToken} from '../utils/auth'
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

  let homeLink

  decodeToken() ? homeLink = '/home' : homeLink = '/'


  const classes = useStyles();

  


  return (
      <Card className={classes.root} elevation={0}>
        <Link to={homeLink}>
          <CardMedia
            className={classes.cover}
            image={roboduckyListeningImage}
            title="Live from space album cover"
            alt="Roboducky is patiently listening to your struggles"
          />
        </Link>
      </Card>

  );
}

export default RoboduckyVisual;