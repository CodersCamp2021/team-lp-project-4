import { createStyles } from '@mantine/core';

const useHomeStyles = createStyles((theme) => ({
  homeView: {
    minHeight: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4rem',
    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column-reverse',
    },
  },
  textContainer: {
    justifyContent: 'center',
  },

  title: {
    fontFamily: theme.fontFamily,
    fontSize: '80px',
    fontWeight: '700',
    lineHeight: '120px',
    color: '#ffffff',
    [theme.fn.smallerThan('lg')]: {
      fontSize: '60px',
      lineHeight: '80px',
    },
    [theme.fn.smallerThan('md')]: {
      textAlign: 'center',
    },
    [theme.fn.smallerThan('xs')]: {
      fontSize: '40px',
      lineHeight: '60px',
    },
  },

  subtitle: {
    fontFamily: theme.fontFamily,
    fontSize: '25px',
    fontWeight: 'bold',
    lineHeight: '38px',
    letterSpacing: '6px',
    color: '#cccccc',
    textTransform: 'uppercase',
    [theme.fn.smallerThan('lg')]: {
      fontSize: '18px',
    },
    [theme.fn.smallerThan('md')]: {
      textAlign: 'center',
    },
  },
}));

export default useHomeStyles;
