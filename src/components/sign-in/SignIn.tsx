import * as Yup from 'yup';
import { useForm, yupResolver } from '@mantine/form';
import {
  Button,
  Group,
  PasswordInput,
  Space,
  Stack,
  Text,
} from '@mantine/core';
import Input from './Input';

const schema = Yup.object().shape({
  email: Yup.string().required('Email is required!').email('Invalid email'),
  password: Yup.string().required('Password is required!'),
});

function SignIn() {
  const form = useForm({
    schema: yupResolver(schema),
    initialValues: {
      email: '',
      password: '',
    },
  });

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
          letterSpacing: 25,
          fontSize: '100px',
          color: '#A79CB8cc',
          fontWeight: 900,
          textShadow: '7px 5px #4c4c4c',
        }}
      >
        LOGIN
      </Text>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
              color: 'white',
              letterSpacing: 5,
              fontSize: '18px',
              border: '1px solid #09090A11',
            },
          }}
          {...form.getInputProps('password')}
        />

        <Group position="center" mt="xl">
          <Button type="submit">Sign in</Button>
        </Group>
      </form>
    </Stack>
  );
}

export default SignIn;
