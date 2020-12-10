import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';



import roboducky404Image from '../roboducky-404.png';

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


const Roboducky404Visual = ({size}) => {
  
  imgSize = Number(size);

  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>

      <CardMedia
        className={classes.cover}
        image={roboducky404Image}
        title="Live from space album cover"
        alt="Roboducky is patiently listening to your struggles"
      />
    </Card>
  );
}

export default Roboducky404Visual;