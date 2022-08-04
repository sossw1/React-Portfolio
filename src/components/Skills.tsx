import { Box, Button, Icon, Paper, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { v4 as uuid } from 'uuid';
import theme from '../Theme';

const logos = [
  { name: 'HTML', path: '/images/HTML.png' },
  { name: 'CSS', path: '/images/CSS.png' },
  { name: 'JavaScript', path: '/images/JavaScript.png' },
  { name: 'TypeScript', path: '/images/TypeScript.png' },
  { name: 'Node.js', path: '/images/NodeJS.png' },
  { name: 'MongoDB', path: '/images/MongoDB.png' },
  { name: 'MySQL', path: '/images/MySQL.png' },
  { name: 'React', path: '/images/React.png' },
  { name: 'Mui', path: '/images/Mui.png' },
  { name: 'Jest', path: '/images/Jest.png' }
];

export default function Skills() {
  return (
    <Box mb='5rem'>
      <Typography
        variant='h3'
        component='h2'
        mb='2rem'
        sx={{ ...theme.narration }}
        textAlign='center'
      >
        Skills
      </Typography>
      <Box display='flex' flexDirection='row'>
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
        <Box
          m='0 0.5rem'
          maxWidth='70vw'
          display='flex'
          flexDirection='row'
          sx={{ overflowX: 'hidden' }}
        >
          {logos.map((logo) => (
            <Paper
              key={uuid()}
              sx={{
                m: '0 0.5rem',
                p: '0.5rem',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Box
                component='img'
                src={logo.path}
                width='100px'
                height='100px'
                m='0 1rem 1rem'
              ></Box>
              <Typography
                variant='h6'
                component='p'
                textAlign='center'
                sx={{ ...theme.dictionary }}
              >
                {logo.name}
              </Typography>
            </Paper>
          ))}
        </Box>
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
