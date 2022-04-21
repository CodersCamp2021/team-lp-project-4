import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { createStyles, AppShell, Text, Footer } from '@mantine/core';
import { useGames } from '../../utils/useGames';

import AppHeader from './AppHeader';
import AppNavbar from './AppNavbar';

import Home from '../Home/Home';

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
  const { data, status } = useGames();

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      padding={0}
      sx={{ border: 'none', overflow: 'hidden' }}
      styles={() => ({
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
        <Route
          path="/games"
          element={
            <div>
              <>
                {status === 'success' &&
                  data.map((game) => <Text key={game._id}>{game.title}</Text>)}
              </>
            </div>
          }
        />
        <Route path="/login" element={<div>login</div>} />
        <Route path="/register" element={<div>register</div>} />
      </Routes>
    </AppShell>
  );
};

export default Shell;
