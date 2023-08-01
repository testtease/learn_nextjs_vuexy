// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Kick start your project 🚀'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>Trial Template</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt consequuntur sapiente tempora aliquid
              exercitationem ipsa vitae laudantium doloremque, quasi mollitia laborum quos nostrum autem aliquam porro
              animi alias? Pariatur recusandae quas eos fuga. Libero tempora neque laudantium. Hic amet, dolorem
              laudantium ex, ut a totam asperiores veritatis quae voluptatum minus.
            </Typography>
            <Button variant='tonal' sx={{ mt: 2 }}>
              Ini Tombol
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
