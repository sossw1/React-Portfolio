import { useState, useEffect } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { VolumeUp } from '@mui/icons-material';
import theme from '../Theme';

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
    <Container sx={{ mt: '1rem' }}>
      <Typography
        variant='h1'
        fontFamily='Playfair Display,serif'
        fontWeight='bold'
      >
        bill soss{' '}
        <Typography
          variant='h3'
          display='inline'
          color='primary'
          fontFamily='Playfair Display,serif'
        >
          noun (1)
        </Typography>
      </Typography>
      <Typography variant='h5' mb='0.75rem' sx={{ ...theme.dictionary }}>
        bill·soss
        <Typography
          variant='h5'
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
      <Typography variant='h4' mb='0.5rem' sx={{ ...theme.dictionary }}>
        Definition of <i>bill soss</i> (Entry 1 of 1)
      </Typography>
      <Typography variant='h5' sx={{ fontWeight: '500', ...theme.dictionary }}>
        <Typography
          variant='h5'
          display='inline'
          fontWeight='bold'
          pr='1rem'
          sx={{ ...theme.dictionary }}
        >
          1 :
        </Typography>
        a full-stack web developer
      </Typography>
    </Container>
  );
}
