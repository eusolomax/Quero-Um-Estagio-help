import dynamic from "next/dynamic"
import { useState, useEffect } from "react"
import axios from "axios"

import styles from "../../styles/projects/map/map.module.css"

export default function MapPage() {
    //REACT-LEAFLET NEXTJS CONFIG
    const MapWithNoSSR = dynamic(() => import("../../components/Map"), {ssr: false})

    const [data, setData] = useState([])

    async function getData() {
        await axios.get("http://localhost:8080")
            .then(data => setData(data.data))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        getData()
     }, [])

    return (
        <MapWithNoSSR />
    )
}