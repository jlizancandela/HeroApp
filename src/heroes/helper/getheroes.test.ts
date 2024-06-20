import { getHeroes } from './getheroes';

describe('getHeroes', () => {
  it('should return heroes', () => {
    const heroes = getHeroes('marvel');
    expect(heroes.length).toBeGreaterThan(0);
  });

  it('should return more than 9 heroes', () => {
    const heroes = getHeroes('marvel');
    expect(heroes.length).toBeGreaterThan(9);
  });

  it('should return an empty array if no heroes are found', () => {
    const heroes = getHeroes('unknown');
    expect(heroes.length).toBe(0);
  });
});
