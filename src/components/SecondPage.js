import React from 'react'
import ProfilePageNav from './profilePageNav/ProfilePageNav'
import ProfilePage from './profilePage/ProfilePage'
import Form from './form/Form'
import SecondFooter from './secondFooter/SecondFooter'

const SecondPage = () => {
  return (
    <div>
      <ProfilePageNav />
      <ProfilePage />
      <Form />
      <SecondFooter />
    </div>
  )
}

export default SecondPage
