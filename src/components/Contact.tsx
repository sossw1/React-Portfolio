import { Button, Container, Grid, Typography } from '@mui/material';
import { GitHub, LinkedIn, Send } from '@mui/icons-material';
import theme from '../Theme';

export default function Contact() {
  return (
    <Container>
      <Grid
        container
        direction='column'
        alignItems='center'
        spacing={4}
        mb='3rem'
      >
        <Grid item>
          <Typography variant='h4' component='h2' sx={{ ...theme.serif }}>
            <b style={{ fontSize: '40px', marginRight: '0.5rem' }}>03.</b>{' '}
            Contact Me
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' fontSize='1.25rem'>
            If you would like to get in touch, email is the best bet! 😊
          </Typography>
        </Grid>
        <Grid item>
          <Grid container direction='row' spacing={5} alignItems='center'>
            <Grid item>
              <Button
                variant='outlined'
                sx={{
                  fontSize: '1rem',
                  lineHeight: 1.5
                }}
                endIcon={<Send />}
              >
                Email
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
