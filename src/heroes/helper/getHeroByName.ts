import { heroes } from '../data';

export const getHeroByName = (name: string) => heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
