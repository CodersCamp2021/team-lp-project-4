import { forwardRef } from 'react';
import { ChevronRight } from 'tabler-icons-react';
import { Group, Avatar, Text, UnstyledButton } from '@mantine/core';

export interface UserButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {
  name: string;
  email: string;
  icon?: React.ReactNode;
}

export const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  function usrButton({ name, email, icon, ...others }: UserButtonProps, ref) {
    return (
      <UnstyledButton
        ref={ref}
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          padding: 7,
          borderRadius: 5,
          color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor: '#7048e8',
          },
        })}
        {...others}
      >
        <Group>
          <Avatar radius="xl">
            {name
              .split(' ')
              .reduce(
                (previousValue, currentValue) =>
                  previousValue + currentValue[0],
                '',
              )}
          </Avatar>

          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500} color="white">
              {name}
            </Text>

            <Text color="dimmed" size="xs">
              {email}
            </Text>
          </div>

          {icon || <ChevronRight size={16} />}
        </Group>
      </UnstyledButton>
    );
  },
);
