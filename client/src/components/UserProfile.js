import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/auth'
// import { getUserID } from '../helpers/auth.js'

const UserProfile = () => {

  // const user = getUserID()

  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/profile',{
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
      })
      setUserInfo(data)
    }
    getData()
  }, [])

  console.log('user info', userInfo)
  if (!userInfo ) return null

  const { username } = userInfo

  return (
    <div>
      <p>THIS IS YOUR PROFILE</p>
      <p>{username}</p>
    </div>
  )
}

export default UserProfile
