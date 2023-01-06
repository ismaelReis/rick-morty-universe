import Link from "next/link";
import styles from '../../styles/Card.module.css'
import CardCharacter from "../../src/components/CardCharacter";
import { ICharacter, ILocation } from "../../src/interfaces";
import { getLocation, getResidentes } from "./Location";

type props = {
    id: string,
    location: ILocation,
    residents: ICharacter[]
}

type params = {
    params: props
}


export const getStaticPaths = async () => {
    return {
        paths: [{
            params: {
                id: "5"
            }
        }],
        fallback: "blocking",
    }
}

export const getStaticProps = async (params: params) => {
    const id = params.params.id;
    const location = await getLocation(parseInt(id));
    const residents = await getResidentes(location.residents);
    //get random items from residents
    const randomResidents = reduceResidents(residents);

    return {
        props: {
            id,
            location,
            residents: randomResidents
        },
        revalidate: 60

    }
}

export const reduceResidents = (residents: ICharacter[]) => {
    const randomResidents = residents.sort(() => Math.random() - 0.5).slice(0, (residents.length > 5 ? 5 : residents.length));
    return randomResidents;
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
                            <Link key={i} href={"/character/" + resident.id} style={{ textDecoration: 'none' }}>
                                <CardCharacter character={resident} />
                            </Link>
                        ))
                }
            </div>
        </>
    )
}