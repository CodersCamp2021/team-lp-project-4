import {
  Header,
  Burger,
  MediaQuery,
  Text,
  Group,
  Button,
  Box,
} from '@mantine/core';

import { Link } from 'react-router-dom';

type AppHeaderProps = {
  opened: boolean;
  classes: Record<'header' | 'navbar' | 'links', string>;
  setOpenedCallback: React.Dispatch<React.SetStateAction<boolean>>;
};
const AppHeader = ({ opened, classes, setOpenedCallback }: AppHeaderProps) => {
  return (
    <Header
      height={70}
      className={classes.header}
      px="20%"
      sx={{ background: 'none', border: 'none', position: 'static' }}
    >
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
          color="#ffffff"
          size="xl"
          weight={700}
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '36px',
          }}
          onClick={() => setOpenedCallback(false)}
        >
          L O G O
        </Text>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpenedCallback((o) => !o)}
            size={40}
            color="#ffffff"
            mr="md"
          />
        </MediaQuery>
        <Box className={classes.links}>
          <Group spacing="xl">
            <Button
              compact
              size="lg"
              component={Link}
              to="/games"
              sx={{
                color: '#ffffff',
                background: 'none',
                mixBlendMode: 'screen',
                '&:hover': { background: '#7950f2' },
              }}
            >
              Games
            </Button>
            <Button
              compact
              size="lg"
              component={Link}
              to="/login"
              sx={{
                color: '#ffffff',
                background: 'none',
                mixBlendMode: 'screen',
                '&:hover': { background: '#7950f2' },
              }}
            >
              Sign in
            </Button>
            <Button
              compact
              size="lg"
              color="violet"
              component={Link}
              to="/register"
              sx={{
                color: '#7950f2',
                background: '#ffffff',
                mixBlendMode: 'screen',
                '&:hover': { color: '#ffffff', background: '#7950f2' },
              }}
            >
              Sign up
            </Button>
          </Group>
        </Box>
      </Box>
    </Header>
  );
};

export default AppHeader;
