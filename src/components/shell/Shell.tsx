import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppShell, Footer } from '@mantine/core';
import useShellStyles from '../../hooks/use-shell-styles';
import Games from '../games/Games';
import AllGames from '../games/AllGames';
import Home from '../home/Home';
import Game from '../game/Game';
import AppHeader from './AppHeader';
import AppNavbar from './AppNavbar';
import SignIn from '../sign-in/SignIn';
import SignUp from '../sign-up/SignUp';

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

  useEffect(() => {
    document.body.style.overflow = opened ? 'hidden' : 'auto';
  }, [opened]);

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      padding={0}
      sx={{
        border: 'none',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
      styles={() => ({
        body: { flexGrow: '2' },
        main: {
          display: 'flex',
        },
      })}
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
      footer={
        <Footer
          height={40}
          sx={{
            position: 'static',
            color: 'rgba(255,255,255,0.15)',
            background: 'none',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingRight: '20px',
            border: 'none',
            fontSize: '20px',
          }}
        >
          CodersCamp © team-lp-4 | All CopyRights Reserved
        </Footer>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:gameId" element={<Game />} />
        <Route path="/games/all" element={<AllGames />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </AppShell>
  );
};

export default Shell;
