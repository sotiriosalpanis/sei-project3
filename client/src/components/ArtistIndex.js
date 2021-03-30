import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ArtistIndex = () => {
  const [artists, setArtists] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/artists')
      setArtists(data)
    }
    getData()
    console.log(artists)
  }, [])

  return (
    <>
      <Grid centered stackable>
        <Grid.Row columns={3}>
          {artists.map( artist => {
            return (
              <Grid.Column key={artist._id}>
                <div className='artist-grid' key={artist.id}>
                  <Link Link to={`/artists/${artist._id}`}>
                    <h1>{artist.artist}</h1>
                  </Link>
                  <p>Festivals: {artist.festivals.map( festival => {
                    return (
                      <div key={festival._id}>
                        <p className='festival-name' >{festival}</p>
                      </div>
                    )
                  })}</p>
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
