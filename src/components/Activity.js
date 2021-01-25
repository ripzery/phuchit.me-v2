import React from 'react'
import { FaStar } from 'react-icons/fa'
import "../styles/activity.css"

function Activity({ activity }) {
  return (
    <div className='activity-container' id={activity.id}>
      <div className='activity-left'>
        <FaStar size='2rem' className='activity-icon' />
      </div>
      <div className='activity-right'>
        <p className='activity-time'>{activity.created_at}</p>
        <p className='activity-event'>{activity.type} for {activity.repo.name}</p>
      </div>
    </div>
  )
}

export default Activity
