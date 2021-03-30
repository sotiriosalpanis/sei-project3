import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid, Pagination } from 'semantic-ui-react'

const ArtistIndex = () => {

  const [artists, setArtists] = useState([])

  useEffect(() => {
    setArtists()
  }, [])

  const getData = async () => {
    const response = await axios.get('/api/artists')
    setArtists(response.data)
  }
  getData()

  return (

    <>
      <Grid centered stackable>
        <Grid.Row columns={4}>
          { artists.map( artist => {
            return <Grid.Column key={artist._id}>
            </Grid.Column> 
          })}
        </Grid.Row>
      </Grid>

      <div className="index-pagination">
        <Pagination defaultActivePage={5} totalPages={10} />
      </div>

    </>

  )
}

export default ArtistIndex
