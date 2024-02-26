import React, {useState} from 'react'
//import {useNavigate} from 'react-router-dom'
import axios from 'axios';

export default function SignUp() {
  // const history = useNavigate();
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

  const handleSubmit = (e) => {
    e.preventDefault();
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
    axios.post("http://localhost:4000/api/auth/signup", userData).then((response) => {
      console.log(response);
      //history('/sign-in');
    })
    .catch((error) => {
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
      <div className="container">
        <div className="box">
          <div className="signTitle">
            <h2>Sign Up</h2><br />
          </div>
            <div className="username">
                <input 
                className = "textSign" 
                type="text" 
                name = "username"
                value = {state.username}
                onChange = {handleChange('username')}
                placeholder="username"
                required/> 
            </div>
            <div className="password">
                <input 
                className = "textSign" 
                type="text" 
                name = "Password"
                value = {state.password}
                onChange = {handleChange('password')} 
                placeholder="Password" 
                required/>
            </div>
            <div className="email">
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
            <div className="address">
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
            <div className="phoneNumber">
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
        </div>   
      </div>
    </form>
  )
}