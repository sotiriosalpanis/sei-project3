import React, { useEffect, useState } from 'react'
import { Image, Divider, Container, Header, Grid } from 'semantic-ui-react'
import axios from 'axios'

const Home = () => {
  const [festivals, setFestivals] = useState([])
  const [hero, setHero] = useState(0)
  const imagesToUse = [0,1,4,7,17,18,21,23,24]

  useEffect(() => {
    getFestivals()
    const timerId = getNewFestival()
    return ()=> clearInterval(timerId)
  }, [])

  const getFestivals = () => {
    setFestivals([])
    const getData = async () => {
      const { data } = await axios.get('/api/festivals')
      setFestivals(data)
    }
    getData()
  }

  let getNewImage = false
  const getNewFestival = () => {
    const timerId = setInterval(() => {
      setHero(Math.floor(Math.random() * imagesToUse.length))
      getNewImage = !getNewImage
    }, 3000)
    return timerId
  }

  return (
    <>
      {(festivals.length === 0) ? 
        <p> ...loading </p> 
        :
        <>
          <Container
            style={{
              backgroundImage: `url(${festivals[hero].mainFestivalImage})`
            }}
            as='a'
            href={`/festivals/${festivals[hero]._id}`}
            className='home-hero-container'>
          </Container>
          <Divider/>
          
          <Container className='home-festival-grid' > 
            <Grid columns={5} relaxed padded divided centered>
              <Grid.Row>
                <Grid.Column >
                  <Header className='homeHeader' as='h3'>{festivals[0].festivalName}</Header>
                  <Image size='huge' 
                    src={festivals[0].mainFestivalImage} 
                    circular 
                    as='a'
                    href={festivals[0].website}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Header className='homeHeader' as='h3'>{festivals[1].festivalName}</Header>
                  <Image size='huge' 
                    src={festivals[1].mainFestivalImage} 
                    circular 
                    as='a'
                    href={festivals[1].website}
                  />
                </Grid.Column>

                <Grid.Column>
                  <Header className='homeHeader' as='h3'>{festivals[17].festivalName}</Header>
                  <Image size='huge' 
                    src={festivals[17].mainFestivalImage} 
                    circular 
                    as='a'
                    href={festivals[17].website}
                  />
                </Grid.Column>
                
                <Grid.Column>
                  <Header className='homeHeader' as='h3'>{festivals[4].festivalName}</Header>
                  <Image size='huge' 
                    src={festivals[4].mainFestivalImage} 
                    circular 
                    as='a'
                    href={festivals[4].website}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider/>
          </Container>
        </>}
    </>
  )
}

export default Home