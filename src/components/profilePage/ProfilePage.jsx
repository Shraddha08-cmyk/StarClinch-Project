import React from 'react'
import './ProfilePage.css'
import profile from '../../images/ranlogo.jpg'

const ProfilePage = () => {
  return (
    <div>
      <div className="profile-pho">
        <img className='ran-img' src={profile} alt="profile" />
      </div>
      <h2 className="profile-name">Ranbir Kapoor</h2>
    </div>
  )
}

export default ProfilePage
