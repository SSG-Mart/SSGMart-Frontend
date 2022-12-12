import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './authentication_form.scss';

export default function Form() {
    const [choseMethod, setChoseMethod] = useState(true); // if true that mean 'login' and false mean select 'sign up'
    const navigation = useNavigate();
    
    // SIGN UP FORM DATA
    const [fName, setFName] = useState(""); 
    const [lName, setLName] = useState("");
    const [username, setUsername] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [checkbox, setCheckBox] = useState(false);

    // LOGIN FORM DATA
    const [loginUserName, setLoginUserName] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    
    // Login Submit
    const pressLogin = (e) => {
        e.preventDefault();
        axios.post('/api/auth/login',{
            "userName": loginUserName,
            "password": loginPassword
        })
        .then((response) => {
            console.log(response);
            if(response.data.user){
                navigation('/home');
            }else{
                window.alert(response.data.data.msg);
            }
        })
        .catch((err) => {
            console.log(err);
        }) 
    }

    // Register Submit
    const pressRegister = (e) => {
        e.preventDefault();
        let formData = {
            "firstName": fName,
            "lastName": lName,
            "userName": username,
            "mobile": mobile,   
            "email": email,
            "image": image,
            "password1": password1,
            "password2": password2,
            "checkbox": checkbox
        }
        axios.post('/api/auth/register',{formData})
        .then((response) => {
            console.log(response);
        }).catch((err) => {
             console.log(err); 
        });

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
                    <input type="text" placeholder='Enter User Name' id='loginUserName' onChange={e => setLoginUserName(e.target.value)} />
                </div>
                
                <div className="input">
                    <label htmlFor="loginPassword">Password</label>
                    <input type="password" id='loginPassword' placeholder='Enter Password' onChange={e => setLoginPassword(e.target.value)} />
                </div>

                <button onClick={pressLogin}>Login</button>
                <a href="#forget">Forget Password</a>
                <p style={{padding:0}}>If you are not registered yet, <span onClick={()=>setChoseMethod(false)}>Register</span></p>
            </form>

            {/* register */}
            <form name='signUpForm' style={choseMethod === false ? {display: 'block'} : {display: 'none'}}>
                <div className="firstAndLastName">

                    <div className="input">
                        <label htmlFor="signUpFirstName">First Name</label>
                        <input type="text" placeholder='Enter First Name' id='signUpFirstName' onChange={(e) => setFName(e.target.value)} />
                        <span className='error_message' style={{display: 'flex'}}>First Name Required</span>
                    </div>

                    <div className="input">
                        <label htmlFor="signUpLastName">Last Name</label>
                        <input type="text" placeholder='Enter Password' id='signUpLastName' onChange={(e) => setLName(e.target.value)} />
                        <span className='error_message'>Last Name Required</span>
                    </div>
                    
                </div>
                
                <div className="input">
                    <label htmlFor="signUpUseName">User Name</label>
                    <input type="text" placeholder='Enter User Name' id='signUpUseName' onChange={(e) => setUsername(e.target.value)} />
                    <span className='error_message'>User Name Required</span>
                </div>
                
                <div className="input">
                    <label htmlFor="signUpMobile">Mobile Number</label>
                    <input type="mobile" placeholder='Enter Mobile Number' id='signUpMobile' onChange={(e) => setMobile(e.target.value)} />
                    <span className='error_message'>Mobile Number Required</span>
                </div>
                
                <div className="input">
                    <label htmlFor="signEmail">Email</label>
                    <input type="email" placeholder='Enter Email Address' id='signEmail' onChange={(e) => setEmail(e.target.value)} />
                    <span className='error_message'>Email Required</span>
                </div>
                
                <div className="input">
                    <label htmlFor="image">Image</label>
                    <input type="file"id='image' onChange={(e) => setImage(e.target.value)} />
                    <span className='error_message'>Image Required</span>
                </div>
                
                <div className="passwordAndRePassword">
                    <div className="input">
                        <label htmlFor="firstPassword">Password</label>
                        <input type="password" placeholder='Enter Password' id='firstPassword' onChange={(e) => setPassword1(e.target.value)} />
                        <span className='error_message'>Password Required</span>
                    </div>
                    
                    <div className="input">
                        <label htmlFor="secondPassword">Confirm Password</label>
                        <input type="password" placeholder='Confirm Password' id='secondPassword' onChange={(e) => setPassword2(e.target.value)} />
                        <span className='error_message'>Password Not Match</span>
                    </div>
                </div>

                <div style={{padding:'5px'}}>
                <input type="checkbox" id="check-box" onChange={() => setCheckBox(!checkbox)} /> <label htmlFor="check-box" style={{fontSize: '15px', fontWeight: "500"}} >I agreed with all terms & conditions</label>
                </div>

                <button onClick={pressRegister}>Register</button>

                <p>If you have an account, <span onClick={()=>setChoseMethod(true)}>Login</span></p>
            </form>
        </div>
    </div>
  )
}
