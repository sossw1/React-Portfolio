import { Box, Container, Typography } from '@mui/material';
import theme from '../Theme';

export default function Projects() {
  return (
    <Container>
      <Box>
        <Typography
          variant='h4'
          component='h2'
          mb='1rem'
          sx={{ ...theme.serif }}
        >
          <b style={{ fontSize: '40px', marginRight: '0.5rem' }}>02.</b>{' '}
          Projects
        </Typography>
      </Box>
    </Container>
  );
}
