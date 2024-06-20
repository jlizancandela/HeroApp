import { heroes } from '../data';

export const getHero = (id: string) => heroes.find((hero) => hero.id === id);
