import { getHeroByName } from './getHeroByName';

describe('getHeroByName', () => {
  it('should return an array of heroes', () => {
    const heroes = getHeroByName('batman');
    expect(heroes.length).toBeGreaterThan(0);
  });

  it('should return an array of heroes with the specified name', () => {
    const heroes = getHeroByName('batman');
    expect(heroes).toEqual([
      {
        id: 'dc-batman',
        alter_ego: 'Bruce Wayne',
        characters: 'Bruce Wayne',
        first_appearance: 'Detective Comics #27',
        publisher: 'DC Comics',
        superhero: 'Batman',
      },
    ]);
  });

  it('should return an empty array if no heroes are found', () => {
    const heroes = getHeroByName('unknown');
    expect(heroes.length).toBe(0);
  });
});
