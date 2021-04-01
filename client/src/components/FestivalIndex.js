import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid, Dropdown, Container, Segment } from 'semantic-ui-react'

import FestivalCard from './FestivalCard'

// import image1 from '../../../backend/assets/mainFestivalImage/nos-alive-main.jpeg'

const FestivalIndex = () => {
  const [festivals, setFestivals] = useState([])
  // const [filteredCountries, setFilteredCountries] = useState([])
  const [filteredFestivals, setFilteredFestivals] = useState([])

  const [filterValues, setFilterValues] = useState({
    country: '',
    price: '',
    artist: ''
  })

  // const [filterValueCountry, setFilterValueCountry] = useState('')
  // const [filterValueArtist, setFilterValueArtist] = useState('')
  // const [filterValuePrice, setFilterValuePrice] = useState('')

  // console.log(filterValuePrice)

  // console.log('FILTERED FESTIVALS', filteredFestivals)

  let masterArray = []
  
  // let filteredFestPrice = []
  // let filteredFestArtist = []
  // let filteredFestCountry = []
  // let masterFilteredArray = []

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
      try{
        const response = await axios.get('/api/festivals')
      setFestivals(response.data)
      } catch (err) {
        console.log('Errors>>>',err)
      }
      
    }
    getData()
  }, [])


  // * HANDLE CHANGE ----------------------------------------------------------
  // * HANDLE CHANGE COUNTRIES
  // const handleChangeCountries = (event, data) => {
  //   const filteredCountry = event.target.innerText
  //   console.log('data country', data.name)
  //   // console.log('ETV COUNTRY>>', filteredCountry)
  //   setFilterValueCountry(filteredCountry)
  // }

  // // * HANDLE CHANGE ARTISTS 
  // const handleChangeArtists = (event, data) => {
  //   const filteredArtist = event.target.innerText
  //   console.log('data artist', data.name)
  //   // console.log('ETV FILTERED ARTISTS>', filteredArtist)
  //   setFilterValueArtist(filteredArtist)
  // }

  // // * HANDLE CHANGE PRICE
  // const handleChangePrice = (event, data) => {
  //   console.log('event target name>>', event.target.name)
  //   console.log('data price', data.name)
  //   const filteredPrice = data.value
  //   // console.log('ETV FILTERED PRICE>', filteredPrice)
  //   setFilterValuePrice(filteredPrice)
  // }
  // * HANDLE CHANGE ALL
  const handleChangeAll = (event, data) => {
    // console.log(event)
    const newFilters = { ...filterValues, [data.name]: data.value }
    // console.log('NEW FILTERS', newFilters)
    setFilterValues(newFilters)
  }

  // * RETURN FILTERED FESTIVALS ----------------------------------------------

  // useEffect(() => {
  //   for (const [key, value] of Object.entries(filterValues)) {
  //     console.log(`${key}: ${value}`)
      
  //     let filteredArray = [ ...festivals ]
  //     console.log('filteredArray', filteredArray.length)
  //     // * ARTIST
  //     // if (key === 'artist' && value === '') {
  //     //   setFilteredFestivals(festivals)
  //     // }
  //     if (key === 'artist' && value !== '') {
  //       filteredArray = festivals.filter(festival => {
  //         if (festival.lineup.includes(value) === true) {
  //           return festival.lineup
  //         } 
  //       })
  //       console.log('Artist filteredArray', filteredArray.length)
  //     }

  //     // * COUNTRY
  //     // if (key === 'country' && value === '') {
  //     //   setFilteredFestivals(festivals)
  //     // }
  //     if (key === 'country' && value !== '') {
  //       filteredArray = festivals.filter(festival => {
  //         return festival.country === value
  //       })
  //       // console.log('FILTERE FEST COUNTRY', filteredFestCountry)
  //       console.log('Country filteredArray', filteredArray.length)
  //       setFilteredFestivals(filteredArray)
  //     }

  useEffect(() => {
    const countryFilterValue = filterValues.country
    const artistFilterValue = filterValues.artist
    const priceFilterValue = filterValues.price

    let filteredArray = []
    filteredArray = festivals.filter(festival => {
      return festival.country === countryFilterValue
      
    })
    setFilteredFestivals(filteredArray)
    if (!artistFilterValue && !priceFilterValue) {
      setFilteredFestivals(filteredArray)
    } else if (filteredArray.length === 0) {
      filteredArray = festivals.filter(festival => {
        return festival.lineup.includes(artistFilterValue) === true
      })
      setFilteredFestivals(filteredArray)   
    } else {
      filteredArray = filteredArray.filter(festival => {
        return festival.lineup.includes(artistFilterValue) === true
      })
      setFilteredFestivals(filteredArray)
    }
    if (priceFilterValue && filteredArray.length === 0 ) {
          if (priceFilterValue === 'cheap') {
            filteredArray = festivals.filter(festival => {
        return (festival.price <= 50)
      })
    }
    if (priceFilterValue === 'midOne') {
      filteredArray = festivals.filter(festival => {
        return (festival.price >= 50 && festival.price <= 100)
      })
    }
    if (priceFilterValue === 'midTwo') {
      filteredArray = festivals.filter(festival => {
        return (festival.price >= 100 && festival.price <= 200)
      })
    }
    if (priceFilterValue === 'expensive') {
      filteredArray = festivals.filter(festival => {
        return (festival.price >= 200)
      })
    }
      setFilteredFestivals(filteredArray)
    } else {
      if (priceFilterValue === 'cheap') {
        filteredArray = filteredArray.filter(festival => {
          return (festival.price <= 50)
        })
      }
      if (priceFilterValue === 'midOne') {
        filteredArray = filteredArray.filter(festival => {
          return (festival.price >= 50 && festival.price <= 100)
        })
      }
      if (priceFilterValue === 'midTwo') {
        filteredArray = filteredArray.filter(festival => {
          return (festival.price >= 100 && festival.price <= 200)
        })
      }
      if (priceFilterValue === 'expensive') {
        filteredArray = filteredArray.filter(festival => {
          return (festival.price >= 200)
        })
      }
        setFilteredFestivals(filteredArray)
    }
  },[filterValues])
      
      
      // else {
      //   setFilteredFestivals(festivals)
      // }





  // * FILTERED BY COUNTRY
  // useEffect((event) => {
  //   if (!filterValueCountry) return (
  //     setFilteredFestivals(festivals)
  //   )
  //   console.log('event', event)
  //   filteredFestCountry = filteredFestivals.filter(festival => {
  //     return festival.country === filterValueCountry
  //   })
  //   // console.log('FILTEREDFESTCOUNTRY', filteredFestCountry)
  //   setFilteredFestivals(filteredFestCountry)
  // }, [filterValueCountry, festivals])
  
  // * FILTERED BY ARTIST
  // useEffect(() => {
  //   if (!filterValueArtist) return (
  //     setFilteredFestivals(festivals)
  //   )
  //   filteredFestArtist = filteredFestivals.filter(festival => {
  //     if (festival.lineup.includes(filterValueArtist) === true) {
  //       return festival.lineup
  //     } 
  //   })
  //   // console.log('FILTEREDFESTARTIST', filteredFestArtist)
  //   setFilteredFestivals(filteredFestArtist)
  // }, [filterValueArtist, festivals])


  // * FILTERED BY PRICE
  // useEffect((event) => {
  //   if (!filterValuePrice) return (
  //     setFilteredFestivals(festivals)
  //   )
  //   console.log('event', event)
  //   // console.log('FILTERVALUE PRICE>>', filterValuePrice)
  //   if (filterValuePrice === 'cheap') {
  //     filteredFestPrice = filteredFestivals.filter(festival => {
  //       return (festival.price <= 50)
  //       // console.log('festival price cheap', festival.price <= 50)
  //     })
  //   }
  //   if (filterValuePrice === 'midOne') {
  //     filteredFestPrice = filteredFestivals.filter(festival => {
  //       return (festival.price >= 50 && festival.price <= 100)
  //     })
  //   }
  //   if (filterValuePrice === 'midTwo') {
  //     filteredFestPrice = filteredFestivals.filter(festival => {
  //       return (festival.price >= 100 && festival.price <= 200)
  //     })
  //   }
  //   if (filterValuePrice === 'expensive') {
  //     filteredFestPrice = filteredFestivals.filter(festival => {
  //       return (festival.price >= 200)
  //     })
  //   }
  //   // console.log('FILTEREDFESTPRICE', filteredFestPrice)
  //   setFilteredFestivals(filteredFestPrice)
  // }, [filterValuePrice, festivals])


  // * FILTER ALL




  // masterFilteredArray = [...filteredFestCountry, ...filteredFestArtist, ...filteredFestPrice]
  // console.log('MASTER FILTERED ARRAY', masterFilteredArray)

  // * --------------------------------------------------------------------------------
  // * COUNTRIES FILTER
  let countries = festivals.map(festival => {
    return festival.country
  })
  const countriesSet = new Set(countries)
  countries = [...countriesSet]
  const countriesOptions = countries.map(country => {
    return { key: `${country}`, text: `${country}`, value: `${country}`, flag: `${country.toLowerCase()}` }
  })

  // * ARTISTS FILTER
  const festivalsLineupMapped = festivals.map(festival => {
    return festival.lineup
  })
  festivalsLineupMapped.forEach(artists => {
    const newArray = artists.map(artist => {
      return artist
    })
    masterArray = [... masterArray, ... newArray]
  })
  const artistsSet = new Set(masterArray.sort())
  const artistsMapped = [...artistsSet]
  const artistsOptions = artistsMapped.map(artist => {
    return { key: `${artist}`, text: `${artist}`, value: `${artist}` }
  })

  // * PRICE FILTER
  const priceOptions = [
    { key: 'cheap', text: 'under £50', value: 'cheap' },
    { key: 'midOne', text: '£50 - £100', value: 'midOne' },
    { key: 'midTwo', text: '£100 - 200', value: 'midTwo' },
    { key: 'expensive', text: 'over £200', value: 'expensive' }
  ]

  // * HANDLE RESET
  // const handleReset = (event) => {
    
  // }


  // * IF NO FESTIVALS
  if (!festivals) return null

  // * RETURN ---------------------------------------------------------------------------
  return (

    <Container textAlign='justified'>

      <Segment.Inline>

        { /* Semantic UI Countries*/ }
        <Dropdown
          clearable
          search
          selection
          options={countriesOptions}
          onChange={handleChangeAll}
          placeholder='Country'
          name='country'
          className="index-dropdown"
          // value={countriesOptions}
        />

        {/* <select name="filter" id="filter" onChange={handleChangeCountries}>
          <option value='All'>All</option>
          {countries.map(country => (
            <option key={country} 
              value={country}>
              {country}
            </option>
          ))}
        </select> */}

        {/* {festivals.map(festival => (
            <option key={festival._id}
              value={festival.country}
            >{festival.country}</option>
          ))} */}
        

        { /* Semantic UI Artists */ }
        <Dropdown placeholder='Artists' name='artist' clearable selection options={artistsOptions} onChange={handleChangeAll} className="index-dropdown"/>

        { /* Semantic UI Price */ }
        <Dropdown placeholder='Price per day (£)' name='price' clearable selection options={priceOptions} onChange={handleChangeAll} className="index-dropdown"/>



      </Segment.Inline>

      {/* <Segment.Inline>
        <Button basic inverted color='violet'>Submit</Button>
        <Button basic inverted color='violet'>Reset</Button>
      </Segment.Inline> */}

      <div className="ui divider"></div>

      <Grid centered stackable>
        <Grid.Row columns={3} centered>
          {/* {console.log('filteredfestivals', filteredFestivals)} */}
          {filteredFestivals.length === 0 ? 
            <>
              { festivals.map( festival => {
                return <Grid.Column key={festival._id}>
                  <FestivalCard { ...festival } />
                </Grid.Column> 
              })}
            </>
            :
            <>
              { filteredFestivals.map( festival => {
                return <Grid.Column key={festival._id}>
                  <FestivalCard { ...festival } />
                </Grid.Column> 
              })}
            </>
          } 
          
        </Grid.Row>
      </Grid>

      {/* <div className="index-pagination">
        <Pagination defaultActivePage={5} totalPages={10} />
      </div> */}

    </Container>

  )
  
}

export default FestivalIndex
