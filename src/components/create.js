import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


const Create = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState(0);
    const [mitbringsel, setMitbringsel] = useState([]);
    const [auftauchzeit, setAuftauchzeit] = useState([]);
    const [elseBring, setElseBring] = useState('');
    const [commentar, setCommentar] = useState('');
    const [resp, setResp] = useState('');

    const handleMitbringsel = (bool, value) => {
        if (bool) {
            setMitbringsel(oldArray => [...oldArray, value])
        } else {
            setMitbringsel(mitbringsel.filter(item => item !== value))
        }
    }
    const handleAuftauchzeit = (bool, value) => {
        if (bool) {
            setAuftauchzeit(oldArray => [...oldArray, value])
        } else {
            setAuftauchzeit(auftauchzeit.filter(item => item !== value))
        }
    }


    const addCreateHandler = () => {

        console.log(number);

        if (name) {
            const newEntry = {
                Name: name,
                Gäste_inkl: number,
                Mitbringsel: mitbringsel,
                Mitbringsel_Else: elseBring,
                Auftauchzeit: auftauchzeit,
                Kommentar: commentar
            }
            const newComment = {
                fields: newEntry
            }
            console.log(newComment)
            fetch("https://api.airtable.com/v0/appJA79St68qcEnVO/Fest", {
                method: 'POST',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + 'keyUIj4atdSU9TIQY',
                }),
                body: JSON.stringify(newComment)
            })
                .then(response => response.json())
                .then(data => {
                    setResp(data)
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

    return (
        <Box sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText>Name (bitte Vor- und Nachname)</ListItemText>
                        <TextField
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText>Wie viele Personen sind wir?</ListItemText>
                    <Slider
                        aria-label="Anzahl Leute"
                        defaultValue={2}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={1}
                        max={6}
                        onChangeCommitted={(e, v) => setNumber(v)}
                    />
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText>Was bringe ich mit?</ListItemText>
                        <div>
                            <div>Salat <Checkbox
                                onChange={(e) => handleMitbringsel(e.target.checked, "Salat")} /></div>
                            <div>Dessert <Checkbox
                                onChange={(e) => handleMitbringsel(e.target.checked, "Dessert")} /></div>
                            <div>Freude <Checkbox
                                onChange={(e) => handleMitbringsel(e.target.checked, "Freude")} /></div>
                            <div>Was anders <Checkbox
                                onChange={(e) => handleMitbringsel(e.target.checked, "Was anderes")} /></div>
                        </div>
                    </ListItemButton>
                </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText>Was anderes</ListItemText>
                            <TextField
                                id="outlined-basic"
                                label="Mitbringsel"
                                variant="outlined"
                                onChange={(e) => setElseBring(e.target.value)}
                            />
                        </ListItemButton>
                    </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText>Wann bin ich da?</ListItemText>
                        <div>
                            <div>Morgen früh <Checkbox
                                onChange={(e) => handleAuftauchzeit(e.target.checked, "Morgen")} /></div>
                            <div>Mittag <Checkbox
                                onChange={(e) => handleAuftauchzeit(e.target.checked, "Mittag")} /></div>
                            <div>Nachmittag <Checkbox
                                onChange={(e) => handleAuftauchzeit(e.target.checked, "Nachmittag")} /></div>
                            <div>Abend <Checkbox
                                onChange={(e) => handleAuftauchzeit(e.target.checked, "Abend")} /></div>
                            <div>Stadt <Checkbox
                                onChange={(e) => handleAuftauchzeit(e.target.checked, "Stadt")} /></div>
                        </div>
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText>Sonstiger Kommentar</ListItemText>
                        <TextField
                            id="outlined-basic"
                            label="Kommentar"
                            variant="outlined"
                            onChange={(e) => setCommentar(e.target.value)}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <Button variant="contained" onClick={addCreateHandler}>Send</Button>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default Create;