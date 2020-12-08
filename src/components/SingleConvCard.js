import React from 'react';
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
    height: 50,
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

  console.log('Testy', shortenDescription('Wieviele Muelbeutel?'))
  console.log(memoryElement ? shortenDescription('Wieviele Muelbeutel?') : 'Whaat?')


  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {shortenDescription(memoryElement.convDescription)}
          </Typography> 
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {memoryElement._id}
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default SingleConvCard