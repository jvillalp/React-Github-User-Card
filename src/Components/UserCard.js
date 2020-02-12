import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  body:{
    display:'flex',
    justifyContent:'center',
    flexWrap:'wrap',
  },
  root: {
    maxWidth: 345,
  
  },
  media: {
    height: 140,
  },
  images:{
    width: '50%'
  },
  button:{
   margin: 'auto'
  }
});

export default function UserCard({name, image, location, website}) {
  const classes = useStyles();

  return (
    <div className={classes.body}>
    <Card className={classes.root}>
      <CardActionArea>
        <img src={image} className={classes.images}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>{location}</p>
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={website} className={classes.button} size="small" color="primary">
          Github Account
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}