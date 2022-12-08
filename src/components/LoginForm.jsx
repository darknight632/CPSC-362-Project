import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { setValue } from "@syncfusion/ej2/base";
function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  let submitHandler = async (e) => {
    e.preventDefault();
    try{
    let res = await fetch(`http://127.0.0.1:8000/${username}&${password}`,{
      method: "GET"
    });
    let resJson = await res.json();
    if(resJson == ""){
      alert(`Incorrect Username or Password`)
      window.location.reload();
    }
    else{
      navigate("/HUD");
    }
    } catch(err){
      console.log(err);
    }
  };

  // let handleClick = () => {
  //   if(auth == "NULL"){
  //     console.log("Incorrect Username or Password")
  //   }
  //   else{
  //     navigate("/HUD")
  //   }
  // };

  return (
    <form onSubmit={submitHandler}>
      <div className="App">
        <div className="form-inner">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              name="name"
              id="name"
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
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </div>
          <div>
            <button className= "flex mr-20 relative" onClick={(e) => this.handleClick(e)}>Submit</button>
            <button className= "flex ml-10 relative" onClick={() => navigate("/Register")}>Register</button>

          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
