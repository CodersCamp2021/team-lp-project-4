import { createStyles, AppShell, Navbar, Anchor, Stack } from '@mantine/core';
import { Link } from 'react-router-dom';

type AppNavbarProps = {
  opened: boolean;
  classes: Record<'header' | 'navbar' | 'links', string>;
  endpoints: {
    name: string;
    endpoint: string;
  }[];
};

const AppNavbar = ({ opened, classes, endpoints }: AppNavbarProps) => {
  return (
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
  );
};
