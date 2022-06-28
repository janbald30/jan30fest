import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import testLogo from '../images/test.jpeg';
import {
    Link
  } from "react-router-dom";



const InfoCard = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={testLogo}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Infos
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Infos über Fest
                </Typography>
            </CardContent>
            <CardActions>
            <Link to="/wo"><Button size="small">Wo</Button></Link>
            <Link to="/wann"><Button size="small">Wann</Button></Link>
            <Link to="/wie"><Button size="small">Wie</Button></Link>
            </CardActions>
        </Card>
    );
}

export default InfoCard;