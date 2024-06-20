import { render, screen } from '@testing-library/react';
import { Heroes } from './heroes';

describe('Heroes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Heroes publisher="marvel" />);
    expect(baseElement).toBeTruthy();
    expect(baseElement).toMatchSnapshot();
    expect(screen.getByText('Spider Man')).toBeInTheDocument();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<Heroes publisher="dc" />);
    expect(baseElement).toBeTruthy();
    expect(baseElement).toMatchSnapshot();
    expect(screen.getByText('Batman')).toBeInTheDocument();
  });
});
