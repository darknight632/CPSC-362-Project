import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [details, setDetails] = useState({ name: "", email: "", password: "", weight: "",Age: "" });
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
    };

    const adminUser = {
        email: "admin@admin.com",
        password: "12",
      };
    
      const [user, setUser] = useState({ name: "", email: "" });
      const [error, setError] = useState("");
    
      const Login = (details) => {
        console.log(details);
    
        if (
          details.email == adminUser.email &&
          details.password == adminUser.password
        ) {
          console.log("Logged in");
          setUser({
            name: details.name,
            email: details.email,
          });
        } else {
          console.log("Username or password incorrect!");
          setError("Username or password incorrect!");
        }
      };
    
    return (
        <form onSubmit={submitHandler}>
            <div className="App">
                <div className="form-inner">
                    <h2>Register</h2>
                    {error != "" ? <div className="error">{error}</div> : ""}
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={(e) => setDetails({ ...details, name: e.target.value })}
                            value={details.name}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={(e) =>
                                setDetails({ ...details, email: e.target.value })
                            }
                            value={details.email}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={(e) =>
                                setDetails({ ...details, password: e.target.value })
                            }
                            value={details.password}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="weight">Weight: </label>
                        <input
                            type="text"
                            name="Weight"
                            id="weight"
                            onChange={(e) =>
                                setDetails({ ...details, email: e.target.value })
                            }
                            value={details.email}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Age">Age: </label>
                        <input
                            type="text"
                            name="Age"
                            id="age"
                            onChange={(e) =>
                                setDetails({ ...details, email: e.target.value })
                            }
                            value={details.email}
                        />
                    </div>
                    <div>
                        <button onClick={() => navigate("/CPSC-362-Project")}>Submit</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Register