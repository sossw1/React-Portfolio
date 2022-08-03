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

export default function Greeter() {
  return (
    <Box m='5rem 0' textAlign='center'>
      <Box
        display='flex'
        flexDirection={
          useMediaQuery(theme.breakpoints.down(450)) ? 'column' : 'row'
        }
        justifyContent='center'
        overflow='hidden'
        mb={useMediaQuery(theme.breakpoints.down(450)) ? '1rem' : 0}
        sx={{
          animation: `2s ${lineUp} ease-out`
        }}
      >
        <Typography
          variant='h3'
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
          variant='h3'
          component='h1'
          display='inline'
          sx={{
            ...theme.narration
          }}
        >
          Hi, I'm Bill Soss
        </Typography>
      </Box>
      <Box
        display='flex'
        flexDirection='row'
        overflow='hidden'
        sx={{
          opacity: 0,
          animation: `2s ${lineUp} ease-out`,
          animationDelay: '0.2s',
          animationFillMode: 'forwards'
        }}
      >
        <Typography
          variant='h4'
          component='p'
          sx={{
            ...theme.narration
          }}
        >
          Here's a little info about me:
        </Typography>
      </Box>
    </Box>
  );
}
