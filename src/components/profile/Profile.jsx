import React from 'react'
import './Profile.css'
import ranLogo from '../../images/ranlogo.jpg'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
      <div className="profile">
        <div className="profile-logo">
            <img className='ran-logo' src={ranLogo} alt="ranlogo" />
        </div>
        <div className="name">
            <h4 className="cel-name">Ranbir Kapoor</h4>
        </div>
        <p className="app-text">(CELEBRITY APPEARANCE)</p>
        <h6 className="location">Mumbai, Maharashtra</h6>
        <div className="price">
          <Link to="/secondPage">
          <button className="price-btn">See Price And Book</button>
          </Link>
        </div>
        <div className='des'>
          <p className="profile-des">The 'ROCKSTAR' who is a heart throb of millions, Ranbir Kapoor is one of the finest actors in Bollywood and is a true versatile performer</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
