import React from 'react';
import { Link } from 'react-router-dom';
import './LoginModal.css';
import log from '../../Assets/log.svg';
import desk from '../../Assets/register.svg';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import SignUpForm from './SignUpForm';
import Teach_SignUp from './Teach_SignUp';

const Form = () => {
  const [isSignUp, setSignUp] = useState(false);

  return (
    <div className={`${isSignUp ? "fContainer sign-up-mode" : "fContainer"}`}>
      <Link to="/">
        <span className="pageCloseBtn"><FontAwesomeIcon icon={faTimes} /></span>
      </Link>
      <div className="forms-container">
        <div className="signIn-singUp">
          {/* <SignInForm handleResponse={handleResponse}/> */}
          <SignUpForm  />
          <Teach_SignUp />
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h2>Wanna learn any topic ?</h2>
            <p className='sign-text'>Сreate an account and learn anything from any level of background</p>
            <button className="iBtn transparent" onClick={() => setSignUp(true)}>Register</button>
          </div>
          <img src={`${log}`} alt="" className="pImg" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h2>Wanna be a Mentor ?</h2>
            <p className='sign-text'>Сreate an account and start teaching students now</p>
            <button className="iBtn transparent" onClick={() => setSignUp(false)}>Register</button>
          </div>
          <img src={`${desk}`} alt="" className="pImg" />
        </div>
      </div>
    </div>
  );
};

export default Form;