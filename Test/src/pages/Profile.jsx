import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Profile.css'

const Profile = () => {

    return (
        <body>

            <div className='card'>

                <div className='profile-pic'>
                    <img src="../pages/generic_user.png" />
                </div>

                <div classname="profile-name">
                    <h2>Bob joe</h2>
                    <p>@BobJoe</p>

                </div>

                <div class="profile-button">
                    <Button>Weight</Button>
                    <Button>Height</Button>
                </div>

                <div className='detail'>

                    <div className='follower'>
                        <h4>Gender</h4>
                        <p>Age</p>
                    </div>

                    <div className='height'>
                        <h4>Male</h4>
                        <p>23</p>
                    </div>
                </div>


            </div>

        </body>

    )
}

export default Profile