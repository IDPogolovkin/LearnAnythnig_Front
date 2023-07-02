import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import PopOver from '../PopOver/PopOver';


const NavBar = () => {
    const [isSticky, setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, [])

    const user = localStorage.getItem('access_token')

    const scrollTop = () => window['scrollTo']({ top: 0, behavior: 'smooth' });
    return (
        <Navbar className={`navbar navbar-expand-lg navbar-light ${isSticky ? "navStyle" : "navDefault"}`} expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" onClick={scrollTop} className="navBrn">
                    <FontAwesomeIcon icon={faGraduationCap} className="brnIcon" />  Learn <span className="navHighlight"> Anything</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto mainNav" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" className="nav-link" onClick={() => window['scrollTo']({ top: 0, behavior: 'smooth' })}>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#contact" className="nav-link">Study</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/dashboard/profile" className="nav-link">Dashboard</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            {
                                user ?
                                    <div>
                                        <PopOver />
                                    </div> :
                                    <Link to="/login">
                                        <button className="loginBtn">Login</button>
                                    </Link>
                            }
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;