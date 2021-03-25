import React from 'react'
import { Link } from 'react-router-dom'



const Navigation = () => {
  return (
    <nav className=''>
      <div className=''>
        <div className=''>       
          <div className='' >
            <Link to='/home'>
              <span className="">
              Home
              </span>
            </Link>
          </div>
          <div className=''>
            <Link to='/festivals'>
              <span className=''>
              Festivals
              </span>
            </Link>
          </div>
          <div className=''>
            <Link to='/userprofile'>
              <span className=''>
              User Profile
              </span>
            </Link>
          </div>
          <div className=''>
            <Link to='/register'>
              <span className=''>
            Register
              </span>
            </Link>
          </div>
          <div className=''>
            <Link to='/login'>
              <span className="">
            Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation