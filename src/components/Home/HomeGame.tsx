import { Anchor, Grid, Image } from '@mantine/core';

type HomeGameProps = {
  id: string;
  title: string;
  src: string;
};

const HomeGame = ({ id, title, src }: HomeGameProps) => {
  return (
    <Grid.Col span={3}>
      <Anchor href={'https://google.com'}>
        <Image src={src} alt={title} width={100} height={100} />
      </Anchor>
    </Grid.Col>
  );
};

export default HomeGame;
