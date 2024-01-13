import React from 'react'
import './style.css'
import avatar from '../../../assets/avatar.jpg'
import Profile from './Profile'
import AccountDetails from './AccountDetails'
import RecentTransaction from './RecentTransaction'

const Left = () => {
  return (
    <div className='left'>
        <Profile avatar={avatar} name='Mike'/>
        <AccountDetails/>
        <RecentTransaction />
    </div>
  )
}

export default Left