import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import pic from "./generic_user.png"
import "./Profile.css"

const Profile = () => {
    var id = 144;
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/client/${id}`)
          .then(response => response.json())
          .then(data => {
            setUserName(data.client[1])
            setFirstName(data.client[2]);
            setLastName(data.client[3]);
            setAge(data.client[8]);
            setHeight(data.client[9]);
            setWeight(data.client[10]);
            console.log(data);
          })
          .catch(() => {
            console.log("error")
          })
    },);
    return (
        <div class="body">
            <div class="profile-card">
                <div class="card-header">
                    <div class="pic">
                        <img src={pic} />
                    </div>
                    <div class="name">{firstName} {lastName}</div>
                    <div class="desc">@{userName}</div>
                </div>
                <div class='card-footer'>
                    <div class="numbers">
                        <div class="item">
                            <span>{age} </span>
                            Age
                        </div>
                        <div class="border"></div>
                        <div class="item">
                            <span>{height}</span>
                            Height
                        </div>
                        <div class="border"></div>
                        <div class="item">
                            <span>{weight} </span>
                            Weight 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile