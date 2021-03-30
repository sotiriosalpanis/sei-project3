import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid, Dropdown, Pagination } from 'semantic-ui-react'

import FestivalCard from './FestivalCard'

// import image1 from '../../../backend/assets/mainFestivalImage/nos-alive-main.jpeg'

const FestivalIndex = () => {
  const [festivals, setFestivals] = useState([])

  const countryOptions = [
    { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
    { text: `${festivals.country}` }
  ]

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/api/festivals')
      setFestivals(response.data)
      console.log('FESTIVALS country>>', response.data.country)
    }
    getData()

  }, [])

  if (!festivals) return null
  return (

    <>
      <div className="filter-container">
        <Dropdown
          clearable
          fluid
          multiple
          search
          selection
          options={countryOptions}
          placeholder='Select Country'
        />
      </div>

      <Grid centered stackable>
        <Grid.Row columns={4}>
          { festivals.map( festival => {
            return <Grid.Column key={festival._id}>
              <FestivalCard {...festival} />
            </Grid.Column> 
          })}
        </Grid.Row>
      </Grid>

      <div className="index-pagination">
        <Pagination defaultActivePage={5} totalPages={10} />
      </div>

    </>

  )
  
}

export default FestivalIndex
