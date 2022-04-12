import { Box, Image } from '@mantine/core';
import { Link } from 'react-router-dom';

type HomeGameProps = {
  id: string;
  title: string;
  src: string;
};

const HomeGame = ({ id, title, src }: HomeGameProps) => {
  return (
    <Box
      component={Link}
      to={`/games/${id}`}
      sx={{
        backgroundColor: '#1F1F1FBB',
        borderRadius: '5px',
      }}
    >
      <Image radius={3} p={5} src={src} alt={title} />
    </Box>
  );
};

export default HomeGame;
