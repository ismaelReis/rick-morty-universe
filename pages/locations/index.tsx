import CardLocation from '../components/cardLocation';
import styles from '../../styles/Locations.module.css'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ILocation } from '../interfaces';

export default function Locations() {

    const [locations,setLocations] = useState([]);

    const getLocations = async () => {
        const res = await fetch('https://rickandmortyapi.com/api/location');
        const data = await res.json();
        setLocations(data.results);
    }

    useEffect(() => {
        getLocations();    
    },[]);

    return (
        <>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div>Anterior</div>
                <div style={{ flex: 1 }}></div>
                <div>Avançar</div>
            </div>
            <div className={styles.cards}>
                {
                locations.length <= 0 ? "No locations found": 
                locations.map((location:ILocation, i) => (
                    <Link href={"locations/"+location.id}  style={{ textDecoration: 'none' }}>
                    <CardLocation key={i} location={location} />
                    </Link>
                ))}
            </div>
        </>
    );
}