/* eslint-disable react/prop-types */
import React from 'react'
import { Card, Image } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'



const FestivalCard = ({ _id, festivalName, mainFestivalImage, venue, country, startDate, endDate }) => {

  const startDateString = new Date(startDate).toDateString()
  const endDateString = new Date(endDate).toDateString()

  return (
    <Card id="festival-card"
      as='a' 
      href={`/festivals/${_id}`}
    >
      <Image 
        src={`${mainFestivalImage}`}
        size='medium'
        wrapped ui={false}
      />
      <Card.Content className='header-custom'>
        <Card.Header >{festivalName}</Card.Header>
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
