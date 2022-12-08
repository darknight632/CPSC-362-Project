import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username,setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(username.includes(data.name.trim())){
      alert(`${data.name} does not exist`)
      return
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="App">
        <div className="form-inner">
          <h2>Login</h2>
          {error != "" ? <div className="error">{error}</div> : ""}
          <div className="form-group">
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              name="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value= {password}
              onChange={(e) =>setPassword(e.target.value)}
            />
          </div>
          <div>
            <button className= "flex mr-20 relative">Submit</button>
            <button className= "flex ml-10 relative" onClick={() => navigate("/Register")}>Register</button>

          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
