import React, { useContext } from 'react'
import './styles/header.css'
import { appContext } from '../context/appContext'


const Header = () => {
  const {state}=useContext(appContext)
  return (
    <div id="top" className='header'>
        <div className="container">
            <img src="https://png.pngtree.com/png-vector/20210414/ourmid/pngtree-apartment-ground-logo-png-image_3219026.jpg" alt="logo" />
            <article>
                <i class="fas fa-phone-alt"></i>
                <h4>(410) 111-2222</h4>
                {/* {state.authToken || <><h5>Email: </h5><span>Guest User..</span></>}
                {state.authToken && <><h5>Email: </h5><span>abc@xyz.com</span></>} */}
                {state.authToken?<><h5>Email: </h5><span>{state.email}</span></>:<><h5>Email: </h5><span>Guest User..</span></>}
                
            </article>
        </div>
    </div>
  )
}

export default Header
