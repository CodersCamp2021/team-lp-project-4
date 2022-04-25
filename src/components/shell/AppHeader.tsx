import {
  Header,
  Burger,
  MediaQuery,
  Text,
  Group,
  Button,
  Box,
  Menu,
} from '@mantine/core';
import { useContext } from 'react';
import { UserButton } from './UserButton';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import { BiLogOut } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { MdOutlineAlternateEmail } from 'react-icons/md';

type AppHeaderProps = {
  opened: boolean;
  classes: Record<'header' | 'navbar' | 'links', string>;
  setOpenedCallback: React.Dispatch<React.SetStateAction<boolean>>;
};
const AppHeader = ({ opened, classes, setOpenedCallback }: AppHeaderProps) => {
  const auth = useContext(AuthContext);

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
            {auth?.userInfo ? (
              <Group position="center">
                <Menu
                  withArrow
                  placement="center"
                  control={
                    <UserButton
                      name={
                        auth?.userInfo.firstName + ' ' + auth?.userInfo.lastName
                      }
                      email={auth?.userInfo.email}
                    />
                  }
                >
                  <Menu.Label>Account settings</Menu.Label>
                  <Menu.Item
                    icon={<MdOutlineAlternateEmail size={14} />}
                    onClick={() => console.log('Changing email...')}
                  >
                    Change email
                  </Menu.Item>
                  <Menu.Item
                    icon={<RiLockPasswordLine size={14} />}
                    onClick={() => console.log('Changing password...')}
                  >
                    Change password
                  </Menu.Item>
                  <Menu.Item
                    color="red"
                    icon={<BiLogOut size={14} />}
                    onClick={() => console.log('Logging out...')}
                  >
                    Log out
                  </Menu.Item>
                </Menu>
              </Group>
            ) : (
              <>
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
              </>
            )}
          </Group>
        </Box>
      </Box>
    </Header>
  );
};

export default AppHeader;
