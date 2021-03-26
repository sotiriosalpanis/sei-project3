import React from 'react'
import { Card, Image } from 'semantic-ui-react'



const FestivalCard = ({ festivalName, mainFestivalImage, venue, country, startDate, endDate }) => {
  
  return (
    <Card>
      <Image src={`${mainFestivalImage}`} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{festivalName}</Card.Header>
        <Card.Description>
          {venue} - {country}
        </Card.Description>
        <Card.Description>
          {startDate} - {endDate}
        </Card.Description>
      </Card.Content>
    </Card>


  )

}

export default FestivalCard
