import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import {
  createStyles,
  AppShell,
  Header,
  Navbar,
  Burger,
  MediaQuery,
  Text,
  Anchor,
  Group,
  Button,
  Stack,
  Box,
} from '@mantine/core';

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
        <Header height={70} className={classes.header} px="20%">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Text
              component={Link}
              to="/"
              align="center"
              variant="gradient"
              gradient={{ from: 'indigo', to: 'violet', deg: 45 }}
              size="xl"
              weight={700}
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '36px',
              }}
            >
              L O G O
            </Text>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size={30}
                color="#7048E8"
                mr="md"
              />
            </MediaQuery>
            <Box className={classes.links}>
              <Group spacing="xl">
                <Button
                  compact
                  size="lg"
                  color="violet"
                  variant="subtle"
                  component={Link}
                  to="/games"
                >
                  Games
                </Button>
                <Button
                  compact
                  size="lg"
                  color="violet"
                  variant="subtle"
                  component={Link}
                  to="/login"
                >
                  Sign in
                </Button>
                <Button
                  compact
                  size="lg"
                  color="violet"
                  component={Link}
                  to="/register"
                >
                  Sign up
                </Button>
              </Group>
            </Box>
          </Box>
        </Header>
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
