import React, { useContext, useState } from 'react';
import { Button } from './Button';
import "./signup.css"
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../DATA/Auth.jsx';

function Signup () {
  const [credentials, setCredentials] = useState({
   username: undefined,
   email: undefined,
   password: undefined,
   
  });
 
  const { dispatch } = useContext(AuthContext);
  const Navigate = useNavigate();
 
  const handleChange = (event) => {
   setCredentials((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };
 
  const handleSubmit = async (event) => {
   event.preventDefault();
 
   try {
     const res = await fetch("http://localhost:4888/Auth/SignUp", {
       method: "POST",
       headers: {
         "content-type": "application/json",
       },
       credentials:"include",
       body: JSON.stringify(credentials),
     });
       const result = await res.json();
       if (!res.ok) alert(result.message);
  
     dispatch({ type: "REGISTER_SUCCESS" });
     Navigate("/Login");
   } catch(error){
     alert(error.message)
   }
  };


  
  return (
    <section>
      <div className='Video-Container'>
        <video src="videos/Video sin título (1).mp4" autoPlay loop muted/>
      </div>

      <div className='Signup-Form'>
        <h1>Sign In</h1>
        <p>Register and enjoy the Luxury of Travel</p> 
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label id="email" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={credentials.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <Button type="submit">Signup</Button>
      </form>
      </div>
      <div class='Signup-logo'>
    <Link to='/' className='Signup-logo'>
      UTRAVEL
      <i class="fa-solid fa-earth-europe"></i>
    </Link>
  </div>
  <small class='signup-rights'>Your adventure.  Your luxury. © {new Date().getFullYear()}</small>
    </section>
  );
};


export default Signup;