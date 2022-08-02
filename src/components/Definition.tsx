import { useState, useEffect } from 'react';
import { Avatar, Box, Button, Paper, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import { VolumeUp } from '@mui/icons-material';
import { v4 as uuid } from 'uuid';
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

export default function Definition() {
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
    <Paper
      component='section'
      sx={{
        mb: '5rem',
        p: '5rem',
        borderRadius: '10px',
        opacity: 0,
        animation: `${lineUp} 1s ease-out`,
        animationDelay: '2s',
        animationFillMode: 'forwards'
      }}
    >
      <Box display='flex' flexDirection='row' alignItems='center'>
        <Box mr='5rem'>
          <Avatar
            variant='square'
            src='/images/avatar.jpg'
            sx={{ width: '15rem', height: '20rem', borderRadius: '10px' }}
          ></Avatar>
        </Box>
        <Box>
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
              key={uuid()}
              variant='h5'
              component='p'
              mb='0.5rem'
              fontWeight='500'
              sx={{ ...theme.dictionary }}
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
        </Box>
      </Box>
    </Paper>
  );
}
