import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PopOver from '../../Shared/PopOver/PopOver';
import Sidebar from '../Sidebar/Sidebar';
import UserDashboard from '../UserDashboard/UserDashboard/UserDashboard';
import './Dashboard.css';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axiosInstance from '../../../axios';

const Dashboard = () => {
    const [sideToggle, setSideToggle] = useState(false)
    const [title, setTitle] = useState('Learn Anything')

    const getData = () => {
        axiosInstance('data/').then((response) => {
        }).catch((error) => {
            console.error(error)
        })
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div id="dashboard">
            <div id="sidebar" className={sideToggle ? "active" : ""}>
                <div className="sidebarContent">
                    <Sidebar setTitle={setTitle} />
                    <div className="backBtnBox">
                        <Link to="/">
                            <button className="backBtn">
                                <FontAwesomeIcon icon={faSignOutAlt} />
                                back to home</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div id="pageContent">
                <div className="dashBoardHeader">
                    <div className="d-flex align-items-center">
                        <div id="nav-icon"
                            className={sideToggle ? "menu-btn" : "menu-btn open"}
                            onClick={() => setSideToggle(!sideToggle)}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <h3>{title}</h3>
                    </div>
                    <PopOver />
                </div>
                <UserDashboard />
            </div>
        </div>
    )
}

export default Dashboard
