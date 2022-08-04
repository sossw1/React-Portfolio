import { Box, Button, Icon, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import theme from '../Theme';

export default function Skills() {
  return (
    <Box>
      <Typography
        variant='h3'
        component='h2'
        mb='2rem'
        sx={{ ...theme.narration }}
      >
        Skills
      </Typography>
      <Box display='flex' flexDirection='row' pb='5rem'>
        <Button
          variant='contained'
          disableRipple
          aria-label='previous'
          sx={{
            color: 'white',
            minWidth: '32px',
            p: '6px'
          }}
        >
          <Icon sx={{ width: '30px', height: '30px' }}>
            <ChevronLeft />
          </Icon>
        </Button>
        <Box p='0 0.5rem' width='100%'></Box>
        <Button
          variant='contained'
          disableRipple
          aria-label='next'
          sx={{
            color: 'white',
            minWidth: '32px',
            p: '6px'
          }}
        >
          <Icon sx={{ width: '30px', height: '30px' }}>
            <ChevronRight />
          </Icon>
        </Button>
      </Box>
    </Box>
  );
}
