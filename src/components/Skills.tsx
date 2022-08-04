import { Box, Typography } from '@mui/material';
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
    </Box>
  );
}
