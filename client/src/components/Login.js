import React, { useState } from 'react'
import axios from 'axios'
import { Container, Divider , Button, Form, Message } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

const Login = () => {

  const history = useHistory()

  const [ formData, setFormData ] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [ errors, setErrors ] = useState(false)
  // const [ errors, setErrors ] = useState({
  //   email: '',
  //   password: ''
  // })

  const handleChange = (event) =>{
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    
    try {
      const response = await axios.post('/api/login',formData)
      const token = response.data.token
      window.localStorage.setItem('token', token)
      history.goBack()
    } catch (err) {
      // console.log(err)
      setErrors(true)
    }
  }

  console.log(errors)

  return (
    <div>
      <Container>
        {/* <Header as='h3'>Login to your account</Header> */}
        <Divider />
        <Form className='ui form'  onSubmit={handleSubmit}>
          <div className="field">
            <Form.Field>
              <label>Username:</label>
              <input 
                placeholder='Vera' 
                type="text"
                name='username'
                value={formData.username} 
                onChange={handleChange}
              />
            </Form.Field>
          </div>
          <Divider horizontal >OR</Divider>
          <div className="field">
            <Form.Field>
              <label>Email address:</label>
              <input 
                placeholder='someone@example.com' 
                type="email"
                name='email'
                value={formData.email} 
                onChange={handleChange}
              />
            </Form.Field>
          </div>
          <div className="field">
            <Form.Field>
              <label>Password</label>
              <input 
                placeholder='Choose a password' 
                type="password"
                name='password'
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Field>
          </div>

          <Button type='submit' className="ui button">Login</Button>
        </Form>
        {/* <Message
          error
          header="Something isn't right"
          content="Please check your login details and try again"
        /> */}
      </Container>
    </div>
  )
}

export default Login
