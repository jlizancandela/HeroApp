import { getHeroes } from '../helper/getheroes';
import { HeroCard } from './hero';

export const Heroes = ({ publisher }: { publisher: string }) => {
  const heroes = getHeroes(publisher);

  return (
    <div className="d-flex flex-row flex-wrap gap-3 mb-5">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
};
