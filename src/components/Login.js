import React, { useState } from 'react';
import '../styles/Login.css'

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisibility] = useState(false);
  const [error, setError] = useState('');

  const InputType = visible ? "text" : "password";


  const onNameChange = (e) => {
    const val = e.target.value
    setName(val)
  }

  const onPasswordChange = (e) => {
    const val = e.target.value
    setPassword(val)
  }

  const onFormSubmit = (e) => {
    e.preventDefault()

    // SET THE INPUT FIELD TO IT'S INITIAL STATE
    setName('')
    setPassword('')

    // EXTRA VALIDATION
    if(!name || !password) {
      // DISPLAY AN ERROR
      setError('Please provide the required information');
    } else {
      setError('');
      // MAKE A POST REQUEST
      }
    }
  

  return (
    <div className="d-flex justify-content-center align-items-center login-wrapper">
    <div className="login">
     <div>
     <div>
          <h4 className="heading py-3"><span className="bold">Superb</span>Books</h4>
        </div>
      <div className="py-5 px-5"> 
        {error && <p>{error}</p>}
        <h4 className="title">Log In</h4>
          <p className="small-text">Enter your details to login</p>
            <form onSubmit={onFormSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Username or Email Address" 
                  id="name" 
                  className="form-control p-4" 
                  value={name}
                  required
                  onChange={onNameChange}
                />
              </div>
              <div className="form-group">
                <input  
                  type={InputType}
                  placeholder="Password" 
                  id="password" 
                  className="form-control p-4" 
                  value={password}
                  required
                  onChange={onPasswordChange}
                  
                />
                
                <i className={visible ? "fa fa-eye-slash" : "fa fa-eye"} id ="pa-eye" aria-hidden="true" onClick={() => setVisibility(visibility => !visibility)}></i>
              </div>

                <p className="forgot-password">Forgot Password?</p>
                <button className="btn button btn-block">Log In</button>
            </form>
            <div className="no-account">
              <p className="m-0 pt-3 pb-2 small-text">Don't have an account yet?</p>
              <button className="btn button-reverse btn-block">Sign Up</button>
            </div>
      </div>
     </div>
    </div>

    </div>
  )
}

export default Login;
