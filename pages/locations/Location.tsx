import { ICharacter, ILocation } from "../../src/interfaces";

export const getLocations = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/location');
    const data = await res.json();
    return data.results;
}

export const getLocation = async (id: number) => {
    const res = await fetch('https://rickandmortyapi.com/api/location/' + id);
    const data: ILocation = await res.json();
    return data;
}


export const getResidentes = async (residents: string[]) => {

    var residentsArray = await Promise.all(residents.map(async residentUrl => {
        const res = await fetch(residentUrl);
        var data: ICharacter = await res.json();
        return data;
    }));

    return residentsArray;
}

