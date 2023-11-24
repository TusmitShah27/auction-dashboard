import React from 'react'
import './auction.css'
import { Link } from 'react-router-dom'

const Auction = () => {

  return (
    <div className='container'>
    <div className='dropdown'>
      <button className='dropbtn'>Auction</button>
      <div className='dropdown-content'>
        <Link to='/auction/male'>Male</Link>
        <Link to='/auction/female'>Female</Link>
      </div>
    </div>
  </div>
  )
}

export default Auction
