import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './authentication_form.scss';

export default function Form() {
    const [choseMethod, setChoseMethod] = useState(true); // if true that mean 'login' and false mean select 'sign up'
    const navigation = useNavigate();
    // Login Submit
    // const pressLogin = async(e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.get('/api');
    //         console.log(response.data);
    //     } catch(err) {
    //          console.log('err');
    //     }
    // }
    const pressLogin = (e) => {
        e.preventDefault();
        axios.post('/api/auth/login',{
            "userName": "akila",
            "password": "2005"
        })
        .then((response) => {
            console.log(response);
            if(response.data) navigation('/home');
            else window.alert("Login Wrong");
        })
        .catch((err) => {
            console.log(err);
        })

        
    }
  return (
    <div className='authentication_form_container'>
        <div className="choosingPart">
            <div className={choseMethod === true ? "login selected" : "login"}><p onClick={()=>setChoseMethod(true)}>Login</p></div>
            <div className={choseMethod === false ? "signUp selected" : "signUp"}><p onClick={()=>setChoseMethod(false)}>Register</p></div>
        </div>

        <div className="body">
            <form name='loginForm' style={choseMethod === true ? {display: 'block'} : {display: 'none'}}>
                <div className="input">
                    <label htmlFor="loginUserName">User Name</label>
                    <input type="text" placeholder='Enter User Name' id='loginUserName' />
                </div>
                
                <div className="input">
                    <label htmlFor="loginPassword">Password</label>
                    <input type="password" id='loginPassword' placeholder='Enter Password' />
                </div>

                <button onClick={pressLogin}>Login</button>
                <a href="#forget">Forget Password</a>
                <p style={{padding:0}}>If you are not registered yet, <span onClick={()=>setChoseMethod(false)}>Register</span></p>
            </form>

            <form name='signUpForm' style={choseMethod === false ? {display: 'block'} : {display: 'none'}}>
                <div className="firstAndLastName">

                    <div className="input">
                        <label htmlFor="signUpFirstName">First Name</label>
                        <input type="text" placeholder='Enter First Name' id='signUpFirstName' />
                        <span className='error_message' style={{display: 'flex'}}>First Name Required</span>
                    </div>

                    <div className="input">
                        <label htmlFor="signUpLastName">Last Name</label>
                        <input type="text" placeholder='Enter Password' id='signUpLastName' />
                        <span className='error_message'>Last Name Required</span>
                    </div>
                    
                </div>
                
                <div className="input">
                    <label htmlFor="signUpUseName">User Name</label>
                    <input type="text" placeholder='Enter User Name' id='signUpUseName' />
                    <span className='error_message'>User Name Required</span>
                </div>
                
                <div className="input">
                    <label htmlFor="signUpMobile">Mobile Number</label>
                    <input type="mobile" placeholder='Enter Mobile Number' id='signUpMobile' />
                    <span className='error_message'>Mobile Number Required</span>
                </div>
                
                <div className="input">
                    <label htmlFor="signEmail">Email</label>
                    <input type="email" placeholder='Enter Email Address' id='signEmail' />
                    <span className='error_message'>Email Required</span>
                </div>
                
                <div className="passwordAndRePassword">
                    <div className="input">
                        <label htmlFor="firstPassword">Password</label>
                        <input type="password" placeholder='Enter Password' id='firstPassword' />
                        <span className='error_message'>Password Required</span>
                    </div>
                    
                    <div className="input">
                        <label htmlFor="secondPassword">Confirm Password</label>
                        <input type="password" placeholder='Confirm Password' id='secondPassword' />
                        <span className='error_message'>Password Not Match</span>
                    </div>
                </div>

                <div style={{padding:'5px'}}>
                <input type="checkbox" id="check-box" /> <label htmlFor="check-box" style={{fontSize: '15px', fontWeight: "500"}}>I agreed with all terms & conditions</label>
                </div>

                <button>Register</button>

                <p>If you have an account, <span onClick={()=>setChoseMethod(true)}>Login</span></p>
            </form>
        </div>
    </div>
  )
}
