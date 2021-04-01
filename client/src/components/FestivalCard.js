/* eslint-disable react/prop-types */
import React from 'react'
import { Card, Container } from 'semantic-ui-react'

const FestivalCard = ({ _id, festivalName, venue, mainFestivalImage, country, startDate, endDate }) => {

  const startDateString = new Date(startDate).toDateString()
  const endDateString = new Date(endDate).toDateString()

  return (
  
    <>
      <Card id="festival-card"
        as='a' 
        href={`/festivals/${_id}`}
      >
        <Container
            style={{
              backgroundImage: `url(${mainFestivalImage})`
            }}
            as='a'
            href={`/festivals/${_id}`}
            className="festival-card-image-wrapper">
              <div className="festival-card-title">
                {festivalName.toUpperCase()}
              </div>
        </Container>

        {/* <div className="festival-card-image-wrapper">
          style={{
              backgroundImage: `url(${mainFestivalImage})`
            }}
            <span>{festivalName}</span>
        </div> */}

        <div className="festival-card-info-wrapper">
          <p className="festival-card-venue">{venue.toUpperCase()} - {country.toUpperCase()}</p>
          <p className="festival-card-dates">{startDateString} - {endDateString}</p>
        </div>

      </Card>
    </>



  )

}

export default FestivalCard