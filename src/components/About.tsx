import { Box, Typography, useMediaQuery } from '@mui/material';
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
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box m='5rem 0'>
      <Box
        display='flex'
        flexDirection={smDown ? 'column' : 'row'}
        justifyContent='center'
        alignItems='center'
        overflow='hidden'
        mb='2rem'
        sx={{
          animation: `2s ${lineUp} ease-out`
        }}
      >
        <Typography
          variant='h2'
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
          variant='h1'
          display='inline'
          pb='1.5rem'
          sx={{
            ...theme.sans,
            fontSize: '80px'
          }}
        >
          Hi, I'm Bill Soss
        </Typography>
      </Box>
    </Box>
  );
}
