import { createStyles } from '@mantine/core';

const useGameStyles = createStyles({
  gameGrid: {
    margin: '120px auto 0',
  },

  gameHeroWrapper: {
    marginBottom: 20,
  },

  heroInfoWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
  },

  heroTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 200,
  },

  image: {
    border: '5px solid #211B25',
    borderRadius: '5px',
    marginRight: 40,
  },

  title: {
    color: 'rgb(255,255,255)',
    fontWeight: 700,
    fontSize: 60,
    lineHeight: '60px',
    paddingBottom: 6,
  },

  subTitle: {
    color: 'rgba(167, 156, 184, 1)',
    fontWeight: 400,
    fontSize: 24,
  },

  heroRating: {
    color: 'rgb(235,235,235)',
    fontSize: 70,
    fontWeight: 700,
    letterSpacing: '0.12em',
    marginBottom: 20,
  },

  thumbsButtons: {
    color: 'rgb(235,235,235)',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: '#866adb66',
    },
  },

  thumbsText: {
    fontSize: 35,
    fontWeight: 700,
    letterSpacing: '0.125em',
  },
});

export default useGameStyles;
