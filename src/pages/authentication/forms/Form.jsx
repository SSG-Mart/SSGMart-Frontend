import React from 'react';
import './authentication_form.scss';

export default function Form() {
  return (
    <div className='authentication_form_container'>
        <div className="choosingPart">
            <div className="login selected"><p >Login</p></div>
            <div className="signUp"><p>Register</p></div>
        </div>

        <div className="body">
            <form name='loginForm' >
                <div className="input">
                    <label htmlFor="loginUserName">User Name</label>
                    <input type="text" placeholder='Enter User Name' id='loginUserName' />
                </div>
                
                <div className="input">
                    <label htmlFor="loginPassword">Password</label>
                    <input type="password" id='loginPassword' placeholder='Enter Password' />
                </div>

                <button>Login</button>
                <a href="#forget">Forget Password</a>
                <p style={{padding:0}}>If you are not registered yet, <span>Register</span></p>
            </form>

            <form name='signUpForm'>
                {/* Sign up hear */}
            </form>
        </div>
    </div>
  )
}
