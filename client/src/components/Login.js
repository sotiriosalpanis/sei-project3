import React, { useState } from 'react'
import axios from 'axios'
import { Container, Divider , Button, Form } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

const Login = () => {

  const history = useHistory()

  const [ formData, setFormData ] = useState({
    email: '',
    password: ''
  })
  const [ errors, setErrors ] = useState({
    email: '',
    password: ''
  })

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
      history.push('/home')
    } catch (err) {
      // console.log(err)
      setErrors(err.response.data)
    }
  }

  console.log(errors.message)

  return (
    <div>
      <Container>
        {/* <Header as='h3'>Login to your account</Header> */}
        <Divider />
        <Form className='ui form' onSubmit={handleSubmit} >
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
      </Container>
    </div>
  )
}

export default Login
