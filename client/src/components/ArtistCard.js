import React, { useState, useEffect } from 'react'
import { Header, Grid, Image, Segment } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import FestivalCard from './FestivalCard.js'
// import { Card } from 'semantic-ui-react'

const ArtistCard = () => {
  const params = useParams()
  const [artist, setArtist] = useState(null)
  const [festivals, setFestivals] = useState(null)
  const [filteredFestivals, setFilteredFestivals] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/artists/${params.id}`)
      setArtist(data)
    }
    getData()
  }, [])
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/festivals/')
      setFestivals(data)
    }
    getData()
  }, [])


  if (artist === null) return null
  if (festivals === null) return null

  const findFestivals = () => {
    let festivalArray = []
    festivalArray = artist.festivals
    const tempArray = festivals.filter(fest => {
      return festivalArray.includes(fest.festivalName)
    })
    return (tempArray)
  }
  

  if (filteredFestivals === null) setFilteredFestivals(findFestivals()) 
  
  if (filteredFestivals === null) return null

  return (
    <>
      <main>
        {(!artist.festivals) ? 
          <h1>Loading</h1>
          :
          <>
            <Grid stackable relaxed padded >
              <Grid.Row columns={2}>
                <Grid.Column width={8}>
                  <Segment raised>
                  <Header className='header-custom' size='huge' as='h1'> {artist.artist} </Header>
                    <Image 
                      src={artist.image}
                      fluid
                      rounded
                    />
                  </Segment>
                </Grid.Column>
                <Grid.Column width={8}>
                  <iframe  src={`${artist.spotify}`} width="100%" height="100%" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row stretched columns={3}>
                {/* <Grid.Column width={14}> */}
                  {filteredFestivals.map((fest, index) => {
                    return <Grid.Column width={8} key={index}>
                      <FestivalCard   {...fest}/>
                      </Grid.Column>
                  })}

                

              </Grid.Row>
            </Grid>
          </>
        }
        
      </main>
    </>
  )

}
/* <p>{artist.artist}</p>
      {(!artist.festivals) ?
        <p>loading</p>
        :
        <div>Festivals:{artist.festivals.map( (festival, index) => {
          return (
            <div key={index}>
              <p className='festival-name' >{festival}</p>
            </div>
          )
        })}
        </div>
      } */
export default ArtistCard
