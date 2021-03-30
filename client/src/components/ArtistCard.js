import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import { Card } from 'semantic-ui-react'

const ArtistCard = () => {
  const params = useParams()
  const [artist, setArtist] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/artists/${params.id}`)
      setArtist(data)
    }
    getData()
    console.log('one artists', artist)
  }, [])

  // need to add images and so on once the data is there
  return (

    <>
      <p>{artist.artist}</p>
      <p>{artist.festivals.map( festival => {
        return (
          <div key={festival._id}>
            <p className='festival-name' >{festival}</p>
          </div>
        )
      })}</p>
    </>
  )

}

export default ArtistCard