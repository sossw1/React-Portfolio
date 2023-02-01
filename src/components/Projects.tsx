import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Typography
} from '@mui/material';
import theme from '../Theme';
import { useMediaQuery } from '@mui/material';

export default function Projects() {
  const size450Down = useMediaQuery(theme.breakpoints.down(450));

  return (
    <Container>
      <Typography variant='h4' component='h2' mb='2rem' sx={{ ...theme.serif }}>
        <b style={{ fontSize: '40px', marginRight: '0.5rem' }}>02.</b> Projects
      </Typography>
      <Grid container direction='row' justifyContent='center' mb='5rem'>
        <Grid item textAlign='center'>
          <Card
            sx={{
              borderRadius: '10px'
            }}
          >
            <CardHeader title='Chatter' />
            <CardMedia
              component='img'
              image='/images/chatter-screenshot.png'
              alt='Chatter app screenshot'
            />
            <CardContent>
              <Typography variant='body2'>
                A real-time chat application that allows you to add friends,
                <br hidden={size450Down} />
                join chat rooms and send messages to people!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
