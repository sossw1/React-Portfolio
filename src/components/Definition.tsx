import { useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Button,
  Paper,
  Typography,
  useMediaQuery
} from '@mui/material';
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

  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Paper
      component='section'
      elevation={smDown ? 0 : undefined}
      sx={{
        width: smDown ? '100%' : undefined,
        mb: '5rem',
        p: smDown ? '5rem 3rem' : '5rem',
        borderRadius: smDown ? 0 : '10px',
        opacity: 0,
        animation: `${lineUp} 2s ease-out`,
        animationDelay: '0.4s',
        animationFillMode: 'forwards'
      }}
    >
      <Box
        display='flex'
        flexDirection={lgDown ? 'column' : 'row'}
        alignItems='center'
      >
        <Box mr={lgDown ? undefined : '5rem'} mb={lgDown ? '3rem' : undefined}>
          <Avatar
            variant='square'
            src='/images/avatar.jpg'
            alt='avatar'
            sx={{
              width: smDown ? '300px' : '375px',
              height: smDown ? '400px' : '500px',
              borderRadius: '10px'
            }}
          ></Avatar>
        </Box>
        <Box>
          <Box mb='1rem'>
            <Typography
              variant={mdDown ? 'h2' : 'h1'}
              component='h2'
              mr={smDown ? 0 : '1.5rem'}
              display={smDown ? undefined : 'inline'}
              fontFamily='Playfair Display,serif'
              fontWeight='bold'
            >
              bill soss
            </Typography>
            <Box
              mb={smDown ? '1rem' : 0}
              display={smDown ? undefined : 'inline'}
            >
              <Typography
                variant={mdDown ? (smDown ? 'h4' : 'h3') : 'h2'}
                component='span'
                display={smDown ? undefined : 'inline'}
                color='primary'
                fontFamily='Playfair Display,serif'
              >
                noun (1)
              </Typography>
            </Box>
          </Box>
          <Box mb='1rem'>
            <Typography
              variant='h5'
              component='span'
              mb='0.75rem'
              sx={{ ...theme.dictionary }}
              hidden={useMediaQuery(theme.breakpoints.down(500))}
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
            </Typography>
            <Typography
              variant='h5'
              component='p'
              mb='0.75rem'
              display='inline'
              sx={{ ...theme.dictionary }}
            >
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
          </Box>
          <Box mb='1rem'>
            <Typography
              variant={mdDown ? 'h5' : 'h4'}
              component='h3'
              mb='1rem'
              display='inline'
              sx={{ ...theme.dictionary }}
            >
              Definition of <i>bill soss</i>{' '}
            </Typography>
            <Typography
              variant={mdDown ? 'h5' : 'h4'}
              component='span'
              display={
                useMediaQuery(theme.breakpoints.down(550)) ? 'block' : 'inline'
              }
            >
              (Entry 1 of 1)
            </Typography>
          </Box>
          <Box>
            {[
              'full-stack web developer',
              '9-ball billiards team captain',
              'pc and board game enthusiast'
            ].map((item, index) => (
              <Typography
                key={uuid()}
                variant='h5'
                component='p'
                mb='1rem'
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
      </Box>
    </Paper>
  );
}
