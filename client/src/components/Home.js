import React, { useEffect, useState } from 'react'
import { Image } from 'semantic-ui-react'
import axios from 'axios'

const Home = () => {
  
  let pictures = []
  let currentPicture = ''
  const [dataSet, setDataSet] = useState(null)
  // const [currentPic, setCurrentPic] = useState(String)

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
    if (pictures.length > 0){
      //currentPicture = (pictures[Math.round(Math.random(0, pictures.length - 1))])
      console.log('IN CHANGE PIC>>', pictures)
      currentPicture = pictures[0].mainFestivalImage
    } else {
      currentPicture = ('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmVzdGl2YWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80')
    }
  }

  const startPictureChange = () => {
    setTimeout(() => changePicture(), 1000)
  }
  
  startPictureChange()
  if (!dataSet) return null
  const temp = dataSet.map(pic => {
    return pic.mainFestivalImage
  })
  pictures = temp
  console.log('CURRENT PIC',currentPicture)

  return (
    <main>
      <div className='Container '>
        <h1>{dataSet[0].festivalName}</h1>
        <Image 
          src={currentPicture}
          fluid >
        </Image> 
      </div>
      <div> {/*Display festivals near you / popular festivals */}

      </div>
    </main>
  )
}

export default Home
