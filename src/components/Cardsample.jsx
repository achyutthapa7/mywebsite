import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Cardsample(props) {
  return (
    <a href={props.link} target="_blank">
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={props.imgSrc}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  );
}
