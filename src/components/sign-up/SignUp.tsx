import * as Yup from 'yup';
import { useForm, yupResolver } from '@mantine/form';
import { Box, Button, SimpleGrid, Stack, Text } from '@mantine/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchData, Response } from '../../hooks/fetchData';
import Input from '../sign-in/Input';
import { showNotification } from '@mantine/notifications';
import { BsCheckLg } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import PasswordInput from './PasswordInput';

const schema = Yup.object().shape({
  firstName: Yup.string()
    .required('This field is required!')
    .min(3, 'Field should have at least 3 letters!')
    .max(31, 'Field should be up to 31 letters long!'),
  lastName: Yup.string()
    .required('This field is required!')
    .min(3, 'Field should have at least 3 letters!')
    .max(31, 'Field should be up to 31 letters long!'),
  username: Yup.string().required('This field is required!'),
  email: Yup.string()
    .required('This field is required!')
    .email('Invalid email!'),
  password: Yup.string()
    .required('This field is required!')
    .min(6, 'Field should have at least 6 letters!')
    .max(1024, 'Field should be up to 1024 letters long!'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords did not match!',
  ),
});

function SignUp() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const form = useForm({
    schema: yupResolver(schema),
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const register = async ({
    firstName,
    lastName,
    username,
    email,
    password,
  }: {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
  }) => {
    const data = await fetchData<Response>(
      'https://team-lp-project-3.herokuapp.com/user/register',
      {
        method: 'POST',
        body: JSON.stringify({
          firstName,
          lastName,
          username,
          email,
          password,
        }),
        mode: 'cors',
        credentials: 'include',
        headers: {
          'content-type': 'application/json',
        },
      },
    );
    return data;
  };

  const handleSubmit = (values: typeof form.values): void => {
    setLoading(true);
    register(values)
      .then((res) => {
        setLoading(false);
        if (res.message) {
          showNotification({
            title: 'Success!',
            message: res.message,
            icon: <BsCheckLg size={10} />,
            color: 'teal',
          });
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
        REGISTER
      </Text>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <SimpleGrid
          cols={2}
          breakpoints={[{ maxWidth: 650, cols: 1, spacing: 'sm' }]}
        >
          <Input
            label="First Name"
            placeholder=""
            formProps={form.getInputProps('firstName')}
          />
          <Input
            label="Last Name"
            placeholder=""
            formProps={form.getInputProps('lastName')}
          />
          <Input
            label="Username"
            placeholder=""
            formProps={form.getInputProps('username')}
          />
          <Input
            label="Email"
            placeholder="example@mail.com"
            formProps={form.getInputProps('email')}
          />
          <PasswordInput
            label="Password"
            formProps={form.getInputProps('password')}
          />
          <PasswordInput
            label="Confirm Password"
            formProps={form.getInputProps('confirmPassword')}
          />
        </SimpleGrid>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100px',
            maxWidth: '700px',
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
            Sign up
          </Button>
        </Box>
      </form>
    </Stack>
  );
}

export default SignUp;
