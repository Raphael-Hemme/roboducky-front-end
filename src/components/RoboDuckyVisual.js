import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


import Container from '@material-ui/core/Container';


import {decodeToken} from '../utils/auth'
import roboduckyListeningImage from '../roboducky-patient_listener.png';

let imgSize = 200;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'transparent',
  },
  image: {
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
    <Container maxWidth="lg" m={0}>
      <Link to={homeLink}>
        <img src={roboduckyListeningImage} alt="Roboducky is patiently listening to your struggles" className={classes.image}/>
      </Link>
    </Container>
  );
}

export default RoboduckyVisual;