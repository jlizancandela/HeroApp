import { getHero } from './gethero';

describe('getHero', () => {
  it('should return the hero with the specified id', () => {
    const id = 'dc-superman';
    const hero = getHero(id);

    expect(hero).toEqual({
      id: 'dc-superman',
      alter_ego: 'Kal-El',
      characters: 'Kal-El',
      first_appearance: 'Action Comics #1',
      publisher: 'DC Comics',
      superhero: 'Superman',
    });
  });

  it('should return undefined if the hero does not exist', () => {
    const id = 'unknown';
    const hero = getHero(id);

    expect(hero).toBeUndefined();
  });

  it('should return undefined if the id is empty', () => {
    const id = '';
    const hero = getHero(id);

    expect(hero).toBeUndefined();
  });
});
