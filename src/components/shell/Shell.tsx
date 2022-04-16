import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppShell } from '@mantine/core';

import useShellStyles from '../../hooks/use-shell-styles';
import Games from '../games/Games';
import AllGames from '../games/AllGames';
import Home from '../Home/Home';
import AppHeader from './AppHeader';
import AppNavbar from './AppNavbar';

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
  const { classes } = useShellStyles();

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
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/all" element={<AllGames />} />
        <Route path="/login" element={<div>login</div>} />
        <Route path="/register" element={<div>register</div>} />
      </Routes>
    </AppShell>
  );
};

export default Shell;
