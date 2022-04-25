import * as Yup from 'yup';
import { useForm, yupResolver } from '@mantine/form';
import { Box, Button, PasswordInput, Space, Stack, Text } from '@mantine/core';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchData, Response, UserInfo } from '../../hooks/fetchData';
import Input from './Input';
import { showNotification } from '@mantine/notifications';
import { BsCheckLg } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import { AuthContext } from '../../AuthContext';

const schema = Yup.object().shape({
  email: Yup.string().required('Email is required!').email('Invalid email!'),
  password: Yup.string().required('Password is required!'),
});

function SignIn() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const form = useForm({
    schema: yupResolver(schema),
    initialValues: {
      email: '',
      password: '',
    },
  });

  const auth = useContext(AuthContext);

  const logIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const data = await fetchData<Response>('http://localhost:3001/user/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      mode: 'cors',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
    });
    return data;
  };

  const handleSubmit = (values: typeof form.values): void => {
    setLoading(true);
    logIn(values)
      .then(async (res) => {
        setLoading(false);
        if (res.message) {
          showNotification({
            title: 'Success!',
            message: res.message,
            icon: <BsCheckLg size={10} />,
            color: 'teal',
          });
          const userInfo = await fetchData<UserInfo>(
            'http://localhost:3001/user/userInfo',
            {
              credentials: 'include',
              headers: {
                'content-type': 'application/json',
              },
            },
          );
          auth?.setUserInfo(userInfo);
          navigate('/');
        } else {
          showNotification({
            title: 'Something went wrong!',
            message: res.error,
            icon: <ImCross size={10} />,
            color: 'red',
          });
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };

  return (
    <Stack
      sx={{
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
      mx="auto"
    >
      <Text
        sx={{
          marginTop: 50,
          marginBottom: 20,
          letterSpacing: 15,
          fontSize: '40px',
          color: '#A79CB8',
          fontWeight: 900,
          textShadow: '1px 2px #555',
        }}
      >
        LOGIN
      </Text>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Input
          label="Email"
          placeholder="example@mail.com"
          formProps={form.getInputProps('email')}
        />
        <Space h={'lg'} />
        <PasswordInput
          required
          label="Password"
          size="md"
          styles={{
            label: {
              textTransform: 'uppercase',
              fontWeight: 700,
              fontSize: '20px',
              color: '#A79CB8',
              letterSpacing: 4,
            },
            input: {
              backgroundColor: '#09090A55',
              border: '1px solid #09090A11',
            },
            innerInput: {
              color: '#fcfcfc',
              letterSpacing: 1,
              fontSize: '18px',
            },
          }}
          {...form.getInputProps('password')}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100px',
            maxWidth: '300px',
          }}
        >
          <Button
            type="submit"
            loading={loading}
            loaderPosition="right"
            size="xl"
            color="violet"
            compact
          >
            Sign in
          </Button>
        </Box>
      </form>
    </Stack>
  );
}

export default SignIn;
