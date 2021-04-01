import React, { useEffect, useState } from 'react'
import { Image, Divider, Container, Grid, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Home = () => {
  const [festivals, setFestivals] = useState([])
  const [hero, setHero] = useState(0)
  useEffect(() => {
    getFestivals()
    const timerId = getNewFestival()
    return ()=> clearInterval(timerId)
  }, [hero])
  const getFestivals = () => {
    setFestivals([])
    const getData = async () => {
      const { data } = await axios.get('/api/festivals')
      setFestivals(data)
      console.log('fests',festivals)
      console.log(data)
    }
    getData()
    console.log('festivals', festivals)
  }
  let getNewImage = false
  const getNewFestival = () => {
    const timerId = setInterval(() => {
      setHero(Math.floor(Math.random() * 33))
      console.log(hero)
      getNewImage = !getNewImage
    }, 8000)
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
          {/* <Divider/> */}
          <Container>
          {/* <Header size='huge' inverted>Festivalist top picks</Header> */}
          <Divider horizontal><Header sub size="large">Festivalist top picks</Header></Divider>
                <div className='home-card-container'>
                <Grid.Column>
                  <div className='home-card'>
                  <div className='home-card-header'>
                  <h3>{festivals[0].festivalName}</h3>
                  </div>
                  <div className='home-card-image'>
                  <Link Link to={`/festivals/${festivals[0]._id}`}>
                  <Image src={festivals[0].mainFestivalImage}/>
                  </Link>
                  </div>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div className='home-card'>
                  <div className='home-card-header'>
                  <h3>{festivals[11].festivalName}</h3>
                  </div>
                  <div className='home-card-image'>
                  <Link Link to={`/festivals/${festivals[1]._id}`}>
                  <Image src={festivals[11].mainFestivalImage}/>
                  </Link>
                  </div>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div className='home-card'>
                  <div className='home-card-header'>
                  <h3 as='h3'>{festivals[27].festivalName}</h3>
                  </div>
                  <div className='home-card-image'>
                  <Link Link to={`/festivals/${festivals[27]._id}`}>
                  <Image src={festivals[27].mainFestivalImage}/>
                  </Link>
                  </div>
                  </div>
                </Grid.Column>
                </div>
          </Container>
                
            <Divider/>
        </>}
    </>
  )
}
export default Home