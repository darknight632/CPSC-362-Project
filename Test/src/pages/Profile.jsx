import React, { useEffect, useState } from 'react';
import pic from "./generic_user.png"
import "./Profile.css"


const Profile = () => {

    return (
        <div class="body">
            <div class="profile-card">
                <div class="card-header">
                    <div class="pic">
                        <img src={pic} />
                    </div>
                    <div class="name">Joe Jo</div>
                    <div class="desc">@JoeJo</div>
                </div>
                <div class='card-footer'>
                    <div class="numbers">
                        <div class="item">
                            <span>22 </span>
                            Age
                        </div>
                        <div class="border"></div>
                        <div class="item">
                            <span>5'11</span>
                            Height
                        </div>
                        <div class="border"></div>
                        <div class="item">
                            <span>180 </span>
                            Weight 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile