import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation();

  return (
    <div className='home'>
      <h1 className='bg'>Welcome to Home Page</h1>
      <div className='info'>
      <h2>User Information:</h2>
      <p><b>Username: {location.state.user}</b></p>
      <p><b>Email: {location.state.email}</b></p>
      <p><b>Password: {location.state.password}</b></p>
      
      </div>
    </div>
  ) 
}

export default Home