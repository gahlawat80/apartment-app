import React, { useState } from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import CommunityInfo from '../components/CommunityInfo'
import Footer from '../components/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
    const [name,setName] = useState('')
    const [dob,setDob] = useState('')
    const [gender,setGender] = useState('');
    const [hobbies,setHobbies]=useState('');
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confPassword,setConfPassword]=useState('')
    const [success,setSuccess] = useState(false);

    const navigate = useNavigate();

    function selectHobbies(e){
        const str = e.target.previousSibling.textContent.trim();
        const startIndex = hobbies.indexOf(str);
        const stringLength = e.target.previousSibling.length;
        console.log('String found at index: ',startIndex)
        if(startIndex>=0){
            //console.log('Slice: '+hobbies.splice(startIndex,stringLength+1))
            const newString = hobbies.slice(0,startIndex)+hobbies.substring((startIndex+stringLength))
            //console.log(newString)
            setHobbies(newString)
        } else {    
            if(hobbies.length==0){
                setHobbies(str); //coding
            }  else {
                setHobbies(hobbies+","+str); //'coding',"reading"
            }
        }
        
    }
    const register = async()=>{
        if(password===confPassword){
            const response = await axios.post('http://localhost:8000/api/v1/users',{
                name,dob,gender,hobbies,email,password
            }) 
            if(response.status===201){
                setSuccess(true);
                setTimeout(()=>{
                    navigate('/login')
                },2000)                
            }
        }else {
            alert('Password and Confirm Password NOT matching. Please enter matching values!');
        }
    }
    const registerUser = (e)=>{
        e.preventDefault();
        register();      
    }
  return (
    <section className='registerPage'>
      <Header />
      <Navigation active='register'/>
      <article className="register_hero">
        <form className="register_hero_form" onSubmit={registerUser}>
            {success && <h3 className='success'>Registeration is successful!</h3>}
            <div className="register_hero_form_detail">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name"
                value={name}
                onChange={(event)=>setName(event.target.value)}
                placeholder='Enter your name..'/>
            </div>
            <div className="register_hero_form_detail">
                <label htmlFor="dob">Brith Date:</label>
                <input type="date" id="dob"
                value={dob}
                onChange={(e)=>setDob(e.target.value)}
                placeholder='mm/dd/yyyy'/>
            </div>
            <div className="register_hero_form_detail gender">
                <label>Gender:</label>
                Male <input type='radio' name='gender' value={gender} onChange={(e)=>setGender('Male')}/>
                Female <input type='radio' name='gender' value={gender} onChange={(e)=>setGender('Female')} />
                Other <input type='radio' name='gender' value={gender} onChange={(e)=>setGender('Other')}/>
            </div>
            <div className="register_hero_form_detail hobbies">
                <label>Hobbies:</label>
                 Coding <input type='checkbox' value={hobbies.indexOf('coding')>=0?true:false}
                 onChange={selectHobbies}/>
                 Movies <input type='checkbox' value={hobbies.indexOf('movies')>=0?true:false}
                 onClick={selectHobbies}/>
                 Exercise <input type='checkbox' value={hobbies.indexOf('excercise')>=0?true:false}
                 onClick={selectHobbies}/>
                 Reading <input type='checkbox' value={hobbies.indexOf('reading')>=0?true:false}
                 onClick={selectHobbies}/>
            </div>
            <div className="register_hero_form_detail">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Enter your email..'/>
            </div>
            <div className="register_hero_form_detail">
                <label htmlFor="pwd">Password:</label>
                <input type="password" id="pwd"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='Enter your password..'/>
            </div>
            <div className="register_hero_form_detail">
                <label htmlFor="cpwd">Confirm Password:</label>
                <input type="password" id="cpwd"
                value={confPassword}
                onChange={(e)=>setConfPassword(e.target.value)}
                placeholder='Enter same password..'/>
            </div>
            <div className="register_hero_cta">
                <button type='submit'>Register</button>
                <a href="#">Already Registered?</a>
            </div>
        </form>
      </article>
      <CommunityInfo />
      <Footer />
    </section>
  )
}

export default Registration
