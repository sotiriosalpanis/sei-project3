import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import ReactMapGL from 'react-map-gl'

const FestivalMap = () => {

  const [ mapData, setMapData ] = useState(null)


  useEffect(() => {
    const getData = async() => {
      try {
        const { data } = await axios.get('/api/festivals')
        setMapData(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  },[])

  if (!mapData) return null

  const { latitude, longitude } = mapData
  
  console.log(longitude,latitude)

  return (
    <div>
      <h1>Map</h1>
    </div>
  )
}

export default FestivalMap
