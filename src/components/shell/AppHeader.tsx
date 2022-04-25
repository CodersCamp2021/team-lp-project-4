import {
  Header,
  Burger,
  MediaQuery,
  Text,
  Group,
  Button,
  Box,
  Menu,
  Modal,
  Space,
} from '@mantine/core';
import { useContext, useState } from 'react';
import { UserButton } from './UserButton';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import { BiLogOut } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import {
  handleChangeEmail,
  handleChangePassword,
  handleLogout,
} from './AccountState';
import * as Yup from 'yup';
import { useForm, yupResolver } from '@mantine/form';
import Input from '../sign-in/Input';
import PasswordInput from '../sign-up/PasswordInput';

type AppHeaderProps = {
  opened: boolean;
  classes: Record<'header' | 'navbar' | 'links', string>;
  setOpenedCallback: React.Dispatch<React.SetStateAction<boolean>>;
};

const emailChangeSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email'),
  password: Yup.string(),
});

const passwordChangeSchema = Yup.object().shape({
  password: Yup.string(),
  newPassword: Yup.string(),
  passwordConfirmation: Yup.string(),
});

const AppHeader = ({ opened, classes, setOpenedCallback }: AppHeaderProps) => {
  const emailForm = useForm({
    schema: yupResolver(emailChangeSchema),
    initialValues: {
      email: '',
      password: '',
    },
  });
  const passwordForm = useForm({
    schema: yupResolver(passwordChangeSchema),
    initialValues: {
      password: '',
      newPassword: '',
      passwordConfirmation: '',
    },
  });
  const [emailModalOpened, setEmailModalOpened] = useState(false);
  const [passwordModalOpened, setPasswordModalOpened] = useState(false);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
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
                    onClick={() => setEmailModalOpened(true)}
                  >
                    Change email
                  </Menu.Item>
                  <Menu.Item
                    icon={<RiLockPasswordLine size={14} />}
                    onClick={() => setPasswordModalOpened(true)}
                  >
                    Change password
                  </Menu.Item>
                  <Menu.Item
                    color="red"
                    icon={<BiLogOut size={14} />}
                    onClick={() => handleLogout(() => navigate(0))}
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
      {
        //email modal
      }
      <Modal
        opened={emailModalOpened}
        onClose={() => setEmailModalOpened(false)}
      >
        <Box sx={{ maxWidth: 340 }} mx="auto">
          <form
            onSubmit={emailForm.onSubmit((values) => {
              handleChangeEmail({ ...values, userId: auth?.userInfo?.id });
              setEmailModalOpened(false);
            })}
          >
            <Input
              label="New Email"
              placeholder="example@mail.com"
              formProps={emailForm.getInputProps('email')}
            />
            <Space h="lg" />
            <PasswordInput
              label="Password"
              formProps={emailForm.getInputProps('password')}
            />
            <Space h="md" />
            <Group position="center" mt="xl">
              <Button type="submit" size="xl" color="violet" compact>
                Change email
              </Button>
            </Group>
          </form>
        </Box>
      </Modal>
      {
        // password modal
      }
      <Modal
        opened={passwordModalOpened}
        onClose={() => setPasswordModalOpened(false)}
      >
        <Box sx={{ maxWidth: 340 }} mx="auto">
          <form
            onSubmit={passwordForm.onSubmit((values) => {
              handleChangePassword({ ...values, userId: auth?.userInfo?.id });
              setPasswordModalOpened(false);
            })}
          >
            <PasswordInput
              label="Password"
              formProps={passwordForm.getInputProps('password')}
            />
            <Space h="lg" />
            <PasswordInput
              label="New Password"
              formProps={passwordForm.getInputProps('newPassword')}
            />
            <Space h="lg" />
            <PasswordInput
              label="Confirm Password"
              formProps={passwordForm.getInputProps('passwordConfirmation')}
            />
            <Space h="md" />
            <Group position="center" mt="xl">
              <Button type="submit" size="xl" color="violet" compact>
                Change password
              </Button>
            </Group>
          </form>
        </Box>
      </Modal>
    </Header>
  );
};

export default AppHeader;
