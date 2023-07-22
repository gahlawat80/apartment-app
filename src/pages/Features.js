import React from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import CommonFeatures from '../components/CommonFeatures'
import Recreations from '../components/Recreations'
import CommunityInfo from '../components/CommunityInfo'
import Footer from '../components/Footer'

const Features = () => {
  return (
    <div className='featresPage'>
      <Header />
      <Navigation active='features'/>
      <CommonFeatures />
      <Recreations />
      <CommunityInfo />
      <Footer />
    </div>
  )
}

export default Features
