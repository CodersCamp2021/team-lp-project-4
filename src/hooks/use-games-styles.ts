import { createStyles } from '@mantine/core';

const useGamesStyles = createStyles((theme) => ({
  // Games
  gamesGrid: {
    width: '100vw',
    margin: '0 auto',
    columnGap: '6vw',
  },

  gamesSelection: {
    maxWidth: '100%',
    [theme.fn.largerThan('xl')]: {
      maxWidth: '90%',
    },
  },

  // Recommended
  recommendedHeading: {
    fontWeight: 700,
    fontSize: '100px',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    lineHeight: '100px',
    letterSpacing: '2vw',
    marginRight: '-30px',
    paddingBottom: 30,
    userSelect: 'none',
    textAlign: 'center',
    [theme.fn.smallerThan(1460)]: {
      fontSize: '60px',
    },
    [theme.fn.smallerThan(1100)]: {
      fontSize: '44px',
    },
    [theme.fn.smallerThan(600)]: {
      fontSize: '36px',
    },
    [theme.fn.smallerThan(360)]: {
      fontSize: '24px',
    },
    [theme.fn.smallerThan('md')]: {
      paddingBottom: 10,
    },
    [theme.fn.smallerThan('sm')]: {
      letterSpacing: 5,
      paddingBottom: 0,
    },
  },

  recommendedGamesWrapper: {
    justifyContent: 'center',
    columnGap: 45,
    [theme.fn.smallerThan(870)]: {
      maxWidth: '70vw',
      margin: '0 auto',
    },
    [theme.fn.smallerThan(670)]: {
      maxWidth: 'unset',
      margin: 0,
    },
    [theme.fn.smallerThan(1250)]: {
      columnGap: 20,
    },
    [theme.fn.smallerThan('md')]: {
      rowGap: 20,
    },
    [theme.fn.smallerThan('sm')]: {
      columnGap: 15,
      rowGap: 15,
    },
  },

  gameCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 170,
    height: 220,
    background: 'rgba(29, 23, 23, 0.9)',
    borderRadius: theme.radius.md,
    [theme.fn.smallerThan(1460)]: {
      width: 140,
      height: 180,
    },
  },

  cardImage: {
    width: 80,
    padding: '26px 0 8px',
    [theme.fn.smallerThan(1460)]: {
      padding: '26px 0 0 ',
    },
  },

  cardTitle: {
    width: 132,
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSizes.xl,
    fontWeight: 600,
    lineHeight: '22px',
    letterSpacing: '0em',
    textAlign: 'center',
    color: theme.colors.gray[0],
    [theme.fn.smallerThan(1460)]: {
      fontSize: theme.fontSizes.sm,
      lineHeight: 'unset',
    },
  },

  cardRating: {
    fontFamily: theme.fontFamily,
    fontSize: 12,
    color: theme.colors.gray[5],
    fontWeight: 700,
  },

  cardDeveloper: {
    width: '140px',
    fontFamily: theme.fontFamily,
    fontSize: 15,
    fontWeight: 600,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    lineHeight: '22.5px',
    textAlign: 'center',
    letterSpacing: 2,
    color: 'rgba(135, 135, 135, 1)',
    paddingBottom: '5px',
  },

  cardDeveloperSection: {
    [theme.fn.smallerThan(1460)]: {
      display: 'none',
    },
  },

  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 220,
    [theme.fn.smallerThan(1460)]: {
      width: 140,
      height: 180,
    },
  },

  // AllGames + TopRated
  selectionContainer: {
    paddingTop: 10,
    width: 540,
    [theme.fn.smallerThan('xl')]: {
      justifyContent: 'center',
      width: 400,
    },
    [theme.fn.smallerThan('lg')]: {
      width: '100%',
    },
  },

  headingText: {
    fontFamily: theme.fontFamily,
    fontSize: 30,
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    fontWeight: 600,
    letterSpacing: 1,
    paddingBottom: 5,
    paddingLeft: 15,
    [theme.fn.smallerThan('lg')]: {
      textAlign: 'center',
    },
  },

  gameTilesWrapper: {
    alignItems: 'center',
  },

  tileWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '0px',
    height: 70,
    background: 'rgba(29, 23, 23, 0.9)',
    borderRadius: theme.radius.md,
    padding: 0,
    boxShadow: '2px 2px 20px 0px rgba(0, 0, 0, 0.25)',
    textDecoration: 'none',
    width: '100%',
    [theme.fn.smallerThan('lg')]: {
      maxWidth: 500,
      margin: 'auto',
    },
  },

  gameInfoWrapper: {
    display: 'flex',
    alignItems: 'center',
    width: '80%',
  },

  gameImage: {
    minWidth: 50,
    width: 50,
    marginRight: '15px',
    marginLeft: '11px',
  },

  gameTextWrapper: {
    width: '100%',
  },

  gameTitle: {
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '22px',
    letterSpacing: 1,
    color: 'rgba(255, 255, 255, 1)',
    maxWidth: '95%',
    [theme.fn.smallerThan(1460)]: {
      fontSize: '18px',
    },
    [theme.fn.smallerThan('xs')]: {
      fontSize: '14px',
    },
  },

  gameDeveloper: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px',
    letterSpacing: '0.10em',
    color: 'rgba(135, 135, 135, 1)',
    maxWidth: '95%',

    [theme.fn.smallerThan(1460)]: {
      fontSize: '14px',
    },
    [theme.fn.smallerThan('xs')]: {
      fontSize: '10px',
    },
  },

  gameRating: {
    fontSize: '18px',
    color: theme.colors.gray[5],
    fontWeight: 600,
    paddingRight: 15,
    letterSpacing: 1,
    whiteSpace: 'nowrap',
    [theme.fn.smallerThan(1620)]: {
      paddingRight: 5,
    },
    [theme.fn.smallerThan(1460)]: {
      fontSize: theme.fontSizes.md,
    },
    [theme.fn.smallerThan('xs')]: {
      paddingRight: 8,
      fontSize: '12px',
    },
  },

  anchorWrapper: {
    textAlign: 'right',
    paddingTop: 6,
    [theme.fn.smallerThan('lg')]: {
      textAlign: 'center',
    },
  },

  seeMoreAnchor: {
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: '0.2em',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
    color: theme.colors.gray[5],
  },
}));

export default useGamesStyles;
