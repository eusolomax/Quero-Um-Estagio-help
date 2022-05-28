import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

export default function Map({ data }) {
    return(
        <MapContainer center={[40.8054,-74.0241]} zoom={13} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
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
    )
}