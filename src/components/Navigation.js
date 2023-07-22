import React from 'react'
import { Link } from 'react-router-dom'
import './styles/navigation.css'

const Navigation = (props) => {
    const {active} = props;
  return (
    <div className='navigation'>
      <ul>
        <li><Link to="/" className={active=='home'?'active':''}>Home</Link></li>
        <li><Link to="/features" className={active=='features'?'active':''}>Features & Amenities</Link></li>
        <li><Link to="/find-apartment" className={active=='apartment'?'active':''}>Find Apartment</Link></li>
        <li><Link to="/contact" className={active=='contact'?'active':''}>Contact</Link></li>
        <li><Link to="/login" className={active=='login'?'active':''}>Login</Link></li>
        <li><Link to="/register" className={active=='register'?'active':''}>Register</Link></li>
      </ul>
    </div>
  )
}

export default Navigation
