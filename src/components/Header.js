import React from 'react'
import './styles/header.css'

const Header = () => {
  return (
    <div id="top" className='header'>
        <div className="container">
            <img src="https://png.pngtree.com/png-vector/20210414/ourmid/pngtree-apartment-ground-logo-png-image_3219026.jpg" alt="logo" />
            <article>
                <i class="fas fa-phone-alt"></i>
                <h4>(410) 111-2222</h4>
            </article>
        </div>
    </div>
  )
}

export default Header
