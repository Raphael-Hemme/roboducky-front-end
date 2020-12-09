import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  media: {
    height: 90,
  },
  buttonStyle: {
    color: "white",
    backgroundColor: "primary"
  },
}));


const SingleConvCard = ({memoryElement}) => {
  const classes = useStyles();

  const shortenDescription = (longInput) => {
    if (longInput.split(' ').length >= 100 ) {
      let shortened = longInput.split(' ').slice(100).join(' ');
      return shortened
    } else {
      return longInput;
    }
  }



  const randomCardImagePicker = () => {
    let rando = Math.floor(Math.random() * 4)
    console.log(rando)
    if (rando <= 1) {
      return "http://localhost:3000/images/roboduckyCardCodeImage01.png"
    } else if (rando > 1 && rando <= 2) {
      return "http://localhost:3000/images/roboduckyCardCodeImage02.png"
    } else if (rando > 2) {
      return "http://localhost:3000/images/roboduckyCardCodeImage03.png"
    }
  } 
  

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={randomCardImagePicker()}
          title="Contemplative Codelines"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {memoryElement.convMood[0] ? memoryElement.convMood[0] : 'Your Issue'}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {shortenDescription(memoryElement.convDescription)}
          </Typography> 
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button component={Link} to={`conversation-details/${memoryElement._id}`}
          variant="contained"
          color="primary"
          className={classes.buttonStyle}
        >
          remember
        </Button>
      </CardActions>
    </Card>
  );
}

export default SingleConvCard

///conversation-details/:id