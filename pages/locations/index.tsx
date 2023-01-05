import CardLocation from '../../components/cardLocation';
import styles from '../../styles/Card.module.css'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ILocation } from '../interfaces';

const getLocations = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/location');
    const data = await res.json();
    return data.results;
}


export const getStaticProps = async () => {
    const locations = await getLocations();
    return {
        props: { locations }, // will be passed to the page component as props
    }
}

type props = {
    locations: ILocation[]
}

export default function Locations({ locations }: props) {
    return (
        <>
            <div className={styles.cards}>
                {
                    locations.length <= 0 ? "No locations found" :
                        locations.map((location: ILocation, i) => (
                            <Link key={i} href={"locations/" + location.id} style={{ textDecoration: 'none' }}>
                                <CardLocation location={location} />
                            </Link>
                        ))}
            </div>
        </>
    );
}