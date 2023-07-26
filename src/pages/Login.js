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
      <article className="login_hero">
        <div className="login_hero_card">
            <div className="login_hero_card_detail">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder='Enter your email id...'/>
            </div>
            <div className="login_hero_card_detail">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder='Enter your password...'/>
            </div>
            <div className="login_hero_cta">
                <button>Login</button>
                <a href="#">Forgot Password?</a>
            </div>
        </div>
      </article>
      <CommunityInfo />
      <Footer />
    </section>
  )
}

export default Login
