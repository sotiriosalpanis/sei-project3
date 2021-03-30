import React, { useEffect, useState } from 'react'
import { Image, Divider, Container, Header, Grid } from 'semantic-ui-react'
import axios from 'axios'

const Home = () => {
  let i = 0
  let displayFestivals = []
  const [dataSet, setDataSet] = useState(null)
  const [picState, setPicState] = useState(null)

  useEffect(()=>{
    const getPictures = async () => {
      try {
        const response = await axios.get('/api/festivals')
        console.log('HERE IS THE DATA>>', response)
        setDataSet(response.data)
      } catch (err) {
        console.log('ERROR IN HOME')
        console.log(err)
      }
    }
    getPictures()
    
  }, [])
  
  const changePicture = () => {
    if (dataSet.length > 0){
      i = 0
      i = Math.round(Math.random() * dataSet.length - 1)
      if (dataSet[i].mainFestivalImage !== false) {
        setPicState(dataSet[i].mainFestivalImage)
      }
    } else {
      setPicState('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmVzdGl2YWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80')
    }

    setTimeout(changePicture(), 10000)
    return
  }

  // const startPictureChange = () => {
  //   console.log('Interval Started')
  //   setInterval(() => {
  //     changePicture()
  //     console.log('picture changed>', picState)
  //   }, 10000)
  // }

  const setDisplayedFestivals = () => {
    const tempArray = []
    for (let f = 0; f < 4; f++) {
      const festival = dataSet[Math.round(Math.random(0, dataSet.length - 1) * dataSet.length)]
      if (tempArray.includes(festival)){
        f--
      } else {
        tempArray[f] = festival
      }      
    }
    return (tempArray)
  }
  
  if (!dataSet) return null
  if (dataSet !== null) {
    displayFestivals = setDisplayedFestivals()
    clearTimeout
    changePicture()
  }
  
  // if (!picState){
  //   clearTimeout
  //   changePicture()
  //   console.log('Inside if statement')
  // }
  

  if (!picState) return null
  
  return (
    <main>
      <Container fluid> 
        <Header  className='homeHeader' as='h1'>{dataSet[i].festivalName}</Header>
        <Image 
          src={picState}
          key={Date.now()}
          fluid
          as='a'
          href={dataSet[i].website}
        /> 
        
        
      </Container>
      <Divider/>
      <Container fluid> 
        <Grid columns={4, 'equal'} relaxed padded divided>
          <Grid.Row>
            <Grid.Column >
              <Header className='homeHeader' as='h3'>{displayFestivals[0].festivalName}</Header>
              <Image size='huge' 
                src={displayFestivals[0].mainFestivalImage} 
                circular 
                as='a'
                href={displayFestivals[0].website}
              />
            </Grid.Column>
            <Grid.Column>
              <Header className='homeHeader' as='h3'>{displayFestivals[1].festivalName}</Header>
              <Image size='huge' 
                src={displayFestivals[1].mainFestivalImage} 
                circular 
                as='a'
                href={displayFestivals[1].website}
              />
            </Grid.Column>
            <Grid.Column>
              <Header className='homeHeader' as='h3'>{displayFestivals[2].festivalName}</Header>
              <Image size='huge' 
                src={displayFestivals[2].mainFestivalImage} 
                circular 
                as='a'
                href={displayFestivals[2].website}
              />
            </Grid.Column>
            <Grid.Column>
              <Header className='homeHeader' as='h3'>{displayFestivals[3].festivalName}</Header>
              <Image size='huge' 
                src={displayFestivals[3].mainFestivalImage} 
                circular 
                as='a'
                href={displayFestivals[3].website}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider/>
      </Container>
    </main>
  )
}

export default Home
