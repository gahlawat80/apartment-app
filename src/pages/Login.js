import React from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

const Login = () => {
  return (
    <section className='loginPage'>
      <Header />
      <Navigation active='login'/>
    </section>
  )
}

export default Login
