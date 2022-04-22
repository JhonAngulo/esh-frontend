import pageUnder from '../../assets/pageUnder.png'
import { Grid, Typography } from '@mui/material'
import Image from 'next/image'



function PageUnderConstruction() {

  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      direction="column"
    >
      <Grid item>
        <Image src={pageUnder} width='600' height='600' atl='imagen de sitio en construcción' style={{ padding: '5px' }} />
      </Grid>
      <Grid item>
        <Typography component="p">
          Página en construcción
        </Typography>
      </Grid>
    </Grid>
  )
}

export default PageUnderConstruction
