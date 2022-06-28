
import * as React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



const Wo = () => {
    const position = [47.4184277, 9.3631282]
    return (
        <div>
            <MapContainer
                style={{
                    height: "700px"
                }}
                center={position} zoom={15} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        Unsere neue Wohnung. <br /> Wir treffen uns im Garten.
                    </Popup>
                </Marker>
            </MapContainer>
            
        </div>

    );
}

export default Wo;