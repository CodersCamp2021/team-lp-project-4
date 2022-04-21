import { Navbar, Anchor, Stack } from '@mantine/core';
import { Link } from 'react-router-dom';

type AppNavbarProps = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  classes: Record<'header' | 'navbar' | 'links', string>;
  endpoints: {
    name: string;
    endpoint: string;
  }[];
};

const AppNavbar = ({
  opened,
  setOpened,
  classes,
  endpoints,
}: AppNavbarProps) => {
  return (
    <Navbar
      width={{ base: '100%', sm: 0 }}
      sx={{
        position: 'absolute',
        margin: '0',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        border: 'none',
        background:
          'linear-gradient(180deg, rgb(56 19 53) 0%, rgba(96,66,140,1) 70%, rgb(5 2 39) 100%)',
      }}
      hidden={!opened}
      hiddenBreakpoint="sm"
    >
      <Stack
        className={classes.navbar}
        spacing={20}
        align={'center'}
        justify={'center'}
        sx={{ width: '100vw' }}
      >
        {endpoints.map(({ name, endpoint }) => (
          <Anchor
            component={Link}
            to={endpoint}
            key={endpoint}
            align="center"
            size="xl"
            weight={500}
            sx={{
              fontSize: '28px',
              color: '#ffffff',
              padding: '30px',
            }}
            onClick={() => setOpened(false)}
          >
            {name}
          </Anchor>
        ))}
      </Stack>
    </Navbar>
  );
};

export default AppNavbar;
