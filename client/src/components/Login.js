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
      setErrors(err)
    }
  }

  // console.log(errors.response.data.message)

  return (
    <div>
      <Container>
        {/* <Header as='h3'>Login to your account</Header> */}
        <Divider />
        <Form className='ui form' error onSubmit={handleSubmit}>
          <div className="field">
            <Form.Field>
              <label>Username:</label>
              <input 
                placeholder='Enter your username' 
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
          {errors ? 
          // <p>{errors.response.data.message}</p> 
          <Message
            error
            header="We couldn't log you in"
            content={errors.response.data.message}
          />
          : 
          <p></p> }
        </Form>
      </Container>
    </div>
  )
}

export default Login
