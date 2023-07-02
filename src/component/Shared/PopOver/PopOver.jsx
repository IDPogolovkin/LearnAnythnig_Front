import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Button, Overlay } from 'react-bootstrap';
import Popover from 'react-bootstrap/Popover'
import './PopOver.css';
import toast from 'react-hot-toast';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const PopOver = () => {
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

    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    return (
        <div >
            <img src='https://cdn-icons-png.flaticon.com/512/6522/6522516.png' alt="" onClick={handleClick} className="popImg" />
            <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref.current}
                containerPadding={50}
            >
                <Popover id="popover-contained">
                    <div className="text-center">
                        <img src='https://cdn-icons-png.flaticon.com/512/6522/6522516.png' alt="" className="popUserImg" />
                        <p className="userName">{decode?.first_name} {decode?.last_name}</p>
                        <p className="userEmail">{decode?.email}</p>
                        <Button variant="outline-danger" size="sm" className='log-out-butt' onClick={logout}>Log out</Button>
                    </div>
                </Popover>
            </Overlay>
        </div>
    );
};

export default PopOver;