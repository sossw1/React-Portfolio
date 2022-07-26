import { Button, Container, Typography } from '@mui/material';
import { VolumeUp } from '@mui/icons-material';

export default function Intro() {
  return (
    <Container sx={{ mt: '1rem' }}>
      <Typography variant='h1' fontWeight='600' fontFamily='serif'>
        Bill Soss{' '}
        <Typography
          variant='h3'
          display='inline'
          color='primary'
          fontFamily='serif'
        >
          noun (1)
        </Typography>
      </Typography>
      <Typography variant='h5' fontFamily='serif' mb='0.75rem'>
        bill·soss
        <Typography
          variant='h5'
          p='0 1.5rem'
          fontFamily='serif'
          fontWeight='bold'
          display='inline'
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
        >
          <VolumeUp />
        </Button>{' '}
        \
      </Typography>
      <Typography variant='h4' fontFamily='serif' mb='0.5rem'>
        Definition of <i>bill soss</i> (Entry 1 of 1)
      </Typography>
      <Typography variant='h5' fontFamily='serif' sx={{ fontWeight: '500' }}>
        <Typography
          variant='h5'
          display='inline'
          fontFamily='serif'
          fontWeight='bold'
          pr='1rem'
        >
          1
        </Typography>
        : a full-stack web developer
      </Typography>
    </Container>
  );
}
