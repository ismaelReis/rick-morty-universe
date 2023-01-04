import Card from '../components/Card';
import styles from '../../styles/Locations.module.css'

export default function Locations() {
    const locais = ['local1', 'local2', 'local3'];
    return (
        <>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div>Anterior</div>
                <div style={{ flex: 1 }}></div>
                <div>Avançar</div>
            </div>
            <div className={styles.cards}>
                {locais.map((local, i) => (
                    <Card key={i} local={local} />
                ))}
            </div>
        </>
    );
}