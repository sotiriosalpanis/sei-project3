import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Header, Grid, Segment, Image, Flag, Button, Label } from 'semantic-ui-react'
import ReactMapGL, { Marker } from 'react-map-gl'
import { userIsAuthenticated, getTokenFromLocalStorage, userIsOwner } from '../helpers/auth.js'


const FestivalPage = () => {

  const { id } = useParams()
  const [ festivalData, setFestivalData ] = useState()
  const [ userAttendingStatus, setUserAttendingStatus ] = useState(
    {
      interested: false,
      going: false
    }
  )


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/festivals/${id}`)
        const { festivalAttendance } = data
        const userAttendence = festivalAttendance.filter(item => {
          return  userIsOwner(item.user)
        })
        if (userAttendence.length === 0){
          return userAttendingStatus
        } else {
          setUserAttendingStatus(userAttendence[0])
        }
        
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  },[id, userAttendingStatus])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/festivals/${id}`)
        setFestivalData(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  },[id, userAttendingStatus])

  if (!festivalData) return null

  const { startDate, endDate, festivalName, mainFestivalImage, lineup, website, price, venue, country, latitude, longitude, festivalAttendance } = festivalData
  const startDateString = new Date(startDate).toDateString()
  const endDateString = new Date(endDate).toDateString()

  const interestedAttendance = festivalAttendance.filter(item => item.interested === true)
  const goingAttendance = festivalAttendance.filter(item => item.going === true)

  const handleAttendance = async event => {
    let strToBool = false
    if (event.target.value === 'true' ){
      strToBool = true
    } 
    const newUserStatus = { ...userAttendingStatus, [event.target.name]: !strToBool }
    try {
      await axios.post(`/api/festivals/${id}/attendance`,newUserStatus, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`
        }
      })
      setUserAttendingStatus(newUserStatus)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Grid stackable container columns={3} divided textAlign='justified'>
      <Grid.Row>
        <Grid.Column width={12}>
          <Segment>
            <Header className='header-custom' size='huge'>{festivalName}</Header>
            <Image src={`${mainFestivalImage}`} />
          </Segment>
        </Grid.Column>
        <Grid.Column width={4} verticalAlign='middle'>
          
          
          <Segment>
          <Header size='medium'>
            Dates
          </Header>
          <Header sub>
            {startDateString}-{endDateString}
          </Header>
          </Segment>
          <Segment>
          <Header size='medium'>
            <Flag name={country.toLowerCase()}/> Location
          </Header>
          <Header sub>
            {venue}
          </Header>
          </Segment>

          <Segment>
            <Link to={website}>
              <Header size='medium'>Official website</Header>
            </Link>
            <Header size='small'>
              Price: £{price}
            </Header>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row verticalAlign='middle' stretched>
        <Grid.Column width={4} textAlign='center' >
          { userIsAuthenticated() ? 
            <>
              <Segment>
                <Button as='div' labelPosition='right'>
                  <Button
                    basic
                    color='violet'
                    name='interested'
                    value={userAttendingStatus.interested}
                    onClick={handleAttendance}
                  >
                      Interested
                  </Button>
                  <Label as='a' pointing='left' color='violet'>
                    { userAttendingStatus.interested ? 'Yes' : 'No' }
                  </Label>
                </Button>
              </Segment>
              <Segment>
                <Button as='div' labelPosition='right' >
                  <Button
                    basic
                    color='blue'
                    onClick={handleAttendance}
                    name='going'
                    value={userAttendingStatus.going}
                  >
                      Going
                  </Button>
                  <Label as='a' pointing='left' color='blue'>
                    { userAttendingStatus.going ? 'Yes' : 'No' }
                  </Label>
                </Button>
              </Segment>
            </>
            : <Segment> <Link to={'/sign-in'}>Login or register</Link> to add this festival to your account</Segment>
          }
          <Segment>
            { interestedAttendance.length === 1 ? 
              <p>{interestedAttendance.length} of our members is interested</p>
              : <p>{interestedAttendance.length} of our members are interested</p>
            }
            { goingAttendance.length === 1 ? 
              <p>{goingAttendance.length} of our members is going</p>
              : <p>{goingAttendance.length} of our members are going</p>
            }
          </Segment>

        </Grid.Column>
        <Grid.Column width={12}>
          <Segment className='map-container-medium'>
            <ReactMapGL 
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
              height='100%'
              width='100%'
              mapStyle='mapbox://styles/mapbox/light-v10'
              latitude={latitude}
              longitude={longitude}
              zoom={13}
            >
              <Marker latitude={latitude} longitude={longitude}>
                📍
              </Marker>
            </ReactMapGL>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        {lineup.map(artist => {
          return <Grid.Column key={artist}>
            <Segment textAlign='center'>
              <Header sub>
                {artist}
              </Header>
            </Segment>
          </Grid.Column>
        })}
      </Grid.Row>
    </Grid>


  )
}

export default FestivalPage
