import React from 'react'
import { Link } from 'react-router-dom'
import { Divider, Container, Menu } from 'semantic-ui-react'


const Footer = () => {


  return (
    <>
      <footer id='footer'>
        <Divider/>
        <Container>
          <Menu text>
            <Menu.Item header>Search Our Site</Menu.Item>
            <Menu.Item><Link to="/home" className="navbar-item">Home</Link></Menu.Item>
            <Menu.Item><Link to="/userprofile" className="navbar-item">Your Profile</Link></Menu.Item>
            <Menu.Item><Link to="/about" className="navbar-item">About Us</Link></Menu.Item>
          </Menu>
        </Container>
        <Divider/>
      </footer>
    </>
  )
}

export default Footer
