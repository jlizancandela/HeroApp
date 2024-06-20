import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { getHeroByName } from '../helper/getHeroByName';

export const UseSearch = () => {
  const location = useLocation();
  const { q } = queryString.parse(location.search);

  if (typeof q !== 'string') return { q: null, hero: null };

  const hero = getHeroByName(q as string);

  return { hero, q };
};
