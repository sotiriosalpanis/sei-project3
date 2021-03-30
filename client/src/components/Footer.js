import React, { useState } from 'react'
import { Divider, Container, Menu } from 'semantic-ui-react'
const Footer = () => {
  const [state, setState] = useState('')
  console.log(state)
  const handleItemClick = (e, { name }) => setState({ activeItem: name })

  const { activeItem } = state


  return (
    <footer className='footer' id='footer'>
      <Divider/>
      <Container centered>
        <Menu text widths={5} inverted>
          <Menu.Item header>Search Our Site</Menu.Item>
          <Menu.Item
            name='Sign Up'
            active={activeItem === 'signUp'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Login'
            active={activeItem === 'login'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Your Profile'
            active={activeItem === 'profile'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='About Us'
            active={activeItem === 'aboutUs'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Contact Us'
            active={activeItem === 'contact'}
            onClick={handleItemClick}
          />
        </Menu>
      </Container>
      <Divider/>
    </footer>
  )
}

export default Footer
