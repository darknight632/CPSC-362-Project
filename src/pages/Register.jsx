import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname,setLastName] = useState("");
    const [question,setQuestion] = useState("Where were you born?");
    const [S_ans,setS_ans] = useState("");
    const [gender,setGender] = useState("");
    const [password, setPassword] = useState("");
    const [weight, setWeight] = useState("");
    const [age, setAge] = useState("");
    const [height,setHeight] = useState("");
    const [username,setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [calorie,setCalorie] = useState("");
    const navigate = useNavigate();

    let submitHandler = async (e) => {
        e.preventDefault();
        try{
            let res = await fetch(`http://127.0.0.1:8000/client?user_names=${username}&first_name=${firstname}&last_name=${lastname}&passwords=${password}&security_question=${question}&security_answer=${S_ans}&gender=${gender}&age=${age}&height=${height}&weights=${weight}&calorie_intake_per_day=${calorie}`, {
                method: "POST"
            });
            if(res.status == await 200){
                setFirstName("");
                setLastName("");
                setUsername("");
                setPassword("");
                setWeight("");
                setHeight("");
                setGender("");
                setAge("");
                setCalorie("");
                setS_ans("");
                alert("User created successfully");
            }
        } catch(err){
            console.log(err);
        }
    };
    
    return (
        <form onSubmit={submitHandler}>
            <div className="App">
                <div className="form-inner">
                    <h2>Register</h2>
                    <div className="form-group">
                        <label htmlFor="name">First Name:</label>
                        <input
                            type="text"
                            value={firstname}
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Last Name:</label>
                        <input
                            type="text"
                            value={lastname}
                            placeholder="Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Username</label>
                        <input
                            type="text"
                            value={username}
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="weight">Weight: </label>
                        <input
                            type="text"
                            value={weight}
                            placeholder="Weight"
                            onChange={(e) => setWeight(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Height:</label>
                        <input
                            type="text"
                            value={height}
                            placeholder="Height"
                            onChange={(e) => setHeight(e.target.value)}
                        />
                    <div className="form-group">
                        <label htmlFor="name">Gender:</label>
                        <input
                            type="character"
                            value={gender}
                            placeholder="Gender"
                            onChange={(e) => setGender(e.target.value)}
                        />
                    </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Age">Age: </label>
                        <input
                            type="text"
                            value={age}
                            placeholder="Age"
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Calorie Intake:</label>
                        <input
                            type="text"
                            value={calorie}
                            placeholder="Calories"
                            onChange={(e) => setCalorie(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Security Questions</label>
                        <select value={question} onChange={(e) => setQuestion(e.target.value)}>
                            <option value="Where were you born?">Where were you born?</option>
                            <option value="What was the name of your favorite pet?">What was the name of your favorite pet?</option>
                            <option value="Who was your favorite professor at CSUF?">Who was your favorite professor at CSUF?</option>
                            <option value="What is your favorite coding language?">What is your favorite coding language?</option>
                            <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>

                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Security Answer:</label>
                        <input
                            type="text"
                            value={S_ans}
                            placeholder="Answer"
                            onChange={(e) => setS_ans(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="flex mr-20 relative">Submit</button>
                    <button onClick={() => navigate("/")} className="flex ml-12 relative">Return</button>
                </div>
            </div>
        </form>
    )
}

export default Register