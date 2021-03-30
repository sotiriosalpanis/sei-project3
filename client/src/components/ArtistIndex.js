import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid } from 'semantic-ui-react'

const ArtistIndex = () => {

  const [artists, setArtists] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/artists')
      setArtists(data)
      console.log(artists)
    }
    getData()
  }, [])

  return (
    <>
      <Grid centered stackable>
        <Grid.Row columns={4}>
          {artists.map( artist => {
            return (
              <Grid.Column key={artist._id}>
                <div key={artist._id}>
                  <h1>{artist.artist}</h1>
                  <p>Festivals: {artist.festivals}</p>
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
