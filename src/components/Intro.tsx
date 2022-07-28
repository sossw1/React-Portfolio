import { useState, useEffect } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { VolumeUp } from '@mui/icons-material';
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

export default function Intro() {
  const [audio] = useState(new Audio('/audio/billsoss.mp3'));
  const [playing, setPlaying] = useState(false);
  const togglePlaying = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return (
    <Box sx={{ backgroundColor: theme.palette.grey[300] }}>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Box mt='5rem'>
          <Typography
            variant='h3'
            textAlign='center'
            component='p'
            mb='1rem'
            sx={{
              ...theme.narration,
              width: '100%',
              height: '4rem',
              overflow: 'hidden',
              padding: 0,
              mb: '16px',
              animation: `2s ${lineUp} ease-out`
            }}
          >
            👋 Hi, I'm Bill Soss
          </Typography>
        </Box>
        <Paper
          component='section'
          sx={{ m: '5rem 0', p: '5rem', borderRadius: '10px' }}
        >
          <Typography
            variant='h1'
            fontFamily='Playfair Display,serif'
            fontWeight='bold'
          >
            bill soss{' '}
            <Typography
              variant='h3'
              component='span'
              display='inline'
              color='primary'
              fontFamily='Playfair Display,serif'
            >
              noun (1)
            </Typography>
          </Typography>
          <Typography
            variant='h5'
            component='p'
            mb='0.75rem'
            sx={{ ...theme.dictionary }}
          >
            bill·soss
            <Typography
              variant='h5'
              component='span'
              p='0 1.5rem'
              fontWeight='bold'
              display='inline'
              sx={{ ...theme.dictionary }}
            >
              |
            </Typography>
            \ 'bil sȯs{' '}
            <Button
              sx={{
                display: 'inline',
                lineHeight: '1rem',
                p: '0 5px',
                minWidth: '24px'
              }}
              onClick={togglePlaying}
            >
              <VolumeUp />
            </Button>{' '}
            \
          </Typography>
          <Typography
            variant='h4'
            component='h2'
            mb='1rem'
            sx={{ ...theme.dictionary }}
          >
            Definition of <i>bill soss</i> (Entry 1 of 1)
          </Typography>
          {[
            'full-stack web developer',
            '9-ball billiards team captain',
            'pc and board game enthusiast'
          ].map((item, index) => (
            <Typography
              variant='h5'
              component='p'
              mb='0.5rem'
              sx={{ fontWeight: '500', ...theme.dictionary }}
            >
              <Typography
                variant='h5'
                component='span'
                display='inline'
                fontWeight='bold'
                pr='1rem'
                sx={{ ...theme.dictionary }}
              >
                {index + 1} :
              </Typography>
              {item}
            </Typography>
          ))}
        </Paper>
      </Box>
    </Box>
  );
}
