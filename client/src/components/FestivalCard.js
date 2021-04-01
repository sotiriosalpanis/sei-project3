/* eslint-disable react/prop-types */
import React from 'react'
import { Card } from 'semantic-ui-react'

const FestivalCard = ({ _id, festivalName, mainFestivalImage, venue, country, startDate, endDate }) => {

  const startDateString = new Date(startDate).toDateString()
  const endDateString = new Date(endDate).toDateString()

  return (
  
    <>
      <Card id="festival-card"
        as='a' 
        href={`/festivals/${_id}`}
      >
        <div className="festival-card-image-wrapper"></div>
      </Card>
    </>



  )

}

export default FestivalCard