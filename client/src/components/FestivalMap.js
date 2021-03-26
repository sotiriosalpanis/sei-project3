import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { Link } from 'react-router-dom'

const FestivalMap = () => {

  const [ mapData, setMapData ] = useState(null)

  const [ popup, setPopup ] = useState(null)

  const [viewport, setViewport] = useState({
    latitude: 51.515,
    longitude: -0.078,
    zoom: 2
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
  if (!viewport) return null


  return (
    <div className="map-container">
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        height='100%'
        width='100%'
        mapStyle='mapbox://styles/mapbox/light-v10'
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {mapData.map(location => {
          return <Marker
            key={location._id}
            longitude={location.longitude}
            latitude={location.latitude}
          >
            <span onClick={() => setPopup(location)}>
            📍
            </span>            
          </Marker>
        })}
        { popup &&
          <Popup
            latitude={popup.latitude}
            longitude={popup.longitude}
            closeOnClick={false}
            onClose={() => setPopup(null)}
          >
            {popup.festivalName}
            <Link to={`/festivals/${popup._id}`}>
              <p>More info</p>
            </Link>
          </Popup>
        }
      </ReactMapGL>
    </div>
  )
}

export default FestivalMap
