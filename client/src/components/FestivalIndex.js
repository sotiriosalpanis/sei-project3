import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid, Dropdown, Pagination, Button } from 'semantic-ui-react'

import FestivalCard from './FestivalCard'

// import image1 from '../../../backend/assets/mainFestivalImage/nos-alive-main.jpeg'

const FestivalIndex = () => {
  const [festivals, setFestivals] = useState([])
  // const [filteredCountries, setFilteredCountries] = useState([])
  const [filteredFestivals, setFilteredFestivals] = useState([])
  const [filterValue, setFilterValue] = useState('')

  // * Semantic UI example
  // const countryOptions = [
  //   { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
  //   { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' }
  // ]

  // const options = [
  //   { key: 'angular', text: 'Angular', value: 'angular' },
  //   { key: 'css', text: 'CSS', value: 'css' },
  //   { key: 'design', text: 'Graphic Design', value: 'design' },

  // const countryOptions = festivals.map((festival) => {
  //   <option key={festival._id}>{festival.country}</option>
  // })
  // console.log('countryoptions>> ', countryOptions)

  // * GET DATA
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/api/festivals')
      setFestivals(response.data)
    }
    getData()

  }, [])

  // * HANDLE CHANGE COUNTRIES
  const handleChangeCountries = (event) => {
    const filteredCountry = event.target.innerText
    console.log('ETV COUNTRY>>', filteredCountry)
    setFilterValue(filteredCountry)
  }

  // * HANDLE CHANGE OTHER
  const handleChange = (event) => {
    const filteredFestival = event.target.value
    console.log('ETV FILTEREDFEST>', filteredFestival)
    setFilterValue(filteredFestival)
  }

  // * RETURN FILTERED FESTIVALS
  useEffect((event) => {
    if (!filterValue || filterValue === 'All') return (
      setFilteredFestivals(festivals)
    )
    console.log('event', event)
    const filteredFest = festivals.filter(festival => {
      return festival.country === filterValue || festival.lineup === filterValue
    })
    setFilteredFestivals(filteredFest)
  }, [filterValue, festivals])
  

  // * SEMANTIC UI COUNTRIES FILTER
  let countries = festivals.map(festival => {
    return festival.country
  })
  const countriesSet = new Set(countries)
  countries = [...countriesSet]
  const countriesOptions = countries.map(country => {
    return { key: `${country}`, text: `${country}`, value: `${country}`, flag: `${country.toLowerCase()}` }
  })

  // * SEMANTIC UI ARTISTS FILTER
  let artists = festivals.map(festival => {
    return festival.lineup
  })
  const artistsSet = new Set(artists)
  artists = [...artistsSet]
  const artistsOptions = artists.map(artist => {
    return { key: `${artist}`, text: `${artist}`, value: `${artist}` }
  })

  // * SEMANTIC UI PRICE FILTER
  const priceOptions = [
    { key: 'cheap', text: 'under £50', value: 'cheap' },
    { key: 'midOne', text: '£50 - £100', value: 'midOne' },
    { key: 'midTwo', text: '£100-200', value: 'midTwo' },
    { key: 'expensive', text: 'over £200', value: 'expensive' }
  ]



  // * IF NO FESTIVALS
  if (!festivals) return null

  // * RETURN
  return (

    <>
      <div className="filters-container">

        { /* Semantic UI Countries*/ }
        <Dropdown
          onChange={handleChangeCountries}
          clearable
          fluid
          multiple
          search
          selection
          options={countriesOptions}
          placeholder='Select Country'
          // value={countriesOptions}
        />

        <select name="filter" id="filter" onChange={handleChangeCountries}>
          <option value='All'>All</option>
          {countries.map(country => (
            <option key={country} 
              value={country}>
              {country}
            </option>
          ))}
        </select>

        {/* {festivals.map(festival => (
            <option key={festival._id}
              value={festival.country}
            >{festival.country}</option>
          ))} */}
        

        { /* Semantic UI Artists */ }
        <Dropdown placeholder='Artists' fluid multiple selection options={artistsOptions} onChange={handleChange}/>

        { /* Semantic UI Price */ }
        <Dropdown placeholder='Price per day (£)' fluid multiple selection options={priceOptions} onChange={handleChange}/>


        

        <Button>Submit</Button>
        <Button>Reset</Button>
      </div>

      <Grid centered stackable>
        <Grid.Row columns={4}>
          { filteredFestivals.map( festival => {
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
