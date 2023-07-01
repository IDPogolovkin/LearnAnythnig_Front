import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt, faUserCircle, faGraduationCap, faBook} from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({setTitle}) => {

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
                            <li>
                                <NavLink onClick={() => setTitle('Courses')} activeclassname="activePage" exact to="/dashboard/book">
                                    <FontAwesomeIcon icon={faBook} className="iconC"/> 
                                    Courses
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Review')} activeclassname="activePage" to="/dashboard/review">
                                    <FontAwesomeIcon icon={faCommentAlt} className="iconC"/>
                                     Review
                                </NavLink>
                            </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
