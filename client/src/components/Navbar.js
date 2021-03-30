import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Menu, Dropdown } from 'semantic-ui-react'
import { userIsAuthenticated } from '../helpers/auth.js'



const Navigation = () => {

  const history = useHistory()

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    setIsLoggedIn(false)
    history.push('/home')
  }

  const [ isLoggedIn, setIsLoggedIn ] = useState(false)

  useEffect(() => {
    if (userIsAuthenticated()) return setIsLoggedIn(true)
    if (!userIsAuthenticated()) return setIsLoggedIn(false)
  },[isLoggedIn])


  useEffect(() => {
    if (userIsAuthenticated()) return setIsLoggedIn(true)
  },[isLoggedIn])



  // console.log('Is Logged in?>>>>',isLoggedIn)
  // console.log('Is Authenticated?>>>>',userIsAuthenticated())




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
          { !isLoggedIn &&
          <Menu.Item
            as= { Link }
            to='/sign-in'
            name='Sign-in Register'
          />
          }
          { isLoggedIn &&
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