import { Grid, Image } from '@mantine/core';
import HomeGame from './HomeGame';

const games = [
  {
    _id: '62212e715a4dc7551a3ebe94',
    title: 'CS:GO',
    cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co271e.jpg',
  },
  {
    _id: '622130075a4dc7551a3ebe99',
    title: 'Minecraft',
    cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3r51.jpg',
  },
  {
    _id: '62212e715a4dc7551a3ebe94',
    title: 'CS:GO',
    cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co271e.jpg',
  },
  {
    _id: '622130075a4dc7551a3ebe99',
    title: 'Minecraft',
    cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3r51.jpg',
  },
  {
    _id: '62212e715a4dc7551a3ebe94',
    title: 'CS:GO',
    cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co271e.jpg',
  },
  {
    _id: '622130075a4dc7551a3ebe99',
    title: 'Minecraft',
    cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3r51.jpg',
  },
  {
    _id: '62212e715a4dc7551a3ebe94',
    title: 'CS:GO',
    cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co271e.jpg',
  },
  {
    _id: '622130075a4dc7551a3ebe99',
    title: 'Minecraft',
    cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3r51.jpg',
  },
  {
    _id: '62212e715a4dc7551a3ebe94',
    title: 'CS:GO',
    cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co271e.jpg',
  },
  {
    _id: '622130075a4dc7551a3ebe99',
    title: 'Minecraft',
    cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3r51.jpg',
  },
  {
    _id: '62212e715a4dc7551a3ebe94',
    title: 'CS:GO',
    cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co271e.jpg',
  },
  {
    _id: '622130075a4dc7551a3ebe99',
    title: 'Minecraft',
    cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3r51.jpg',
  },
  {
    _id: '62212e715a4dc7551a3ebe94',
    title: 'CS:GO',
    cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co271e.jpg',
  },
  {
    _id: '622130075a4dc7551a3ebe99',
    title: 'Minecraft',
    cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3r51.jpg',
  },
  {
    _id: '62212e715a4dc7551a3ebe94',
    title: 'CS:GO',
    cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co271e.jpg',
  },
  {
    _id: '622130075a4dc7551a3ebe99',
    title: 'Minecraft',
    cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3r51.jpg',
  },
];

const HomeGames = () => {
  return (
    <Grid>
      {games.map((game) => {
        const { _id, title, cover } = game;
        return <HomeGame key={_id} id={_id} title={title} src={cover} />;
      })}
    </Grid>
  );
};

export default HomeGames;
