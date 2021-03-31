import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/auth'
import { Container, Header, Segment } from 'semantic-ui-react'
import ReactMapGL, { Marker } from 'react-map-gl'

const UserProfile = () => {

  const [userInfo, setUserInfo] = useState(null)
  const [userFestivals, setUserFestivals ] = useState(null)
  const [festivals, setFestivals ] = useState(null)

  const [viewport, setViewport] = useState({
    latitude: 51.515,
    longitude: -0.078,
    zoom: 7
  })


  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/profile',{
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
      })
      setUserInfo(data)
    }
    getData()
  },[])

  

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/festivals')
        
        const myFestivals = data.filter(festival => {
          if (festival.festivalAttendance.length > 0) {
            festival.festivalAttendance.filter(attendance => {
              if (attendance.user === userInfo._id) {
                return festival
              }
            })
            return festival
          }
        })
        setUserFestivals(myFestivals)
        const otherFestivals = data.filter(festival => {
          return festival.festivalAttendance.length === 0
        })
        setFestivals(otherFestivals)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  },[userInfo])

  if (!userInfo ) return null
  if (!userFestivals ) return null
  if (!festivals) return null




  const { username } = userInfo

  return (
    <Container>
      <Segment>
        {!userInfo ? <Header>It looks like you do not have an account</Header> : <Header>Welcome {username}</Header>}
      </Segment>

      
      {userFestivals.map(festival => {
        return <Segment key={festival._id}>
          {festival.festivalName}
        </Segment>
      })}

      <Segment className='map-container-medium'>
        <ReactMapGL 
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          height='100%'
          width='100%'
          mapStyle='mapbox://styles/mapbox/light-v10'
          {...viewport}
          onViewportChange={(viewport) => setViewport(viewport)}
        >
          {userFestivals.map(festival => {
            return <Marker
              key={festival._id}
              longitude={festival.longitude}
              latitude={festival.latitude}
            > 
            ⭐️
            </Marker>
          })}
          {festivals.map(festival => {
            return <Marker
              key={festival._id}
              longitude={festival.longitude}
              latitude={festival.latitude}
            > 
            📍
            </Marker>
          })}
        </ReactMapGL>
      </Segment>
    </Container>
  )
}

export default UserProfile
