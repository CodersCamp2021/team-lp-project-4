import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { createStyles, AppShell } from '@mantine/core';

import AppHeader from './AppHeader';
import AppNavbar from './AppNavbar';
import Games from '../Games';

const useStyles = createStyles((theme) => ({
  navbar: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    [theme.fn.smallerThan('sm')]: {
      paddingLeft: '5%',
      paddingRight: '5%',
    },
  },
}));

const endpoints = [
  {
    name: 'Games',
    endpoint: '/games',
  },
  {
    name: 'Sign in',
    endpoint: '/login',
  },
  {
    name: 'Sign up',
    endpoint: '/register',
  },
];

const Shell = () => {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  return (
    <AppShell
      fixed
      navbarOffsetBreakpoint="sm"
      padding={0}
      sx={{ border: 'none', overflow: 'hidden' }}
      navbar={
        <AppNavbar
          opened={opened}
          setOpened={setOpened}
          classes={classes}
          endpoints={endpoints}
        ></AppNavbar>
      }
      header={
        <AppHeader
          opened={opened}
          classes={classes}
          setOpenedCallback={setOpened}
        ></AppHeader>
      }
    >
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/games" element={<Games />} />
        <Route path="/login" element={<div>login</div>} />
        <Route path="/register" element={<div>register</div>} />
      </Routes>
    </AppShell>
  );
};

export default Shell;
