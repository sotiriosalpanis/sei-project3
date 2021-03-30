import React, { useEffect, useState } from 'react'
import { Image, Divider, Container, Header, Grid } from 'semantic-ui-react'
import axios from 'axios'

const Home = () => {
  const [festivals, setFestivals] = useState([])
  const [hero, setHero] = useState(0)

  useEffect(() => {
    getNewFestival()
  }, [hero])

  useEffect(() => {
    getFestivals()
  }, [])

  const getFestivals = () => {
    setFestivals([])
    const getData = async () => {
      const { data } = await axios.get('/api/festivals')
      setFestivals(data)
    }
    getData()
  }

  const getNewFestival = () => {
    setTimeout(() => {
      setHero(Math.floor(Math.random() * 8))
      console.log('hero timer', hero)
    }, 10000)
  }

  return (
    <>
      {(festivals.length === 0) ? 
        <p> ...loading </p> 
        :
        <main>
          <Container fluid> 
            <Header  className='homeHeader' as='h1'>{festivals[hero].festivalName}</Header>
            <Image 
              src={festivals[hero].mainFestivalImage}
              key={Date.now()}
              fluid
              as='a'
              href={festivals[hero].website}
            /> 
          </Container>
          <Divider/>
          <Container fluid> 
            <Grid columns={5} relaxed padded divided>
              <Grid.Row>
                <Grid.Column >
                  <Header className='homeHeader' as='h3'>{festivals[5].festivalName}</Header>
                  <Image size='huge' 
                    src={festivals[5].mainFestivalImage} 
                    circular 
                    as='a'
                    href={festivals[5].website}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Header className='homeHeader' as='h3'>{festivals[5].festivalName}</Header>
                  <Image size='huge' 
                    src={festivals[5].mainFestivalImage} 
                    circular 
                    as='a'
                    href={festivals[5].website}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Header className='homeHeader' as='h3'>{festivals[2].festivalName}</Header>
                  <Image size='huge' 
                    src={festivals[5].mainFestivalImage} 
                    circular 
                    as='a'
                    href={festivals[5].website}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Header className='homeHeader' as='h3'>{festivals[3].festivalName}</Header>
                  <Image size='huge' 
                    src={festivals[5].mainFestivalImage} 
                    circular 
                    as='a'
                    href={festivals[5].website}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider/>
          </Container>
        </main>}
    </>
  )
}

export default Home


// const changePicture = () => {
//   if (dataSet.length > 5){
//     i = 0
//     i = Math.round(Math.random() * dataSet.length - 1)
//     if (dataSet[i].mainFestivalImage !== false) {
//       setPicState(dataSet[i].mainFestivalImage)
//     }
//   } else {
//     setPicState('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmVzdGl2YWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80')
//   }
//   setTimeout(changePicture(), 10000)
//   return
// }
// const startPictureChange = () => {
//   console.log('Interval Started')
//   setInterval(() => {
//     changePicture()
//     console.log('picture changed>', picState)
//   }, 10000)
// }
// const setDisplayedFestivals = () => {
//   const tempArray = []
//   for (let f = 0; f < 4; f++) {
//     const festival = dataSet[Math.round(Math.random(0, dataSet.length - 1) * dataSet.length)]
//     if (tempArray.includes(festival)){
//       f--
//     } else {
//       tempArray[f] = festival
//     }      
//   }
//   return (tempArray)
// }
// if (!dataSet) return null
// if (dataSet !== null) {
//   displayedFestivals = setDisplayedFestivals()
//   clearTimeout
//   changePicture()
// }
// if (!picState){
//   clearTimeout
//   changePicture()
//   console.log('Inside if statement')
// }
// if (!picState) return null
// <main>
//   <Container fluid> 
//     <Header  className='homeHeader' as='h1'>{dataSet[i].festivalName}</Header>
//     <Image 
//       src={picState}
//       key={Date.now()}
//       fluid
//       as='a'
//       href={dataSet[i].website}
//     /> 
        
        
//   </Container>
//   <Divider/>
//   <Container fluid> 
//     <Grid columns={4} relaxed padded divided>
//       <Grid.Row>
//         <Grid.Column >
//           <Header className='homeHeader' as='h3'>{displayFestivals[0].festivalName}</Header>
//           <Image size='huge' 
//             src={displayFestivals[0].mainFestivalImage} 
//             circular 
//             as='a'
//             href={displayFestivals[0].website}
//           />
//         </Grid.Column>
//         <Grid.Column>
//           <Header className='homeHeader' as='h3'>{displayFestivals[1].festivalName}</Header>
//           <Image size='huge' 
//             src={displayFestivals[1].mainFestivalImage} 
//             circular 
//             as='a'
//             href={displayFestivals[1].website}
//           />
//         </Grid.Column>
//         <Grid.Column>
//           <Header className='homeHeader' as='h3'>{displayFestivals[2].festivalName}</Header>
//           <Image size='huge' 
//             src={displayFestivals[2].mainFestivalImage} 
//             circular 
//             as='a'
//             href={displayFestivals[2].website}
//           />
//         </Grid.Column>
//         <Grid.Column>
//           <Header className='homeHeader' as='h3'>{displayFestivals[3].festivalName}</Header>
//           <Image size='huge' 
//             src={displayFestivals[3].mainFestivalImage} 
//             circular 
//             as='a'
//             href={displayFestivals[3].website}
//           />
//         </Grid.Column>
//       </Grid.Row>
//     </Grid>
//     <Divider/>
//   </Container>
// </main>