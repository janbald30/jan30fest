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




const CreateCard = () => {
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
                    Anmeldung
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Melde dich zum Fest an
                </Typography>
            </CardContent>
            <CardActions>
            <Link to="/anmelden"><Button size="medium">Anmelden</Button></Link>
            <Button href='https://www.youtube.com/watch?v=4N3N1MlvVc4'size="medium">Abmelden</Button>
            </CardActions>
        </Card>
    );
}

export default CreateCard;