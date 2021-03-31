import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Menu, Dropdown } from 'semantic-ui-react'
import { userIsAuthenticated } from '../helpers/auth.js'
import Login from '../components/Login'

const Navigation = () => {

  const history = useHistory()
  const handleLogout = () => {
    window.localStorage.removeItem('token')
    setIsLoggedIn(false)
    history.push('/home')
  }

  console.log('login', Login)

  const [isLoggedIn, setIsLoggedIn] = useState(null)

  useEffect(() => {
    console.log('loggedin?', isLoggedIn)
    if (userIsAuthenticated()) return setIsLoggedIn(true)
    if (!userIsAuthenticated()) return setIsLoggedIn(false)
  },[userIsAuthenticated, isLoggedIn])


  // useEffect(() => {
  //   if (userIsAuthenticated()) return setIsLoggedIn(true)
  // },[isLoggedIn])

  return (
    <header id="navbar">
      <Menu pointing secondary>
        <Menu.Item
          as= { Link }
          to='/home'
          name='Home'
          header
        />
        <Dropdown item text='Find a festival'>
          <Dropdown.Menu>
            <Dropdown.Item
              as= { Link }
              to='/festivals'
              name='Festivals'
            >Festivals
            </Dropdown.Item>
            <Dropdown.Item
              as= { Link }
              to='/festival-map'
              name='Map of Festivals'
            >
              Map of festivals
            </Dropdown.Item>
            <Dropdown.Item
              as= { Link }
              to= '/artists'
              name= 'Arists'
            > Artists
            </Dropdown.Item>
            { isLoggedIn && 
              <Dropdown.Item
                as= { Link }
                to='/my-festivals'
                name='My Festivals'
              >
              My Festivals
              </Dropdown.Item>
            }
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Menu position='right'>
          
          {!isLoggedIn ?
            <Menu.Item
              as= { Link }
              to='/sign-in'
              name='Sign-in Register'
            />
            :
            <>
              <Menu.Item
                as= { Link }
                to='/userprofile'
                name='Your profile'
              />
              <Menu.Item 
                name='Logout'
                onClick={ handleLogout }
              />
            </>
          }
        </Menu.Menu>
      </Menu>
    </header>
  )   
}

export default Navigation