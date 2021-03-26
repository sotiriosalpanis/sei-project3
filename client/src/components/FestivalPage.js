import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Header, Grid, Segment, Image, Flag } from 'semantic-ui-react'
import ReactMapGL, { Marker } from 'react-map-gl'

//For showing a single festival using an ID


const FestivalPage = () => {

  const { id } = useParams()
  const [ festivalData, setFestivalData ] = useState()

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
  },[])

  if (!festivalData) return null

  const { startDate, endDate, festivalName, mainFestivalImage, lineup, website, price, venue, country, latitude, longitude } = festivalData
  const startDateString = new Date(startDate).toDateString()
  const endDateString = new Date(endDate).toDateString()

  return (
    <Grid stackable container columns={3} divided>
      
      <Grid.Row stretched>
        <Grid.Column>
          <Segment>
            <Header>{festivalName}</Header>
            <Image src={`${mainFestivalImage}`} />
          </Segment>
          <Segment>
            <ReactMapGL 
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
              height='100%'
              width='100%'
              mapStyle='mapbox://styles/mapbox/streets-v11'
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
        <Grid.Column>
          <Segment>
            <div>
              {startDateString}-{endDateString}
            </div>
            <div>
              {venue}
            </div>
            <div>
              <Flag name={country.toLowerCase()}/>
            </div>
          </Segment>
          <Segment>
            <Link to={website}>
              <p>{festivalName} website</p>
            </Link>
          </Segment>
          <Segment>£{price}</Segment>
        </Grid.Column>
        <Grid.Column>
          {lineup.map(artist => {
            return <Segment key={artist}>
              {artist}
            </Segment>
          })}
        </Grid.Column>

      </Grid.Row>
    </Grid>


  )
}

export default FestivalPage
