import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HeroCard } from './hero';
import { Hero } from '../data';

describe('HeroCard', () => {
  let hero: Hero;

  beforeEach(() => {
    hero = {
      id: '1',
      alter_ego: 'test alter ego',
      characters: 'test characters',
      first_appearance: 'test first appearance',
      publisher: 'test publisher',
      superhero: 'test superhero',
    };
  });

  afterEach(() => {
    hero = {} as Hero;
  });

  it('should render correctly', () => {
    const { container } = render(<HeroCard hero={hero} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByText(hero.alter_ego)).toBeInTheDocument();
    expect(screen.getByText(hero.characters)).toBeInTheDocument();
    expect(screen.getByText(hero.superhero)).toBeInTheDocument();
  });
});
