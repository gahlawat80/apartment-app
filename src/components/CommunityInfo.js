import React from 'react'
import './styles/communityInfo.css'

const CommunityInfo = () => {
  return (
    <div className='communityInfo'>
      <img src="https://img.freepik.com/premium-vector/real-estate-logo-design_260747-324.jpg?w=2000" alt="real estate image" />
      <div className="communityInfo_company">
        <img src="https://png.pngtree.com/png-vector/20210414/ourmid/pngtree-apartment-ground-logo-png-image_3219026.jpg" alt="logo image" />
        <h4>A COMMUNITY EMPOWERED BY MyCompany</h4>
        <p>1234 Main St, Baltimore, MD 21159</p>
      </div>
      <div className="communityInfo_help">
        <i class="fas fa-wheelchair"></i>
        <i class="fas fa-home"></i>
        <i class="fas fa-paw"></i>
      </div>
    </div>
  )
}

export default CommunityInfo
