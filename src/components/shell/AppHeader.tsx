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
          onClick={() => setOpenedCallback(false)}
        >
          L O G O
        </Text>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpenedCallback((o) => !o)}
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
  );
};

export default AppHeader;
