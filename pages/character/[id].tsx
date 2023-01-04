
import { ICharacter, ILocation } from "../interfaces";
import Image from 'next/image'
type params = {
    params: props
}
type props = {
    id: string,
    character: ICharacter,
}
const getCharacter = async (id: number) => {
    const res = await fetch('https://rickandmortyapi.com/api/character/' + id);
    const data: ICharacter = await res.json();
    return data;
}

export const getServerSideProps = async (params: params) => {
    const id = params.params.id;
    const character = await getCharacter(parseInt(id));
    return {
        props: {
            id,
            character,
        }
    }
}

export default function Character({ id, character }: props) {
    return (
        <>
            <h5>Character #{id}</h5>
            <Image
                src={character.image}
                alt="Character"
                width={150}
                height={150}
                priority
            />
            <h1>{character.name}</h1>
            <hr />
            <h5>Specie</h5>
            <h2>{character.species}</h2>
        </>
    )
}