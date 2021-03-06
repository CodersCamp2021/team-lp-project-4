import { Grid, Box, Text, ScrollArea } from '@mantine/core';
import { Game } from '../../interfaces/Games';
import { Rating } from '../../interfaces/Rating';
import UserTile from './UserTile';

type GameInfoProps = Pick<Game, 'description'> & {
  ratings: Rating | undefined;
};

const GameInfo = ({ description, ratings }: GameInfoProps) => {
  return (
    <Grid>
      <Grid.Col md={8} span={12}>
        <Box
          sx={(theme) => ({
            width: '94%',
            [theme.fn.smallerThan('md')]: { width: '100%', margin: '0 auto' },
          })}
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
            sx={(theme) => ({
              height: 350,
              paddingRight: 15,
              [theme.fn.smallerThan('xl')]: {
                width: '90%',
              },
              [theme.fn.smallerThan('md')]: {
                width: '100%',
              },
            })}
          >
            <Text
              color="#EBEBEB"
              align="justify"
              sx={(theme) => ({
                fontWeight: 200,
                fontSize: 24,
                lineHeight: '36px',
                [theme.fn.smallerThan('xl')]: {
                  fontSize: 18,
                  lineHeight: '24px',
                },
              })}
            >
              {description}
            </Text>
          </ScrollArea>
        </Box>
      </Grid.Col>
      <Grid.Col
        span={4}
        sx={(theme) => ({ [theme.fn.smallerThan('md')]: { margin: '0 auto' } })}
      >
        <Text
          color="#A79CB8"
          sx={{
            fontWeight: 600,
            fontSize: 34,
            align: 'left',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            whiteSpace: 'nowrap',
          }}
        >
          RATED BY
        </Text>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column-reverse',
            height: '90%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          {ratings && ratings.rating.length > 0
            ? ratings.rating
                .slice(-3)
                .map((rating) => (
                  <UserTile key={rating._id} ratingObj={rating} />
                ))
            : null}
        </Box>
      </Grid.Col>
    </Grid>
  );
};

export default GameInfo;
