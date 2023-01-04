import Link from "next/link";
import styles from '../../styles/Card.module.css'
import CardCharacter from "../components/cardCharacter";
import { ICharacter, ILocation } from "../interfaces";

type params = {
    params: props
}
type props = {
    id: string,
    location: ILocation,
    residents: ICharacter[]
}
const getLocation = async (id: number) => {
    const res = await fetch('https://rickandmortyapi.com/api/location/' + id);
    const data: ILocation = await res.json();
    return data;
}
const getResidentes = async (residents: string[]) => {

    var residentsArray = await Promise.all(residents.map(async residentUrl => {
        const res = await fetch(residentUrl);
        var data: ICharacter = await res.json();
        return data;
    }));

    return residentsArray;
}

export const getServerSideProps = async (params: params) => {
    const id = params.params.id;
    const location = await getLocation(parseInt(id));
    const residents = await getResidentes(location.residents);
    return {
        props: {
            id,
            location,
            residents
        }
    }
}

export default function Location({ id, location, residents }: props) {
    return (
        <>
            <h5>Location #{id}</h5>
            <h1>{location.name}</h1>
            <hr />
            <h5>Type</h5>
            <h2>{location.type}</h2>
            <h5>Dimension</h5>
            <h2>{location.dimension}</h2>
            <h5>Residents ({location.residents.length})</h5>
            <hr />
            <div className={styles.cards}>
                {
                    residents.length <= 0 ? "No residents found" :
                        residents.map((resident, i) => (
                            <Link href={"/character/" + resident.id} style={{ textDecoration: 'none' }}>
                                <CardCharacter key={i} character={resident} />
                            </Link>
                        ))
                }
            </div>
        </>
    )
}