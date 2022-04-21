import { Navbar, Anchor, Stack } from '@mantine/core';
import { Link } from 'react-router-dom';
import background from '../../assets/rose-petals_1.svg';

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
        border: 'none',
        backgroundImage: `url("${background}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      hidden={!opened}
      hiddenBreakpoint="sm"
    >
      <Stack
        className={classes.navbar}
        spacing={30}
        align={'center'}
        justify={'center'}
        p={20}
        sx={{ width: '100%' }}
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
