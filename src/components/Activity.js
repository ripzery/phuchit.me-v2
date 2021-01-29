import React from 'react'
import { FaStar, FaChevronRight } from 'react-icons/fa'
import "../styles/activity.css"

function Activity({ activity }) {

  function rewordedType() {
    switch(activity.type){
      case 'PushEvent':
        return 'Pushed'
      case 'WatchEvent':
        return 'Watched'
      case 'PublicEvent':
        return 'Publiced'
      default:
        return activity.type
    }
  }

  function renderPayload() {
    if(activity.payload) {
      if(activity.payload.commits) {
        return (
          <div className='activity-payload'>
            <p className='activity-payload-header'>Commits:
            </p>
            <ul className='activity-payload-commits'>
              {activity.payload.commits.map(({ message, sha }) => {
              return (
                <li className='activity-payload-commits-item' key={sha}>
                  <div className='activity-payload-commits-item-icon'><FaChevronRight /></div>
                  {message}
                </li>
              )
              })}
            </ul>
          </div>
          )
      }
    }

    return null
  }

  return (
    <div className='activity-container' id={activity.id}>
      <div className='activity-left'>
        <FaStar size='2rem' className='activity-icon' />
      </div>
      <div className='activity-right'>
        <p className='activity-time'>{activity.created_at}</p>
        <p className='activity-event'>{rewordedType()} for {activity.repo.name}</p>
        {renderPayload()}
      </div>
    </div>
  )
}

export default Activity
