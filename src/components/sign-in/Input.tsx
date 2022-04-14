import { TextInput } from '@mantine/core';
import { GetInputPropsPayload } from '@mantine/form/lib/types';

function Input({
  label,
  placeholder,
  formProps,
}: {
  label: string;
  placeholder: string;
  formProps: GetInputPropsPayload;
}) {
  return (
    <TextInput
      required
      size="md"
      label={label}
      placeholder={placeholder}
      styles={{
        label: {
          textTransform: 'uppercase',
          fontWeight: 700,
          fontSize: '20px',
          color: '#A79CB8',
          letterSpacing: 4,
        },
        input: {
          backgroundColor: '#09090A77',
          color: '#fcfcfc',
          letterSpacing: 1,
          fontSize: '18px',
        },
      }}
      {...formProps}
    />
  );
}

export default Input;
