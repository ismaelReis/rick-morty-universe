import Image from 'next/image';
import styles from '../../styles/Card.module.css'
import { ICharacter, ILocation } from '../../pages/interfaces';

type myProps = {
    character: ICharacter
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