import * as Yup from 'yup';
import { useForm, yupResolver } from '@mantine/form';
import { Box, Button, PasswordInput, Space, Stack, Text } from '@mantine/core';
import { useState } from 'react';
import { fetchData, Response } from '../../utils/fetchData';
import Input from './Input';

const schema = Yup.object().shape({
  email: Yup.string().required('Email is required!').email('Invalid email!'),
  password: Yup.string().required('Password is required!'),
});

function SignIn() {
  const [response, setResponse] = useState<Response>({});
  const form = useForm({
    schema: yupResolver(schema),
    initialValues: {
      email: '',
      password: '',
    },
  });

  const loggin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const data = await fetchData<Response>(
      'http://team-lp-project-3.herokuapp.com/user/login',
      {
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
      },
    );
    console.log(data);
    setResponse(data);
  };

  const handleSubmit = (values: typeof form.values): void => {
    loggin(values)
      .then((res) => res)
      .catch((err) => console.error(err));
  };

  return (
    <Stack
      sx={{
        justifyContent: 'center',
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
          {response.error ? (
            <Text sx={{ color: 'white', paddingLeft: 10 }}>
              {response.error}
            </Text>
          ) : (
            <></>
          )}
          <Button
            type="submit"
            compact
            size="xl"
            sx={{
              color: 'black',
              background: '#fcfcfc',
              mixBlendMode: 'screen',
              '&:before': { position: 'absolute', mixBlendMode: 'color-burn' },
              '&:hover': { background: '#777' },
            }}
          >
            Sign up
          </Button>
        </Box>
      </form>
    </Stack>
  );
}

export default SignIn;
