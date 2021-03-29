import React from 'react'
import { Card, Image } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'



const FestivalCard = ({ _id, festivalName, mainFestivalImage, venue, country, startDate, endDate }) => {

  const startDateString = new Date(startDate).toDateString()
  const endDateString = new Date(endDate).toDateString()

  return (
    <Card>
      <Image 
        src={`${mainFestivalImage}`} 
        wrapped ui={false}
        as='a' 
        href={`/festivals/${_id}`}
      />
      <Card.Content>
        <Card.Header>{festivalName}</Card.Header>
        <Card.Description>
          {venue} - {country}
        </Card.Description>
        <Card.Description>
          {startDateString} - {endDateString}
        </Card.Description>
      </Card.Content>
    </Card>


  )

}

export default FestivalCard
