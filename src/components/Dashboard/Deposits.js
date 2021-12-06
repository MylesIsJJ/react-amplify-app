import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Made Today</Title>
      <Typography component="p" variant="h4">
        $3,250
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on December 13 2021
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more dates 
        </Link>
      </div>
    </React.Fragment>
  );
}
