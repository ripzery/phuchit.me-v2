import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import "../styles/item.css"

function Item({ children }) {
  return (
    <li className='item'>
      <div className='item-icon'><FaChevronRight size='1rem' /></div>
      {children}
    </li>
  )
}

export default Item
