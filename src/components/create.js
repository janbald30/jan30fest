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
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

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
        <MDBContainer >
            <MDBRow >
                <MDBCol>
                    <div className='d-flex justify-content-start'>Name</div>
                </MDBCol>
                <MDBCol>
                    <TextField
                        className="d-flex justify-content-end"
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        onChange={(e) => setName(e.target.value)}
                    />
                </MDBCol>
            </MDBRow>
            <Divider />
            <MDBRow >
                <MDBCol>
                    <div className='d-flex justify-content-start' >Was bringe ich mit?</div>
                </MDBCol>

                <MDBCol>
                    <MDBCol>
                        <MDBRow >
                            <MDBCol> <label className="d-flex justify-content-start">Salat </label> </MDBCol>
                            <MDBCol>
                                <Checkbox className="d-flex justify-content-end"
                                    onChange={(e) => handleMitbringsel(e.target.checked, "Salat")} />
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol>
                        <MDBRow >
                            <MDBCol> <label className="d-flex justify-content-start">Dessert </label> </MDBCol>
                            <MDBCol >
                                <Checkbox className="d-flex justify-content-end"
                                    onChange={(e) => handleMitbringsel(e.target.checked, "Dessert")} />
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol>
                        <MDBRow >
                            <MDBCol> <label className="d-flex justify-content-start">Freude </label> </MDBCol>
                            <MDBCol >
                                <Checkbox className="d-flex justify-content-end"
                                    onChange={(e) => handleMitbringsel(e.target.checked, "Freude")} />
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol>
                        <MDBRow >
                            <MDBCol> <label className="d-flex justify-content-start">sonstiges</label> </MDBCol>
                            <MDBCol >
                                <Checkbox className="d-flex justify-content-end"
                                    onChange={(e) => handleMitbringsel(e.target.checked, "Was anderes")} />
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBCol>

            </MDBRow>
            <Divider />
            <MDBRow className="gx-5">
                <MDBCol>
                    <div className='d-flex justify-content-start'>Was anderes</div>
                </MDBCol>
                <MDBCol>
                    <TextField
                        className="d-flex justify-content-end"
                        id="outlined-basic"
                        label="Mitbringsel"
                        variant="outlined"
                        onChange={(e) => setElseBring(e.target.value)}
                    />
                </MDBCol>
            </MDBRow>
            <Divider />
            <MDBRow >
                <MDBCol>
                    <div className='d-flex justify-content-start'>Wann erscheine ich?</div>
                </MDBCol>

                <MDBCol>
                    <MDBCol>
                        <MDBRow >
                            <MDBCol> <label className=" d-flex justify-content-start">Brunch </label> </MDBCol>
                            <MDBCol>
                                <Checkbox className="d-flex justify-content-end"
                                    onChange={(e) => handleAuftauchzeit(e.target.checked, "Brunch")} />
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol>
                        <MDBRow >
                            <MDBCol> <label className="d-flex justify-content-start">Dessert </label> </MDBCol>
                            <MDBCol>
                                <Checkbox className="d-flex justify-content-end"
                                    onChange={(e) => handleAuftauchzeit(e.target.checked, "Dessert")} />
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol>
                        <MDBRow >
                            <MDBCol> <label className="d-flex justify-content-start">Abend </label> </MDBCol>
                            <MDBCol >
                                <Checkbox className="d-flex justify-content-end"
                                    onChange={(e) => handleAuftauchzeit(e.target.checked, "Abend")} />
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol>
                        <MDBRow >
                            <MDBCol> <label className="d-flex justify-content-start">Stadt </label> </MDBCol>
                            <MDBCol >
                                <Checkbox className="d-flex justify-content-end"
                                    onChange={(e) => handleAuftauchzeit(e.target.checked, "Stadt")} />
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBCol>
            </MDBRow>
            <Divider />
            <MDBRow className="gx-5">
                <MDBCol>
                    <div className='d-flex justify-content-start'>Sonstiger Kommentar</div>
                </MDBCol>
                <MDBCol>
                    <TextField
                        className="d-flex justify-content-end"
                        id="outlined-basic"
                        label="Kommentar"
                        variant="outlined"
                        onChange={(e) => setElseBring(e.target.value)}
                    />
                </MDBCol>
            </MDBRow>
            <Divider />
            <MDBCol className="d-flex justify-content-end">
                <MDBRow >
                    <Button variant="contained" onClick={addCreateHandler}>Send</Button>
                </MDBRow>
            </MDBCol>

        </MDBContainer>
        /*    <List>


                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText>Was bringe ich mit?</ListItemText>

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
            </List >*/

    )
}

export default Create;