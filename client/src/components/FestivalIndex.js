import React, { useState, useEffect } from 'react'
import axios from 'axios'

import FestivalCard from './FestivalCard'

// import image1 from '../../../backend/assets/mainFestivalImage/nos-alive-main.jpeg'

const FestivalIndex = () => {
  const [festivals, setFestivals] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/api/festivals')
      setFestivals(response.data)
    }
    getData()

  }, [])
  console.log('FESTIVALS1>>', festivals)

  if (!festivals) return null
  return (
    <>
      <div>
        {/* <img src={image1} /> */}
        { festivals.map( festival => (
          <FestivalCard key={festival._id}{...festival} />
        ))}
      </div>
    </>
  )
  
}

export default FestivalIndex
