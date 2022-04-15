import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Games from './Games';

const MockGames = () => (
  <HashRouter>
    <Games />
  </HashRouter>
);

describe('<Games />', () => {
  type GameContainers = Array<HTMLElement & { dataset: { testid: string } }>;

  it('displays Recommended, TopRated and AllGames sections', () => {
    render(<MockGames />);

    const recommended = screen.getByText(/recommended/i);
    const topRated = screen.getByText(/top rated/i);
    const allGames = screen.getByText(/all games/i);

    expect(recommended).toBeInTheDocument();
    expect(topRated).toBeInTheDocument();
    expect(allGames).toBeInTheDocument();
  });

  it('has a link to allGames', () => {
    render(<MockGames />);
    const link = screen.getByTestId('moreGamesLink');
    expect(link).toHaveAttribute('href', '#/games/all');
  });

  it('has containers with links to game pages', () => {
    render(<MockGames />);

    const tiles: GameContainers = screen.getAllByTestId(/^gameDiv/i);
    tiles.forEach((tile) => {
      expect(tile).toHaveAttribute(
        'href',
        `#/${tile.dataset.testid.substring(7)}`,
      );
    });
  });
});
