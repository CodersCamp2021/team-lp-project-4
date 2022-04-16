import { createStyles } from '@mantine/core';

const useAllGamesStyles = createStyles((theme) => ({
  container: {
    margin: '80px auto',
    [theme.fn.smallerThan(1024)]: {
      paddingLeft: '120px',
      paddingRight: '120px',
    },
    [theme.fn.smallerThan(768)]: {
      paddingLeft: '60px',
      paddingRight: '60px',
    },
    [theme.fn.smallerThan(576)]: {
      paddingLeft: '10px',
      paddingRight: '10px',
    },
  },
  headingText: {
    fontFamily: theme.fontFamily,
    fontSize: 40,
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    fontWeight: 700,
    lineHeight: '60px',
    letterSpacing: 1,
    paddingBottom: 20,
    paddingLeft: 35,
    color: 'rgba(167, 156, 184, 1)',
    [theme.fn.smallerThan(400)]: {
      fontSize: '35px',
      textAlign: 'center',
    },
  },
  gamepad: {
    [theme.fn.smallerThan(400)]: {
      display: 'none',
    },
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
  },
}));

export default useAllGamesStyles;
