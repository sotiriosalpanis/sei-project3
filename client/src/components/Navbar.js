import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'



const Navigation = () => {
  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item
          as= { Link }
          to='/festivals'
          name='Festivals'
        />
        <Menu.Item
          as= { Link }
          to='/festival-map'
          name='Map of Festivals'
        />
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
    </div>
  )   
}

export default Navigation