import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Dropdown } from 'semantic-ui-react'



const Navigation = () => {


  return (
    <header>
      <Menu pointing secondary>
        <Menu.Item
          as= { Link }
          to='/home'
          name='Home'
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
          </Dropdown.Menu>

        </Dropdown>

        <Menu.Menu position='right'>
          <Menu.Item
            as= { Link }
            to='/register'
            name='Register'
          />
          <Menu.Item
            as= { Link }
            to='/login'
            name='Login'
          />
        </Menu.Menu>
      </Menu>
    </header>
  )   
}

export default Navigation