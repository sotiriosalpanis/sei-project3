import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const UserProfile = () => {
  const params = useParams()

  const [user, setUser] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/getUserProfile/${params.id}`)
      setUser(data)
    }
    getData()
  }, [])

  console.log('user', user)

  return (
    <div>
      <p>THIS IS YOUR PROFILE</p>
      <p>{user}</p>
    </div>
  )
}

export default UserProfile

// const [user, setUser] = useState([])

// useEffect(() => {
//   getUser()
// }, [])

// const getUser = () => {
//   setUser([])
//   const getData = async () => {
//     const { data } = await axios.get('/api/getUserProfile')
//     setUser(data)
//   }
//   getData()
//   console.log('your profile', user)
// }