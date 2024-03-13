import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import "./login.css";

export default function Login() {
   // Initialize navigate hook for navigation
   const history = useNavigate();

  // Define state for username and password inputs using useState hook
  const [state, setState] = useState({
    username: "",
    password: ""
  });

  // Define a function to handle changes in form inputs
  const handleChange = (fieldName) => (e) => {
    // Extract the value entered into the input field from the event object (e)
    const value = e.target.value;

    // Update the state using the setState function
    // Spread the current state (...state) to retain its existing properties and values,
    // while updating the property specified by fieldName with the new value obtained from the input field
    setState({
      ...state,
      [fieldName]: value
    });
  };

  // Define a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare user data object to be sent to the server
    const userData = {
        username: state.username,
        password: state.password
    };
    // Send a POST request to the server with user data for login authentication
    axios.post("http://localhost:4000/api/auth/login", userData)
        .then((response) => {
            console.log(response);
            // Redirect to home page upon successful login
            history('/');
        })
        .catch((error) => {
            // Handle different types of errors
            if (error.response) {
                console.log(error.response);
                console.log("server responded");
            } else if (error.request) {
                console.log("network error");
            } else {
                console.log(error);
            }
        });
    };
    
    return (
    <form onSubmit={handleSubmit}>
        <div className="login_page">
          <div className="login_container">
            <div className="signTitle">
              <h2>Sign In</h2>
            </div>
            
            <div className="wrapper">
                <input 
                className = "textSign" 
                type="text" 
                name = "username"
                value = {state.username}
                onChange = {handleChange('username')}
                placeholder="Username"
                required/> 
            </div>
            <div className="wrapper">
                <input 
                className = "textSign" 
                type="text" 
                name = "Password"
                value = {state.password}
                onChange = {handleChange('password')} 
                placeholder="Password" 
                required/>
            </div>
            <div className="submitButton">
                {/* <input type="submit" value = "Login" /> */}
                <button id='signUpB' type = "submit">Sign in</button>
            </div>
          </div>     
        </div>
    </form>
        
    )
}