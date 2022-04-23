import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HashRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient, setLogger } from 'react-query';

import Games from './Games';

setLogger({
  log: console.log,
  warn: console.warn,
  // eslint-disable-next-line
  error: () => {},
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: Infinity,
    },
  },
});

const renderWithClient = (ui: React.ReactElement) => {
  const { rerender, ...result } = render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={queryClient}>
          {rerenderUi}
        </QueryClientProvider>,
      ),
  };
};

const MockGames = () => (
  <HashRouter>
    <Games />
  </HashRouter>
);

describe('<Games />', () => {
  type GameContainers = Array<HTMLElement & { dataset: { testid: string } }>;

  it('displays Recommended, TopRated and AllGames sections', () => {
    renderWithClient(<MockGames />);

    const recommended = screen.getByText(/recommended/i);
    const topRated = screen.getByText(/top rated/i);
    const allGames = screen.getByText(/all games/i);

    expect(recommended).toBeInTheDocument();
    expect(topRated).toBeInTheDocument();
    expect(allGames).toBeInTheDocument();
  });

  it('has a link to allGames', () => {
    renderWithClient(<MockGames />);
    const link = screen.getByTestId('moreGamesLink');
    expect(link).toHaveAttribute('href', '#/games/all');
  });

  it('has containers with correct links to game pages', async () => {
    renderWithClient(<MockGames />);

    const tiles: GameContainers = await screen.findAllByTestId(/^gameDiv/i);
    tiles.forEach((tile) => {
      expect(tile).toHaveAttribute(
        'href',
        `#/${tile.dataset.testid.substring(7)}`,
      );
    });
  });

  it('changes URL after clicking game box link', () => {
    renderWithClient(<MockGames />);

    type Links = Array<HTMLAnchorElement>;

    const links: Links = screen.getAllByRole('link');
    links.forEach((link) => {
      userEvent.click(link);
      expect(window.location.hash).toBe(link.hash);
    });
  });
});
