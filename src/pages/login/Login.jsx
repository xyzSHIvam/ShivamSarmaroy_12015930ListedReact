import React from 'react'
import "./login.scss"
 import {FcGoogle} from "react-icons/fc"
 import {SiApple} from "react-icons/si"
 import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='login'>
      <div className='loginBoard'>
      <div className='loginLogo'>Board.</div>
      </div>
      <div className='loginSign'>
        <div className='signin'>
            <div className='one'>
                <span className='loginSignin'>Sign In</span>
                <span className='signIncontent'>Sign in to your account</span>
            </div>
            <div className='two'>
                <div className='google'>
                    <span className='googleicon'><FcGoogle/></span>
                    <span className='googleText'>Sign in with google</span>
                </div>
                <div className='ios'>
                <span className='iosicon'><SiApple/></span>
                    <span className='iosText'>Sign in with ios</span>
                </div>
            </div>
            <div className='three'>
                 <div className='boxSignin'>
                    <form>
                        <label for="email">Email Address</label>
                        <input type="email" name="email" placeholder='Enter your email'/>
                        <label for="email">Password</label>
                        <input type="password" name="email" placeholder='Enter your password'/>
                    <span className='forgetPassword'>Forgot password?</span>
                   <Link to="/home">
                   <button className='signInButton'>Sign IN</button>
                   </Link> 
                    </form>
                 </div>
            </div>
            <div className='four'>
                <span>Don't have an account? <span style={{color:"blue"}}>Register here</span></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
