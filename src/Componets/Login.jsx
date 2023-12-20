import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "./Button";
import { AuthContext } from "../DATA/Auth";
import "./Login.css"

function Login() {
  const [credentials, setCredentials] = useState({
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

      dispatch({type: "LOGIN_START"})
      try {
          const res = await fetch("http://localhost:4888/Auth/Login", {
              method: "POST",
              headers: {
                 "content-type": "application/json",
              },
              credentials:"include",
              body: JSON.stringify(credentials),
          });
          const result = await res.json();
          if (!res.ok) alert(result.message);
        
          Navigate("/UserPage");
          dispatch({ type: "LOGIN_SUCCESS", payload:result });
      } catch(error){
          dispatch({type: "LOGIN_FAILURE", payload:error.message})
      }
  };
  

  return (
    <section>
      <div className='Video-Container'>
        <video src="/public/videos/Video sin título (1).mp4" autoPlay loop muted/>
      </div>

      <div className='Login-Form'>
        <h1>Login</h1>
        <p>Login and enjoy the Luxury of Travel</p> 
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
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
        <Button type="submit">Login</Button>
        <h5>Dont have an Account? <Link to="/SIGNUP">Create</Link> </h5>
      </form>
      </div>
      <div class='Login-logo'>
    <Link to='/' className='Login-logo'>
      UTRAVEL
      <i class="fa-solid fa-earth-europe"></i>
    </Link>
  </div>
  <small class='Login-rights'>Your adventure.  Your luxury. © {new Date().getFullYear()}</small>
    </section>
  );
}

        

export default Login;