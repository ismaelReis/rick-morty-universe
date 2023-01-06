import CardLocation from '../../src/components/CardLocation';
import styles from '../../styles/Card.module.css'
import Link from 'next/link';
import { ILocation } from '../../src/interfaces';
import locationController from './Location';

type props = {
    locations: ILocation[]
}

export const getStaticProps = async () => {
    const locations = await locationController.getLocations();
    return {
        props: { locations },
    }
}

export default function Locations({ locations }: props) {
    return (
        <>
            <div className={styles.cards}>
                {
                    locations.length <= 0 ? "No locations found" :
                        locations.map((location: ILocation, i) => (
                            <Link key={i} href={"locations/" + location.id}>
                                <CardLocation location={location} />
                            </Link>
                        ))}
            </div>
        </>
    );
}