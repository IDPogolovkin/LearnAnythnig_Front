import React from 'react';
import { Col } from 'react-bootstrap';
import './Profile.css'
import userimg from '../../../Assets/user.svg';
const Profile = () => {

    const signOut =()=>{
        console.log('logOut')
    }

    return (
        <Col md={5} className="mx-auto">
            <div className="profile">
                <h2>Profile</h2>
                <div className="profileInfo">
                    <img src={userimg} alt="" />
                    <h3>
                        name
                    </h3>
                    <h5>
                        email
                    </h5>
                    <button className="mainBtn mt-3"
                        onClick={signOut}
                    >Log out</button>
                </div>
            </div>
        </Col>
    );
};

export default Profile;