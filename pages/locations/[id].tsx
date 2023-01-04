import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ILocation } from "../interfaces";

export default function Location() {
    const [location, setLocation] = useState<ILocation | null>(null);
    const id = useRouter().query.id;

    const getLocation = async () => {
        const res = await fetch('https://rickandmortyapi.com/api/location/' + id);
        const data: ILocation = await res.json();
        setLocation(data);
    }

    useEffect(() => {
        getLocation();
    }, []);

    return (
        location == null ? "Loading..." :
            <>
                <h1>Location #{id}</h1>
                <h5>{location.name}</h5>
                <hr />
                <h5>Type</h5>
                <h2>{location.type}</h2>
                <h5>Dimension</h5>
                <h2>{location.dimension}</h2>
                <h5>Residents ({location.residents.length})</h5>
                <hr />
            </>
    )
}