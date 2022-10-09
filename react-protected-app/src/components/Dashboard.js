import React from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => {
  let user = '';
  try {
    user = JSON.parse(sessionStorage.getItem('user'))
  } catch (error) {
    //
  }

  return (
    <div>
      <h1>Dashboard (Private)</h1>
      <p>{`Welcome to your Dashboard ${user.name}  `}</p>
      <p>Go to <Link to='/profile'> profile</Link></p>
    </div>
  )
}

export default Dashboard
