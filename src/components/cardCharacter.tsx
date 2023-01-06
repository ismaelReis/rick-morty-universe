import Image from 'next/image';
import styles from '../../styles/Card.module.css'
import { ICharacter, ILocation } from '../interfaces';

type myProps = {
    character: ICharacter
}
CardCharacter.defaultProps = {
    character: {
        id: 0,
        name: "No name",
        status: "No status",
        species: "No species",
        type: "No type",
        image:"https://random.imagecdn.app/150/150?local=2"
    }
}


export default function CardCharacter({ character }: myProps) {
    return (
        <div className={styles.card}>
            <Image
                src={character.image}
                alt="Character"
                width={150}
                height={150}
                priority
                style={{ width: "100%" }}
            />
            <div className={styles.container}>
                <h4><b>{character.name}</b></h4>
                <hr />
                <small>Specie</small>
                <p>{character.species}</p>
              
            </div>
        </div>
    )
}