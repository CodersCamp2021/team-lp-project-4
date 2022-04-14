import * as Yup from 'yup';
import { useForm, yupResolver } from '@mantine/form';
import { TextInput, Button, Box, Group, PasswordInput } from '@mantine/core';

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
    <Box sx={{ maxWidth: 340 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="Email"
          placeholder="example@mail.com"
          {...form.getInputProps('email')}
        />
        <PasswordInput
          required
          label="Password"
          {...form.getInputProps('password')}
        />

        <Group position="right" mt="xl">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default SignIn;
