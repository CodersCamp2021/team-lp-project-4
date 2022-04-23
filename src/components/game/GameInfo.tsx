import { Grid, Box, Text, ScrollArea } from '@mantine/core';
import { Game } from '../../interfaces/Games';
import UserTile from './UserTile';

const userData = [
  {
    id: 1,
    firstName: 'Jakub',
    lastName: 'Czerwiński',
    username: 'kubaczerwinski77',
    rating: 2,
  },
  {
    id: 2,
    firstName: 'Maciej',
    lastName: 'Jankowski',
    username: 'macjank',
    rating: 2,
  },
  {
    id: 3,
    firstName: 'Łukasz',
    lastName: 'Powązka',
    username: 'lukiq',
    rating: 1,
  },
];

type GameInfoProps = Pick<Game, 'description'>;

const GameInfo = ({ description }: GameInfoProps) => {
  return (
    <Grid>
      <Grid.Col span={8}>
        <Box
          sx={{
            width: '94%',
          }}
        >
          <Text
            color="rgba(167, 156, 184, 1)"
            sx={{
              fontWeight: 700,
              fontSize: 34,
              letterSpacing: '0.125em',
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            }}
          >
            ABOUT
          </Text>
          <ScrollArea
            offsetScrollbars={true}
            type="auto"
            sx={{ height: 350, paddingRight: 15 }}
          >
            <Text
              color="#EBEBEB"
              align="justify"
              sx={{
                fontWeight: 200,
                fontSize: 24,
                lineHeight: '36px',
              }}
            >
              {description + description}
            </Text>
          </ScrollArea>
        </Box>
      </Grid.Col>
      <Grid.Col span={4}>
        <Text
          color="#A79CB8"
          sx={{
            fontWeight: 600,
            fontSize: 34,
            align: 'left',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          }}
        >
          RATED BY
        </Text>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '90%',
            justifyContent: 'space-evenly',
          }}
        >
          {userData.map((user) => (
            <UserTile key={user.id} user={user} />
          ))}
        </Box>
      </Grid.Col>
    </Grid>
  );
};

export default GameInfo;
