import { Box, Image } from '@mantine/core';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type HomeGameProps = {
  id: string;
  title: string;
  src: string;
};

const hoverAnimation = { scale: 1.13, originY: 0.5 };

const HomeGame = ({ id, title, src }: HomeGameProps) => {
  return (
    <motion.div
      whileHover={hoverAnimation}
      style={{
        backgroundColor: '#1F1F1FBB',
        borderRadius: '5px',
      }}
    >
      <Box component={Link} to={`/games/${id}`}>
        <Image radius={3} p={5} src={src} alt={title} />
      </Box>
    </motion.div>
  );
};

export default HomeGame;
