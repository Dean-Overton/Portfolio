import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TestImage from './images/FaceImage.jpg';

export default function ProjectCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/media/FaceImage.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
