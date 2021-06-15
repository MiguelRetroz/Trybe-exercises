const { test, expect, describe } = require('@jest/globals');

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(_ => {
      const arrayAnimals = Animals.filter(animal => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const getListAnimals = type => (
  findAnimalsByType(type).then(list => list)
);

describe('Quando o tipo do animal, existe', () => {
  expect.assertions(2);

  test('Retorne a lista de animais', () => {
    return getListAnimals('Dog').then((listDogs) => {
      expect(listDogs[0].name).toBe('Dorminhoco');
      expect(listDogs[1].name).toBe('Soneca');
    });
  });
});

describe('Quando o tipo do animal, não existe', () => {
  test('Retorne a messagem de erro', () => {
    expect.assertions(1);
    return getListAnimals('Lion').catch((error) => {
      expect(error).toEqual({ error: 'Não possui esse tipo de animal.' });
    });
  });
});