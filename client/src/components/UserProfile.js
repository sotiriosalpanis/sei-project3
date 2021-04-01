import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/auth'
import { Container, Header, Segment, Grid } from 'semantic-ui-react'
import ReactMapGL, { Marker } from 'react-map-gl'
import { Link } from 'react-router-dom'

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
      <Grid textAlign='justified'>
        <Grid.Row stretched>
          <Grid.Column>
          <Segment padded>
            {!userInfo ? <Header size='large'>It looks like you do not have an account</Header> : <Header id='your-profile-header' size='large' textAlign='center'>{username}, welcome to your Festivalist page</Header>}
          </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row verticalAlign='middle'>
          <Grid.Column width={4}>
            <Segment textAlign='center'>
              <Header>Your Festivalist</Header>
              <Segment.Group stacked>
              {userFestivals.map(festival => {
        return <Link 
        key={festival._id}
        to={`/festivals/${festival._id}`}
        >
        <Segment textAlign='center'>
          {festival.festivalName}
        </Segment>
        </Link>
      })}
              </Segment.Group>
              
      <Segment secondary textAlign='center'>
      <Header sub>
        <Link to={'/festivals'}>
        Explore more festivals
        </Link>
      </Header>
      </Segment>
      <Grid.Column width={4}>
            <Segment textAlign='center'>
              <Header sub>Map Key</Header>
              <Segment>🕺🏻 your festivals</Segment>
              <Segment>🎪 more festivals!</Segment>
            </Segment>
            

          </Grid.Column>

            </Segment>
          </Grid.Column>
          <Grid.Column width={12}>
          <Segment className='map-container-medium-large'>
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
            🕺🏻
            </Marker>
          })}
          {festivals.map(festival => {
            return <Marker
              key={festival._id}
              longitude={festival.longitude}
              latitude={festival.latitude}
            > 
            🎪
            </Marker>
          })}
        </ReactMapGL>
      </Segment>
      

          </Grid.Column>
        </Grid.Row>

      </Grid>


      



    </Container>
  )
}

export default UserProfile
