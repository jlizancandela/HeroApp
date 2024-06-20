import { heroes } from '../data';

export const getHeroes = (publisher: string) =>
  heroes.filter((hero) => hero.publisher.toLowerCase().includes(publisher.toLowerCase()));
