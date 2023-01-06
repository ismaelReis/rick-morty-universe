import { ICharacter, ILocation } from "../../src/interfaces";

 const getLocations = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/location');
    const data = await res.json();
    return data.results;
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

 const reduceResidents = (residents: ICharacter[]) => {
    const randomResidents = residents.sort(() => Math.random() - 0.5).slice(0, (residents.length > 5 ? 5 : residents.length));
    return randomResidents;
}

export default {getLocations, getLocation, getResidentes, reduceResidents}

