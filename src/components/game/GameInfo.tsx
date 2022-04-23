import { Grid, Box, Text, ScrollArea } from '@mantine/core';
import { Game } from '../../interfaces/Games';
import { Rating } from '../../interfaces/Rating';
import UserTile from './UserTile';

type GameInfoProps = Pick<Game, 'description'> & { ratings: Rating[] };

const GameInfo = ({ description, ratings }: GameInfoProps) => {
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
          {ratings
            ? ratings.length > 0
              ? ratings
                  .slice(-3)
                  .map((rating) => (
                    <UserTile key={rating._id} ratingObj={rating} />
                  ))
              : null
            : null}
        </Box>
      </Grid.Col>
    </Grid>
  );
};

export default GameInfo;
