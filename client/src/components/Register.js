import React, { useState } from 'react'
import axios from 'axios'
import { Container, Header, Divider , Button, Form } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'


const Register = () => {

  const history = useHistory()

  const [ formData, setFormData ] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  const [ errors, setErrors ] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  const handleChange = (event) =>{
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    
    try {
      await axios.post('/api/register',formData)
      history.push('/')
    } catch (err) {
      // console.log(err)
      setErrors(err.response.data.message)
    }
  }

  console.log('Errors',errors)

  
  return (
    <div>
      <Container>
        <Header as='h3'>Register Here</Header>
        <Divider />
        <Form className='ui form' onSubmit={handleSubmit} >
          <div className="field">
            <Form.Field >
              <label>Username</label>
              <input
                placeholder='Username' 
                name='username'
                value={formData.username} 
                onChange={handleChange}
              />
            </Form.Field>
          </div>
          <div className="field">
            <Form.Field>
              <label>Email</label>
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
          <div className="field">
            <Form.Field>
              <label>Password confirmation</label>
              <input 
                placeholder='Confirm your password' 
                type="password"
                name='passwordConfirmation'
                value={formData.passwordConfirmation} 
                onChange={handleChange}
              />
            </Form.Field>
          </div>
          <Button type='submit' className="ui button">Submit</Button>
        </Form>
      </Container>
    </div>
  )
}

export default Register
