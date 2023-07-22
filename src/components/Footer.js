import React from 'react'
import './styles/footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="left">
        <span>Copyrights, All right reserved &copy;2023</span>
        |
        <a href="#">Designed By Amazing Developer</a>
        |
        <a href="#">Privacy Policy</a>
      </div>
      <div className="right">
        <a href="#top"><i class="fas fa-chevron-up"></i></a>
        
      </div>
    </div>
  )
}

export default Footer
