import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import './signup.css';

export default function SignUp() {
  // Initialize navigate hook for navigation
  const history = useNavigate();

  // Define state for user information inputs using useState hook
  const [state, setState] = useState({
      username: "",
      password: "",
      email: "",
      address: {
          street: "",
          city: "",
          state: "",
          zipCode: "",
          country: "",
      },
      phoneNumber: "",
  });

  // Define a function to handle changes in form inputs
  const handleChange = (fieldName, nestedFieldName) => (e) => {
      const value = e.target.value;

      // If nestedFieldName is provided, update the nested object
      if (nestedFieldName) {
          setState((prevState) => ({
              ...prevState,
              [fieldName]: {
                  ...prevState[fieldName],
                  [nestedFieldName]: value,
              },
          }));
      } else {
          // If no nestedFieldName, update the attribute directly
          setState((prevState) => ({
              ...prevState,
              [fieldName]: value,
          }));
      }
  };

  // Define a function to handle form submission
  const handleSubmit = (e) => {
  e.preventDefault();
  // Prepare user data object to be sent to the server
  const userData = {
      username: state.username,
      password: state.password,
      email: state.email,
      address: {
          street: state.address.street,
          city: state.address.city,
          state: state.address.state,
          zipCode: state.address.zipCode,
          country: state.address.country,
      },
      phoneNumber: state.phoneNumber,
  };
  // Send a POST request to the server with user data for sign-up
  axios.post("http://localhost:4000/api/auth/signup", userData)
      .then((response) => {
          console.log(response);
          // Redirect to login page upon successful sign-up
          history('/login');
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
    <div className="signup-page">
    <form onSubmit={handleSubmit}>
      <div className="signup_container">
          <div className="signTitle">
            <h2>Sign Up</h2>
          </div>
            <div className="wrapper">
                <input 
                className = "textSign" 
                type="text" 
                name = "Username"
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
            <div className="wrapper">
                <input 
                className="textSign" 
                type="email" 
                name="email"
                value={state.email}
                onChange={handleChange('email')} 
                placeholder="Email" 
                required
                />
            </div>
            <div className="wrapper">
                <input 
                className="textSign" 
                type="text" 
                name="street"
                value={state.address.street}
                onChange={handleChange('address', 'street')} 
                placeholder="Street" 
                required
                />
                <input 
                className="textSign" 
                type="text" 
                name="city"
                value={state.address.city}
                onChange={handleChange('address', 'city')} 
                placeholder="City" 
                required
                />
                <input 
                className="textSign" 
                type="text" 
                name="state"
                value={state.address.state}
                onChange={handleChange('address', 'state')} 
                placeholder="State" 
                required
                />
                <input 
                className="textSign" 
                type="text" 
                name="zipCode"
                value={state.address.zipCode}
                onChange={handleChange('address', 'zipCode')} 
                placeholder="Zip Code" 
                required
                />
                <input 
                className="textSign" 
                type="text" 
                name="country"
                value={state.address.country}
                onChange={handleChange('address', 'country')} 
                placeholder="Country" 
                required
                />
            </div>
            <div className="wrapper">
                <input 
                className="textSign" 
                type="tel" 
                name="phoneNumber"
                value={state.phoneNumber}
                onChange={handleChange('phoneNumber')} 
                placeholder="Phone Number" 
                required
                />
            </div>
            <div className="submitButton">
              <button id='signUpB' type = "submit">Sign up</button>
            </div>
            <h4>
              Already have an account ? <a href='/login'>Login Now</a>
            </h4>
        </div>   
    </form>
    </div>
  )
}