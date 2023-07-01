import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Button, Overlay } from 'react-bootstrap';
import Popover from 'react-bootstrap/Popover'
import './PopOver.css';
import toast from 'react-hot-toast';

const PopOver = () => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };
    const signOut = () => {
        const loading = toast.loading('Please wait...');
    }
    return (
        <div >
            <img src='https://cdn-icons-png.flaticon.com/512/6522/6522516.png' alt="" onClick={handleClick} className="popImg"/>
             <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref.current}
                containerPadding={50}
            >
                <Popover id="popover-contained">
                    <div className="text-center">
                        <img src='https://cdn-icons-png.flaticon.com/512/6522/6522516.png' alt="" className="popUserImg"/>
                        <p className="userName">name</p>
                        <p className="userEmail">email</p>
                        <Button variant="outline-danger" size="sm" className='log-out-butt' onClick={signOut}>Log out</Button>
                    </div>
                 </Popover> 
            </Overlay> 
        </div>
    );
};

export default PopOver;