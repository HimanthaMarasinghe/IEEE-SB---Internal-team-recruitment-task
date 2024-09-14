import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function PrizeCard(props) {

    let text = "";
    let borderColor = "";
    let order = "";

    switch(props.place) {
        case "1":
            text = "First";
            borderColor = "gold";
            order = "1";
            break;
        case "2":
            text = "Second";
            borderColor = "silver";
            order = "2";
            break;
        case "3":
            text = "Third";
            borderColor = "brown";
            order = "3";
    }

  return (
    <Card sx={{
      width: 300,
      height: 450,
      background: 'black',
      border: `solid ${borderColor}`,
      padding: 1,
      borderRadius: 5,
      color: 'white',
      textAlign: 'center',
      order: { xs: `${order}`, lg: 'unset' },
      transition: 'transform 0.5s, box-shadow 0.5s',
      '&:hover': {
        transform: 'scale(1.1)',
        boxShadow: `0 0 4px 6px ${borderColor}`
      }
    }}>    
      <CardMedia
        sx={{ height: 300 }}
        image={"images/" + props.place + ".png"}
        title= {text + " place"}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
            {text + " place"}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
            {props.prize}
        </Typography>
      </CardContent>
    </Card>
  );
}