import React from 'react'
import { Divider, Container, Image, Grid, Header } from 'semantic-ui-react'
const Footer = () => {

  


  return (
    <footer className='footer'>
      <Divider/>
      <Container>
        <Grid columns={4, 'equal'} relaxed padded >
          <Grid.Row>
            <Grid.Column >
              <Header className='homeHeader' as='h6'>Share this on twitter</Header>
              <Image size='tiny' src={'https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png'} circular />
            </Grid.Column>
            <Grid.Column>
              <Header className='homeHeader' as='h6'>Share this on facebook</Header>
              <Image size='tiny' src={'https://lh3.googleusercontent.com/proxy/f4TfPm6XT0q6E3oMMTXVe0ACnQbpXjtGiW66fK2wJPqzQ-AQmEnEXu2wT_w06w92SL85iiMeN-4S2_fuij9qEFPSbm_d3JSgSZo8Q6z63KVDyLkkRTkATdpfkc2rH2nk7yLlB-9YC1aO9iVGZ94WoJDqo0XYdyceS1VoWaxg5AqPSVbo8Ajrk3Eksw'} circular />
            </Grid.Column>
            <Grid.Column>
              <Header className='homeHeader' as='h6'>Share this on twitter</Header>
              <Image size='tiny' src={'https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png'} circular />
            </Grid.Column>
            <Grid.Column>
              <Header className='homeHeader' as='h6'>Share this on twitter</Header>
              <Image size='tiny' src={'https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png'} circular />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <Divider/>
    </footer>
  )
}

export default Footer
