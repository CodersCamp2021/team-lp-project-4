import { GetInputPropsPayload } from '@mantine/form/lib/types';
import { PasswordInput as PassInput } from '@mantine/core';

function PasswordInput({
  label,
  formProps,
}: {
  label: string;
  formProps: GetInputPropsPayload;
}) {
  return (
    <PassInput
      required
      label={label}
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
      {...formProps}
    />
  );
}

export default PasswordInput;
