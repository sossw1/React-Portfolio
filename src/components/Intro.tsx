import { Container, Typography } from '@mui/material';

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
    </Container>
  );
}
