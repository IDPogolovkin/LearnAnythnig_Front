import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt, faUserPlus, faCog, faFileMedical, faList, faUserCircle, faGraduationCap, faBook} from '@fortawesome/free-solid-svg-icons'
import { useAppContext } from '../../../context';

const Sidebar = ({setTitle}) => {
    const { state: { admin } } = useAppContext()

    return (
        <div>
            <div className="sideBrand">
                <div className="sideBrnIcon">
                    <FontAwesomeIcon icon={faGraduationCap}/>
                    </div>
                <h2>Learn <span className="navHighlight">Anything</span></h2>
            </div>
            <nav id="sideNavbar">
                <ul>    
                        <li>
                            <NavLink onClick={() => setTitle('Profile')} activeclassname="activePage" exact to="/dashboard/profile">
                                <FontAwesomeIcon icon={faUserCircle} className="iconC"/> 
                                Profile
                            </NavLink>
                        </li>
                    {admin ? 
                        <>
                            <li>
                                <NavLink onClick={() => setTitle('Order List')} activeclassname="activePage" to="/dashboard/orderList">
                                    <FontAwesomeIcon icon={faList} className="iconC"/> 
                                    Order list
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Add Service')} activeclassname="activePage" to="/dashboard/addService">
                                    <FontAwesomeIcon icon={faFileMedical} className="iconC"/> 
                                    Add Service
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Make Admin')} activeclassname="activePage" to="/dashboard/makeAdmin">
                                    <FontAwesomeIcon icon={faUserPlus} className="iconC"/> 
                                    Make Admin
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Manage Services')} activeclassname="activePage" to="/dashboard/manageServices">
                                    <FontAwesomeIcon icon={faCog} className="iconC"/>
                                     Manage Services
                                </NavLink>
                            </li>
                        </>
                        :
                        <>
                            <li>
                                <NavLink onClick={() => setTitle('Courses')} activeclassname="activePage" exact to="/dashboard/book">
                                    <FontAwesomeIcon icon={faBook} className="iconC"/> 
                                    Courses
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Booking List')} activeclassname="activePage" to="/dashboard/booking">
                                    <FontAwesomeIcon icon={faList} className="iconC"/> 
                                    Booking List
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Review')} activeclassname="activePage" to="/dashboard/review">
                                    <FontAwesomeIcon icon={faCommentAlt} className="iconC"/>
                                     Review
                                </NavLink>
                            </li>
                        </>
                     } 
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
