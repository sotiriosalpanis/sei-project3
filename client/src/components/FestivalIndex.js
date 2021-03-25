import React, { useState, useEffect } from 'react'
import axios from 'axios'

import FestivalCard from './FestivalCard'

const FestivalIndex = () => {
  const [festivals, setFestivals] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/api/festivals')
      setFestivals(response.data)
    }
    getData()
  }, [])

  return (
    <>
      { festivals &&
        <div>
          { festivals.map( festival => (
            <FestivalCard key={festival._id} {...festival} />
          ))}
        </div>
      }
    </>
  )
  
}

export default FestivalIndex
