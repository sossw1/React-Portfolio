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
      <Box>
        <Typography
          variant='h4'
          component='h2'
          mb='1rem'
          sx={{ ...theme.serif }}
        >
          <b style={{ fontSize: '40px', marginRight: '0.5rem' }}>01.</b> About
          Me
        </Typography>
        <Typography
          variant='body1'
          component='p'
          sx={{ ...theme.sans, fontSize: '1.25rem' }}
        >
          Incididunt est est fugiat labore amet ut quis incididunt culpa
          consectetur excepteur incididunt amet velit. Irure aliquip magna
          deserunt ex aliqua tempor ullamco ut tempor nisi. Voluptate officia
          sint exercitation dolor esse deserunt deserunt nulla proident ut
          deserunt Lorem.
        </Typography>
      </Box>
    </Container>
  );
}
