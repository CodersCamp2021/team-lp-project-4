import { Center, Button } from '@mantine/core';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

function RatingButtons() {
  return (
    <Center>
      <Button
        sx={(theme) => ({
          fontFamily: theme.fontFamily,
          fontSize: 32,
          fontWeight: 600,
          backgroundColor: 'transparent',
          marginRight: 10,
        })}
      >
        <FaThumbsUp color="rgb(255, 255, 255)" size={40} />
        Like
      </Button>
      <Button
        sx={(theme) => ({
          fontFamily: theme.fontFamily,
          fontSize: 32,
          fontWeight: 600,
          backgroundColor: 'transparent',
          marginLeftt: 10,
        })}
      >
        <FaThumbsDown color="rgb(255, 255, 255)" size={40} />
        Dislike
      </Button>
    </Center>
  );
}

export default RatingButtons;
