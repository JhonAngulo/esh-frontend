import * as React from 'react';
import Typography from '@mui/material/Typography';
import PageUnderConstruction from '@/components/PageUnderConstruction';

export default function Index() {
  return (
    <>
      <Typography variant="h4" component="h1" color='primary' >
        Easy Smart Home - Home Page
      </Typography>

      <PageUnderConstruction/>
    </>
    
  );
}
