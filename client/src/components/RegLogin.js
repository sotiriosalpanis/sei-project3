import React from 'react'
import { Container, Divider, Grid, Header, Segment } from 'semantic-ui-react'
import Login from './Login'
import Register from './Register'

const RegLogin = () => {
  return (
    <Container>
      <Segment placeholder>
        <Grid stackable>
          <Grid.Row verticalAlign="top">
            <Grid.Column width={8}>
              <Header as='h2' textAlign="center">Sign up</Header>
              <Header sub textAlign="center">Create an account here</Header>
              <Register />
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as='h2' textAlign="center">Login</Header>
              <Header sub textAlign="center">Already a member? Sign in here</Header>
              <Login />
            </Grid.Column>
          </Grid.Row>
          <Divider vertical>OR</Divider>
        </Grid>
        
      </Segment>
    </Container>

  )
}

export default RegLogin
