import React, { setInterval, useEffect, useState } from 'react'
import { Image } from 'semantic-ui-react'
import axios from 'axios'

const Home = () => {
  const [pictures, setPictures] = useState([])
  const [dataSet, setDataSet] = useState([])
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

  if (!dataSet) {
    console.log('no data')
  } else {
    setPictures(dataSet.map(pic =>{
      return pic.mainFestivalImage
    }))
  }
  
  setInterval()

  if (!pictures) return

  return (
    <main>
      <div className='Container '>
        <Image 
          src='https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmVzdGl2YWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
          fluid >
        </Image>
      </div>
      <div> {/*Display festivals near you / popular festivals */}

      </div>
    </main>
  )
}

export default Home
