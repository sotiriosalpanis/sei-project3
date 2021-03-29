import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid, Dropdown, Pagination } from 'semantic-ui-react'

import FestivalCard from './FestivalCard'

// import image1 from '../../../backend/assets/mainFestivalImage/nos-alive-main.jpeg'

const FestivalIndex = () => {
  const [festivals, setFestivals] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [filterValue, setFilterValue] = useState('')
  console.log('set filter value', setFilterValue)

  // const countryOptions = [
  //   { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
  //   { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
  //   { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
  //   { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
  //   { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
  //   { text: `${countries.country}` }
  // ]



  // const countryOptions = festivals.map((festival) => {
  //   <option key={festival._id}>{festival.country}</option>
  // })
  // console.log('countryoptions>> ', countryOptions)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/api/festivals')
      setFestivals(response.data)
    }
    getData()

  }, [])

  const handleChange = (event) => {
    const filteredCountry = event.target.value
    console.log('ETV', filteredCountry)
    console.log('filtered countries>', filteredCountries)
    setFilterValue(filteredCountry)

  }

  useEffect((event) => {
    if (!filterValue || filterValue === 'All') return (
      setFilteredCountries(festivals)
    )

    console.log('event', event)
    const filteredFest = festivals.filter(festival => {
      return festival.country === filterValue
    })
    console.log('FILTEREDARRAY>>', filteredFest)
    setFilteredCountries(filteredFest)
  }, [filterValue, festivals])
  
  let countries = festivals.map(festival => {
    return festival.country
  })
  console.log('countries', countries)

  const countriesSet = new Set(countries)
  console.log('countriesSet>>>', countriesSet)

  countries = [...countriesSet]
  console.log('COUNTRIES>>>>>', countries)

  // * semantic UI countries filter
  const countriesOptions = countries.map(country => {
    return { text: `${country}` }
  })

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
          options={countriesOptions}
          placeholder='Select Country'
        />

        <select name="filter" id="filter" onChange={handleChange}>
          <option value='All'>All</option>
          {countries.map(country => (
            <option key={country} 
              value={country}>
              {country}
            </option>
          ))}

          {/* {festivals.map(festival => (
            <option key={festival._id}
              value={festival.country}
            >{festival.country}</option>
          ))} */}
        </select>
      </div>

      <Grid centered stackable>
        <Grid.Row columns={4}>
          { filteredCountries.map( festival => {
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
