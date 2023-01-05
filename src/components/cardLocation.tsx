import Image from 'next/image';
import styles from '../../styles/Card.module.css'
import { ILocation } from '../../pages/interfaces';

CardLocation.defaultProps = {
    location: {
        id: 0,
        name: "No name",
        type: "No type",
        dimension: "No dimension",
        residents: [],
        url: "No url",
        created: "No created"
    }      
}

type myProps = {
    location: ILocation
}


export default function CardLocation({ location }: myProps) {
    return (
        <div className={styles.card}>
            <Image
                src={"https://random.imagecdn.app/150/150?local=" + location.id}
                alt="Portal"
                width={150}
                height={150}
                priority
                style={{ width: "100%" }}
            />
            <div className={styles.container}>
                <h4><b>{location.name}</b></h4>
                <hr />
                <small>Type</small>
                <p>{location.type}</p>
                <small>Dimension</small>
                <p>{location.dimension}</p>
            </div>
        </div>
    )
}

