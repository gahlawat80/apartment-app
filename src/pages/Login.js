import React from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import CommunityInfo from '../components/CommunityInfo'
import Footer from '../components/Footer'

const Login = () => {
  return (
    <section className='loginPage'>
      <Header />
      <Navigation active='login'/>
      <h1>Login details here...</h1>
      <CommunityInfo />
      <Footer />
    </section>
  )
}

export default Login
