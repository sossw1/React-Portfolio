import { Box, Typography } from '@mui/material';
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

const upAndRotation = keyframes`
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
    <Box
      mt='5rem'
      pb='1rem'
      display='flex'
      flexDirection='row'
      sx={{ overflow: 'hidden', animation: `2s ${lineUp} ease-out` }}
    >
      <Box>
        <Typography
          variant='h3'
          pb='1.5rem'
          pr='1.5rem'
          sx={{
            animation: `${upAndRotation} 0.5s linear 2`,
            animationDelay: '1s'
          }}
        >
          👋
        </Typography>
      </Box>
      <Box>
        <Typography
          variant='h3'
          display='inline'
          component='p'
          mb='1rem'
          sx={{
            ...theme.narration
          }}
        >
          Hi, I'm Bill Soss
        </Typography>
      </Box>
    </Box>
  );
}
