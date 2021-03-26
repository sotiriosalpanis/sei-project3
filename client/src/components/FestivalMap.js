import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import ReactMapGL from 'react-map-gl'
import ReactMapGL, { Marker } from 'react-map-gl'
// import { Container } from 'semantic-ui-react'

const FestivalMap = () => {

  const [ mapData, setMapData ] = useState(null)

  const [viewport, setViewport] = useState({
    latitude: 51.515,
    longitude: -0.078,
    zoom: 4
  })


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


  return (
    <div className="map-container">
      {/* <h1>Map</h1> */}
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        height='100%'
        width='100%'
        mapStyle='mapbox://styles/mapbox/streets-v11'
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {mapData.map(location => {
          return <Marker
            key={location._id}
            longitude={location.longitude}
            latitude={location.latitude}
          >
            📍
          </Marker>
        })}
      </ReactMapGL>
    </div>
  )
}

export default FestivalMap
