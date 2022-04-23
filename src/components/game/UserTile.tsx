import { useState } from 'react';
import { Box, Text } from '@mantine/core';
import { motion } from 'framer-motion';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

type UserProps = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  rating: number;
};

const hoverAnimation = { scale: 1.06, originY: 0.5 };

const UserTile = ({ user }: { user: UserProps }) => {
  const { firstName, lastName, username, rating } = user;
  const [hoveredTile, setHoveredTile] = useState<boolean>(false);

  return (
    <motion.div
      animate={hoveredTile ? hoverAnimation : undefined}
      onHoverStart={() => setHoveredTile(true)}
      onHoverEnd={() => setHoveredTile(false)}
    >
      <Box
        component={Link}
        to={'/'}
        sx={{
          textDecoration: 'none',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#211B25EE',
          padding: '0 20px',
          width: 380,
          height: 100,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'gray',
              borderRadius: '50%',
              width: 75,
              height: 75,
              marginRight: 20,
            }}
          >
            <Text
              sx={{
                width: '95%',
                textAlign: 'center',
                color: '#FEFEFE',
                fontWeight: 600,
                letterSpacing: 1,
                fontSize: 9,
              }}
            >
              PLACEHOLDER
            </Text>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Text
              sx={{
                fontWeight: 700,
                fontSize: 20,
                color: '#FFFFFF',
                lineHeight: '30px',
              }}
            >
              {firstName + ' ' + lastName}
            </Text>
            <Text
              sx={{
                fontWeight: 400,
                fontSize: 14,
                color: '#CDCBD1',
              }}
            >
              {username}
            </Text>
          </Box>
        </Box>

        <Text sx={{ fontWeight: 700, fontSize: 25, color: '#FFFFFF' }}>
          {rating === 2 ? '+' : rating === 1 ? '-' : ''}{' '}
          <AiFillStar fill="gold" style={{ verticalAlign: 'sub' }} size={30} />
        </Text>
      </Box>
    </motion.div>
  );
};

export default UserTile;
