import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/auth'
import { Container, Header, Segment } from 'semantic-ui-react'
// import { getUserID } from '../helpers/auth.js'

const UserProfile = () => {

  const [userInfo, setUserInfo] = useState(null)
  const [userFestivals, setUserFestivals ] = useState(null)


  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/profile',{
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
      })
      setUserInfo(data)
    }
    getData()
  }, [])

  if (!userInfo ) return null

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/festivals')
      const myFestivals = data.filter(festival => {
        if (festival.festivalAttendance.length > 0) {
          festival.festivalAttendance.filter(attendance => {
            if (attendance.user === userInfo._id) {
              return festival
            }
          })
          return festival
        }
      })
      setUserFestivals(myFestivals)
    }
    getData()
  },[])



  const { username } = userInfo

  return (
    <Container>
      <Header>Welcome {username}</Header>
      {userFestivals.map(festival => {
        return <Segment key={festival._id}>
          {festival.festivalName}
        </Segment>
      })}
    </Container>
  )
}

export default UserProfile
