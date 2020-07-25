import React, { useState } from 'react';
import '../styles/Login.css'

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisibility] = useState(false);
  const [error, setError] = useState('');

  const InputType = visible ? "text" : "password";


  const handlerChange = (event, handler) => {
    const val = event.target.value
    handler(val)
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
      const data = {
        name,
        password
      }
    }
  }

  const fa = "fa-eye-slash"
  return (
    <div className="login">
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
                  onChange={(e) => handlerChange(e, setName)}
                />
              </div>
              <div className="form-group">
                <input  
                  type="password" 
                  placeholder="Password" 
                  id="password" 
                  type={InputType}
                  className="form-control p-4" 
                  value={password}
                  required
                  onChange={(e) => handlerChange(e, setPassword)}
                  
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
  )
}

export default Login;