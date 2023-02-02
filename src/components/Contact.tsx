import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { GitHub, LinkedIn, Send } from '@mui/icons-material';
import theme from '../Theme';

export default function Contact() {
  return (
    <Box p='3rem 0' sx={{ backgroundColor: '#222', width: '100%' }}>
      <Container>
        <Grid container direction='column' alignItems='center' spacing={4}>
          <Grid item>
            <Typography
              variant='h4'
              component='h2'
              color={theme.palette.common.white}
              sx={{ ...theme.serif }}
            >
              <b style={{ fontSize: '40px', marginRight: '0.5rem' }}>03.</b>{' '}
              Contact Me
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              fontSize='1.25rem'
              color={theme.palette.common.white}
              sx={{ ...theme.sans }}
            >
              If you would like to get in touch, email is the best bet! 😊
            </Typography>
          </Grid>
          <Grid item>
            <Grid container direction='row' spacing={5} alignItems='center'>
              <Grid item>
                <Button
                  component='a'
                  href='mailto:sossw1@gmail.com'
                  rel='noopener noreferrer'
                  target='_blank'
                  variant='outlined'
                  sx={{
                    ...theme.sans,
                    fontSize: '1rem',
                    lineHeight: 1.5,
                    fontWeight: 700
                  }}
                  endIcon={<Send />}
                >
                  Email
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component='a'
                  target='_blank'
                  href='https://github.com/sossw1'
                >
                  <GitHub sx={{ fontSize: '40px' }} />
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component='a'
                  target='_blank'
                  href='https://linkedin.com/in/william-soss'
                >
                  <LinkedIn sx={{ fontSize: '40px' }} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
