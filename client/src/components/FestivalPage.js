import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Header, Grid, Segment, Image } from 'semantic-ui-react'

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

  console.log(festivalData)

  const { startDate, endDate, festivalName, mainFestivalImage, lineup } = festivalData
  const startDateString = new Date(startDate).toDateString()
  const endDateString = new Date(endDate).toDateString()

  return (
    <Grid stackable container columns={3} divided>
      
      <Grid.Row stretched>
        <Grid.Column>
          <Segment>
            <Image src={`${mainFestivalImage}`} />
          </Segment>
          <Segment><Header>{festivalName}</Header></Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>{startDateString} - {endDateString}</Segment>
          <Segment>2</Segment>
          <Segment>3</Segment>
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
