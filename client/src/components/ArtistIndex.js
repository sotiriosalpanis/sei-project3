import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ArtistIndex = () => {
  const [artists, setArtists] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/artists')
      setArtists(data)
    }
    console.log('artists2', artists)
    getData()
  }, [])


  return (
    <>
      <Grid centered stackable>
        <Grid.Row columns={3}>
          {artists.map( artist => {
            return (
              <Grid.Column key={artist._id}>
                <div className='artist-grid' key={artist.id}>
                  <div className='artist-index-info'>
                  <Link Link to={`/artists/${artist._id}`}>
                    <h1 className='index-artist-name'>{artist.artist}</h1>
                  </Link>
                  <p><h3>Festivals: </h3>{artist.festivals.map( (festival, index) => {
                    return (
                        <p key={index} className='festival-name' >{festival}</p>
                    )
                  })}</p>
                  </div>
                  <div className='artist-index-image'>
                  <Link Link to={`/artists/${artist._id}`}>
                  <Image src={artist.image}/>
                  </Link>
                  </div>
                </div>
              </Grid.Column> 
            )
          })}
        </Grid.Row>
      </Grid>
    </>

  )
}

export default ArtistIndex
