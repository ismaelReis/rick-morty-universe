import { describe, expect, test } from '@jest/globals';
import  locationController  from '../../../pages/locations/Location';
import { ICharacter } from '../../../src/interfaces';

test('should reduce the number of items in array to 5', () => {
    //create an array of 10 ICharacter items


    //   const items:ICharacter[] = [{id: 1, name: '', species: '', image: ''}];
    let array: ICharacter[] = [
        { id: 1, name: 'Character 1', species: 'Species 1', image: 'image1.jpg' },
        { id: 2, name: 'Character 2', species: 'Species 2', image: 'image2.jpg' },
        { id: 3, name: 'Character 3', species: 'Species 3', image: 'image3.jpg' },
        { id: 4, name: 'Character 4', species: 'Species 4', image: 'image4.jpg' },
        { id: 5, name: 'Character 5', species: 'Species 5', image: 'image5.jpg' },
        { id: 6, name: 'Character 6', species: 'Species 6', image: 'image6.jpg' },
        { id: 7, name: 'Character 7', species: 'Species 7', image: 'image7.jpg' },
        { id: 8, name: 'Character 8', species: 'Species 8', image: 'image8.jpg' },
        { id: 9, name: 'Character 9', species: 'Species 9', image: 'image9.jpg' },
        { id: 10, name: 'Character 10', species: 'Species 10', image: 'image10.jpg' },
    ];
    const result = locationController.reduceResidents(array);
    expect(result.length).toBe(5);
})