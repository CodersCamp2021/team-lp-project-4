import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { createStyles, AppShell, Navbar, Anchor, Stack } from '@mantine/core';

import AppHeader from './AppHeader';

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
      navbar={
        <Navbar
          width={{ base: '100%', sm: 0 }}
          hidden={!opened}
          hiddenBreakpoint="sm"
        >
          <Stack
            className={classes.navbar}
            spacing={30}
            align={'center'}
            justify={'center'}
            p={20}
          >
            {endpoints.map(({ name, endpoint }) => (
              <Anchor
                component={Link}
                to={endpoint}
                key={endpoint}
                align="center"
                size="xl"
                weight={500}
                color="violet"
                sx={{
                  fontSize: '28px',
                }}
              >
                {name}
              </Anchor>
            ))}
          </Stack>
        </Navbar>
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
        <Route path="/games" element={<div>games</div>} />
        <Route path="/login" element={<div>login</div>} />
        <Route path="/register" element={<div>register</div>} />
      </Routes>
    </AppShell>
  );
};

export default Shell;
