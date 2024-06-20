import { useEffect } from 'react';
import AOS from 'aos';
import { Hero } from '../data/types';

import 'aos/dist/aos.css';

export const HeroCard = ({ hero }: { hero: Hero }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="card" style={{ width: '18rem' }} data-aos="fade-up" data-aos-duration="2000">
      <img src={`/heroes/${hero.id}.jpg`} className="card-img-top" alt={hero.id} />
      <div className="card-body d-flex flex-column flex-fill">
        <h5 className="card-title">{hero.superhero}</h5>
        <p className="card-text">{hero.alter_ego}</p>
        <p className="card-text">{hero.characters !== hero.alter_ego && hero.characters}</p>
        <a className="btn btn-dark mt-auto" href={`/hero/${hero.id}`}>
          Mas información
        </a>
      </div>
    </div>
  );
};
