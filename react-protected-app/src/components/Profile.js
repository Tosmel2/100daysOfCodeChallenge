import React from 'react'
import { Link } from 'react-router-dom';

const Profile = () => {
let user = ""
  try {
    user = JSON.parse(sessionStorage.getItem('user'))
  } catch (error) {
    //
  }

  const logout = () => {
    sessionStorage.clear()
    window.location='/signin'
  }

  return (
    <div>
      <h1>Profile (Private)</h1>
      <h3>Your details</h3>
      <p>{`Name: ${user?.name}`}</p>
      <p>{`Email: ${user?.email}`}</p>
      <p>Back to <Link to='/dashboard'> dashboard</Link></p>
      <button onClick={()=> logout()}> Logout</button>
    </div>
  )
}

export default Profile
