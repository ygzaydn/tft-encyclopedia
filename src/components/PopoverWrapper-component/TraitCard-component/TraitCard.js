import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    background: '#C4C4C4',
    color: '#2E8BAF',
    border: '#2E8BAF solid 3px',
  },
  media: {
    height: 140,
  },
});

export default function TraitCard({name, imgId, description,set}) {
  const classes = useStyles();
  if(imgId.includes('Set3_')){
    imgId = imgId.slice(5);
  } else if(imgId.includes('Set4_')){
      imgId = imgId.slice(5);
  } 
  imgId = imgId.toLowerCase();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require(`../../../assets/set${set}/traits/${imgId}.png`)}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}