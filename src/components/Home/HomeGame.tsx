import { Image } from '@mantine/core';
import { Link } from 'react-router-dom';

type HomeGameProps = {
  id: string;
  title: string;
  src: string;
};

const HomeGame = ({ id, title, src }: HomeGameProps) => {
  return (
    <Link to={`/games/${id}`}>
      <Image src={src} alt={title} />
    </Link>
  );
};

export default HomeGame;
