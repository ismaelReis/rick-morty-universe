import Image from 'next/image';
import styles from '../../styles/Card.module.css'

export default function Card({local}) {
    return (
        <div className={styles.card}>
             <Image
                    src={"https://random.imagecdn.app/150/150?local="+local}
                    alt="Portal"
                    width={150}
                    height={150}
                    priority
                    style={{width: "100%"}}
                />
            <div className={styles.container}>
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
            </div>
        </div>
    )
}