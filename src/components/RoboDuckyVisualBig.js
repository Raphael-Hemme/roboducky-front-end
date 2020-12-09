import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


import Container from '@material-ui/core/Container';


import {decodeToken} from '../utils/auth'
import roboduckyListeningImage from '../roboducky-patient_listener.png';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'transparent',
  },
  image: {
    width: 400,
    height: 400,
  },
}));


const RoboduckyVisualBig = () => {
  

  let homeLink
  decodeToken() ? homeLink = '/home' : homeLink = '/'

  const classes = useStyles();

  return (
    <Container m={0}>
      <Link to={homeLink}>
        <img src={roboduckyListeningImage} alt="Roboducky is patiently listening to your struggles" className={classes.image}/>
      </Link>
    </Container>
  );
}

export default RoboduckyVisualBig;