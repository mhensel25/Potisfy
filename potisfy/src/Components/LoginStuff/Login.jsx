import React, {useEffect, useState} from 'react'
import './Login.css'
import password_icon from "../Assets/password.png"
import email_icon from "../Assets/email.png"
import user_icon from "../Assets/user.png"


const Login = () => {

  const [action, setAction] = useState("Sign Up");

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Potisfy</div>
        <div className='text'>{action}</div>
        <div className='underline'/>
      </div>
        <div className='inputs'>
          {action==="Login"?<div></div>:<div className='input' > {/*name*/}
          <img src={user_icon} alt=""></img>
          <input type="text" placeholder='Name'/>
        </div>}
        <div className='input'> {/*email*/}
          <img src={email_icon} alt=""></img>
          <input type="email" placeholder='Email'/>
        </div>
        <div className='input'> {/*password*/}
          <img src={password_icon} alt=""></img>
          <input type="password" placeholder='Password'/>
        </div>
        </div>
        {action==="Sign Up"?<div></div>: <div className="forgot-password">Forgot Password? <span>Reset Password</span></div>}
        <div className="submit-container">
          <div className={action==='Login'?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action==='Sign Up'?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
        <p className="note">Sorry for the inconvenience, but the server is not currently working. Please click the start button to access Potisfy.</p>
        <div className="submit-container">
          <div className="submit-start">Start</div>
        </div>
    </div>
  )
}

export default Login