import { createStyles } from '@mantine/core';

const useGamesStyles = createStyles((theme) => ({
  selectionContainer: {
    minWidth: 560,
    paddingTop: 30,
  },

  headingText: {
    fontFamily: theme.fontFamily,
    fontSize: 30,
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    fontWeight: 600,
    letterSpacing: 1,
    paddingBottom: 5,
    paddingLeft: 15,
  },

  tileWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    background: 'rgba(29, 23, 23, 0.9)',
    borderRadius: theme.radius.md,
    padding: 0,
    boxShadow: '2px 2px 20px 0px rgba(0, 0, 0, 0.25)',
    textDecoration: 'none',
  },

  gameInfoWrapper: {
    display: 'flex',
    alignItems: 'center',
    width: '80%',
  },

  gameImage: {
    minWidth: 50,
    width: 50,
    paddingRight: '15px',
    paddingLeft: '11px',
  },

  gameTextWrapper: { width: '100%' },

  gameTitle: {
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '22px',
    letterSpacing: 1,
    color: 'rgba(255, 255, 255, 1)',
  },

  gameDeveloper: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px',
    letterSpacing: '0.10em',
    color: 'rgba(135, 135, 135, 1)',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    maxWidth: '90%',
  },

  gameRating: {
    fontSize: '18px',
    color: theme.colors.gray[5],
    fontWeight: 600,
    paddingRight: 15,
    letterSpacing: 1,
  },

  anchorWrapper: {
    textAlign: 'right',
    paddingTop: 6,
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
