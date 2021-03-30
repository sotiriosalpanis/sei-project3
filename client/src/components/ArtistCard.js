import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import { Card } from 'semantic-ui-react'

const ArtistCard = () => {
  const params = useParams()
  const [artist, setArtist] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/artists/${params.id}`)
      setArtist(data)
    }
    getData()
  }, [])

  console.log('1 artist', artist)
  console.log('artist.festivals', artist.festivals)

  // need to add images and so on once the data is there
  return (
    <>
      <p>{artist.artist}</p>

      {(artist === []) ?

        <p>Festivals:{artist.festivals.map( festival => {
          return (
            <div key={festival._id}>
              <p className='festival-name' >{festival}</p>
            </div>
          )
        })}</p>
        :
        <p>loading</p>
      }
    </>
  )

}

export default ArtistCard


// {(artist === []) ?

//   <p>Festivals:{artist.festivals.map( festival => {
//     return (
//       <div key={festival._id}>
//         <p className='festival-name' >{festival}</p>
//       </div>
//     )
//   })}</p>

//   :

//   <p>loading</p>
// }