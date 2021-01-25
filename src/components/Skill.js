import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import "../styles/skill.css"

function Skill({ children }) {
  return (
    <li className='skill'>
      <div className='skill-icon'><FaChevronRight size='1rem' /></div>
      {children}
    </li>
  )
}

export default Skill
