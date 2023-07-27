import React from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import CommunityInfo from '../components/CommunityInfo'
import Footer from '../components/Footer'

const Registration = () => {
  return (
    <section className='registerPage'>
      <Header />
      <Navigation active='register'/>
      <article className="register_hero">
        <div className="register_hero_form">
            <div className="register_hero_form_detail">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder='Enter your name..'/>
            </div>
            <div className="register_hero_form_detail">
                <label htmlFor="dob">Brith Date:</label>
                <input type="date" id="dob" placeholder='mm/dd/yyyy'/>
            </div>
            <div className="register_hero_form_detail gender">
                <label>Gender:</label>
                Male <input type='radio' name='gender'/>
                Female <input type='radio' name='gender' />
                Other <input type='radio' name='gender' />
            </div>
            <div className="register_hero_form_detail hobbies">
                <label>Hobbies:</label>
                 Coding <input type='checkbox'/>
                 Movies <input type='checkbox'/>
                 Exercise <input type='checkbox'/>
                 Reading <input type='checkbox'/>
            </div>
            <div className="register_hero_form_detail">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder='Enter your email..'/>
            </div>
            <div className="register_hero_form_detail">
                <label htmlFor="pwd">Password:</label>
                <input type="password" id="pwd" placeholder='Enter your password..'/>
            </div>
            <div className="register_hero_form_detail">
                <label htmlFor="cpwd">Confirm Password:</label>
                <input type="password" id="cpwd" placeholder='Enter same password..'/>
            </div>
            <div className="register_hero_cta">
                <button>Register</button>
                <a href="#">Already Registered?</a>
            </div>
        </div>
      </article>
      <CommunityInfo />
      <Footer />
    </section>
  )
}

export default Registration
