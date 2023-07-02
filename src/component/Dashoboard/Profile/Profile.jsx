import React from 'react';
import { Col } from 'react-bootstrap';
import './Profile.css'
import jwt_decode from "jwt-decode";
import userimg from '../../../Assets/user.svg';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
    let navigate = useNavigate()

    const user = localStorage.getItem('access_token')
    let decode

    if (user) {
        decode = jwt_decode(user)
    }
    const logout = () => {
        navigate('/#');
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.reload()
    }
    return (
        <Col md={5} className="mx-auto">
            <div className="profile">
                <h2>Profile</h2>
                <div className="profileInfo">
                    <img src={userimg} alt="" />
                    <h3 className="userName">{decode?.first_name} {decode?.last_name}</h3>
                    <h5 className="userEmail">{decode?.email}</h5>
                    <button className="mainBtn mt-3"
                        onClick={logout}
                    >Log out</button>
                </div>
            </div>
        </Col>
    );
};

export default Profile;