import { useState, useEffect } from "react"
import axios from "axios"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

import "../../styles/projects/map/map.css"

export default function Map() {
    const [data, setData] = useState([])

    async function getData() {
        await axios.get("http://localhost:8080/map")
            .then(data => setData(data.data))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        getData()
     }, [])

    return (
        <div className="background">
            <h1>Projeto MAP</h1>
            <p>© 2010–2022 Vladimir Agafonkin. Maps © OpenStreetMap contributors.</p>

            <div className="content">
                <MapContainer center={[40.8054,-74.0241]} zoom={13} scrollWheelZoom={true} style={{ height: "100%", width: "100%", overflow: 'hidden', borderRadius: "30px"}}>
                    <TileLayer 
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    <Marker position={[40.8054,-74.0241]}>
                        <Popup>TESTE</Popup>
                    </Marker>
                    {
                        data?.map(loc => (
                            <Marker key={loc.id} position={[loc.latitude, loc.longitude]}>
                                <Popup>{loc.name}</Popup>
                            </Marker>
                        ))
                    }
                </MapContainer>
            </div>
        </div>
    )
}