import React, { useState } from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import CommunityInfo from '../components/CommunityInfo'
import Footer from '../components/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
    // const [name,setName] = useState('')
    // const [dob,setDob] = useState('')
    // const [gender,setGender] = useState('');
    // const [hobbies,setHobbies]=useState('');
    // const [email,setEmail]=useState('')
    // const [password,setPassword]=useState('')
    // const [confPassword,setConfPassword]=useState('')
    // const [success,setSuccess] = useState(false);

    const [registration,setRegistration] = useState({name:'',dob:'',gender:'',hobbies:'',email:'',password:'',confPassword:''});

    const updateState = (e)=>{
        console.log(e.target.name,e.target.value)
        setRegistration({...registration,[e.target.name]:e.target.value})
    }
    const navigate = useNavigate();

    function selectHobbies(e){
        const str = e.target.previousSibling.textContent.trim();
        console.log(registration)
        const startIndex = registration.hobbies.indexOf(str);
        const stringLength = e.target.previousSibling.length;
        console.log('String found at index: ',startIndex)
        if(startIndex>=0){
            //console.log('Slice: '+hobbies.splice(startIndex,stringLength+1))
            const newString = registration.hobbies.slice(0,startIndex)+registration.hobbies.substring((startIndex+stringLength))

            console.log('My New String:',newString)

            //console.log(newString)
            setRegistration({...registration,hobbies:newString})
        } else {    
            if(registration.hobbies.length==0){
                //setHobbies(str); //coding
                setRegistration({...registration,hobbies:str})
            }  else {
                //setHobbies(); //'coding',"reading"
                setRegistration({...registration,hobbies:registration.hobbies+","+str})
            }
        }
        
    }
    const register = async()=>{
        if(registration.password===registration.confPassword){
            const response = await axios.post('http://localhost:8000/api/v1/users',{
                ...registration
            }) 
            if(response.status===201){
                setRegistration({...registration,success:true});
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
            {registration.success && <h3 className='success'>Registeration is successful!</h3>}
            <div className="register_hero_form_detail">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name='name'
                value={registration.name}
                onChange={(event)=>updateState(event)}
                placeholder='Enter your name..'/>
            </div>
            <div className="register_hero_form_detail">
                <label htmlFor="dob">Brith Date:</label>
                <input type="date" id="dob" name='dob'
                value={registration.dob}
                onChange={(event)=>updateState(event)}
                placeholder='mm/dd/yyyy'/>
            </div>
            <div className="register_hero_form_detail gender">
                <label>Gender:</label>
                Male <input type='radio' name='gender'
                onChange={()=>setRegistration({...registration,gender:'Male'})}/>
                Female <input type='radio' name='gender'
                onChange={()=>setRegistration({...registration,gender:'Female'})}/>
                Other <input type='radio' name='gender'
                onChange={()=>setRegistration({...registration,gender:'Other'})}/>
            </div>
            <div className="register_hero_form_detail hobbies">
                <label>Hobbies:</label>
                 Coding <input type='checkbox'
                 onChange={selectHobbies}/>
                 Movies <input type='checkbox'
                 onClick={selectHobbies}/>
                 Exercise <input type='checkbox'
                 onClick={selectHobbies}/>
                 Reading <input type='checkbox'
                 onClick={selectHobbies}/>
            </div>
            <div className="register_hero_form_detail">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name='email'
                value={registration.email}
                onChange={(event)=>updateState(event)}
                placeholder='Enter your email..'/>
            </div>
            <div className="register_hero_form_detail">
                <label htmlFor="pwd">Password:</label>
                <input type="password" id="pwd" name='password'
                value={registration.password}
                onChange={(event)=>updateState(event)}
                placeholder='Enter your password..'/>
            </div>
            <div className="register_hero_form_detail">
                <label htmlFor="cpwd">Confirm Password:</label>
                <input type="password" id="cpwd" name='confPassword'
                value={registration.confPassword}
                onChange={(event)=>updateState(event)}
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
