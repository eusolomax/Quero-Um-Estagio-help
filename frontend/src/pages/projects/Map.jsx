import { useState, useEffect } from "react"
import axios from "axios"
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"

import "../../styles/projects/map/map.css"

export default function Map() {
    const [data, setData] = useState([])
    const [userPosition, setUserPosition] = useState(null)

    async function getData() {
        await axios.get("http://localhost:8080/map")
            .then(data => setData(data.data))
            .catch(err => console.error(err))
    }

    function UserLocation() {
        const map = useMapEvents({
            click() {
                map.locate()
            },
            locationfound(e) {
                setUserPosition(e.latlng)
                alert("Sua localização terá uma alta precisão caso esteja usando um dispositivo móvel")
                map.flyTo(e.latlng, map.getZoom())
            },
        })
      
        return userPosition === null ? null : (
            <Marker position={userPosition} className="marker">
                <Popup className="popup">VOCÊ</Popup>
            </Marker>
        )
    }

    useEffect(() => {
        getData()
    }, [])
    
    return (
        <div className="background">
            <h1>Projeto MAP</h1>
            <p>© 2010–2022 Vladimir Agafonkin. Maps © OpenStreetMap contributors.</p>
            <p>CLIQUE PARA RASTREAR!</p>

            <div className="content">
                <MapContainer 
                    center={[-8.8, -56]} 
                    zoom={4} 
                    scrollWheelZoom={true} 
                    style={{ height: "100%", width: "100%", overflow: 'hidden', borderRadius: "30px"}}
                >
                    <TileLayer 
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <UserLocation />
                    {
                        data && data.map(loc => (
                            <Marker key={loc.id} position={[loc.latitude, loc.longitude]} className="marker">
                                <Popup>{loc.name}</Popup>
                            </Marker>
                        ))
                    }
                </MapContainer>
            </div>
        </div>
    )
}