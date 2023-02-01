import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import { keyframes } from '@mui/system';
import theme from '../Theme';

const lineUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(80%);
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const rotation = keyframes`
  0% {
    tranform: rotate(0deg);
  }
  50% {
    transform: rotate(30deg);
  }
  100% {
    tranform: rotate(-60deg);
  }
`;

export default function About() {
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const down750 = useMediaQuery(theme.breakpoints.down(750));

  return (
    <Container sx={{ m: '5rem 0' }}>
      <Box
        display='flex'
        flexDirection={down750 ? 'column' : 'row'}
        justifyContent='center'
        alignItems='center'
        textAlign='center'
        overflow='hidden'
        mb='2rem'
        sx={{
          animation: `2s ${lineUp} ease-out`
        }}
      >
        <Typography
          variant={mdDown ? (down750 ? 'h2' : 'h3') : 'h2'}
          component='span'
          pb='1.5rem'
          pr='1.5rem'
          sx={{
            animation: `${rotation} 0.4s linear 3`,
            animationDelay: '1s'
          }}
        >
          👋
        </Typography>
        <Typography
          variant={mdDown ? 'h2' : 'h1'}
          display='inline'
          pb='1.5rem'
          sx={{
            ...theme.sans,
            fontSize: mdDown ? undefined : '80px'
          }}
        >
          Hi, I'm Bill Soss
        </Typography>
      </Box>
      <Typography variant='h4' component='h2' mb='1rem' sx={{ ...theme.serif }}>
        <b style={{ fontSize: '40px', marginRight: '0.5rem' }}>01.</b> About Me
      </Typography>
      <Typography
        variant='body1'
        component='p'
        mb='1rem'
        sx={{ ...theme.sans, fontSize: '1.25rem' }}
      >
        I am a full-stack web developer. I love to implement designs and bring
        features to life! I work with JavaScript/TypeScript, React, HTML and CSS
        to deliver quality front-end products. I also have experience developing
        APIs, SQL/NoSQL databases, and servers with popular tools like NodeJS,
        Express, MongoDB, PostgreSQL, and socket.io
      </Typography>
      <Typography
        variant='body1'
        component='p'
        sx={{ ...theme.sans, fontSize: '1.25rem' }}
      >
        In my personal life, I am engaged to be married to my wonderful fiance,
        Emily, this year on November 5th! I have been the captain of an amateur
        9-ball billiards team for about five years (division champs three
        times). I enjoy video games, D&D, board games, boating/jet skiing,
        running/lifting, and time spent with family.
      </Typography>
    </Container>
  );
}
