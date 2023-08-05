import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import CommunityInfo from '../components/CommunityInfo'
import Footer from '../components/Footer'
import axios from 'axios'
import {appContext} from '../context/appContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const {state, updateAuthData, authFailed}=useContext(appContext)
  const navigate = useNavigate();

  //console.log("State values:",email,password)
  const updateLoginData = (event)=>{
    //console.log(event.target.value)
    setEmail(event.target.value)
  }
  const updatePassword = (e)=>{
    setPassword(e.target.value)
  }
  
  async function loginUser(){
    //console.log('Login button clicked')
    const loginUrl='http://localhost:8000/api/v1/users/login'
    try{
      const response = await axios.post(loginUrl,{
      "email":email,
      "password":password
    })
    setEmail('');
    setPassword('');
    if(response.status===200){
      //console.log(response.data)
      updateAuthData(response.data.email,response.data.authToken)
      authFailed('')
      navigate('/')
    } else {
      console.log('Error occured')
      authFailed('Invalid Username or Password. Please try again.')
    } 
    //console.log(response)
  }catch(err){
      console.log(err.message)
      authFailed('Invalid Username or Password. Please try again.')
    } 
  }
  return (
    <section className='loginPage'>
      <Header />
      <Navigation active='login'/>
      <article className="login_hero">
        <div className="login_hero_card">
          {state.error && <h3 className='error'>{state.error}</h3>}
            <div className="login_hero_card_detail">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" 
                onChange={updateLoginData}
                value={email}
                placeholder='Enter your email id...'/>
            </div>
            <div className="login_hero_card_detail">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password"
                onChange={updatePassword}
                value={password}
                placeholder='Enter your password...'/>
            </div>
            <div className="login_hero_cta">
                <button onClick={loginUser}>Login</button>
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
