import React from 'react'
import "./css/LoginSignup.css"
function LoginSignup() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Signup</h1>
      <div className="loginSignup-fields">
        <input type="text" placeholder='Username' />
        <input type="email" placeholder='email' />
        <input type="password" placeholder='password' />

      </div>
      <button>Signup</button>
      <p className='loginsignup-login'>Already have an Account? <span>Login here</span></p>
      <div className="loginsignup-agree">
        <input type="checkbox"  name='' id=''/>
        <p>By continuing I agree to term of use & privacy policy </p>
      </div>
      </div>
    </div>
  )
}

export default LoginSignup
