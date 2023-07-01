import React from 'react';
import { Link} from 'react-router-dom';
import './LoginModal.css';
import "firebase/compat/auth";
import log from '../../Assets/register.svg';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import SignInForm from './SignInForm';

const SignFormModal = () => {
  const [isSignUp, setSignUp] = useState(false);


  return (
    <div className={`${isSignUp ? "fContainer sign-up-mode" : "fContainer"}`}>
      <Link to="/">
        <span className="pageCloseBtn"><FontAwesomeIcon icon={faTimes} /></span>
      </Link>
      <div className="forms-container">
        <div className="signIn-singUp">
          <SignInForm />
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h2>New one here?</h2>
            <p className='sign-text'>Сreate an account and learn anything from any level of background</p>
            <Link to="/login">
              <button className="iBtn transparent">Register</button>
            </Link>
          </div>
          <img src={`${log}`} alt="" className="pImg" />
        </div>
      </div>
    </div>
  );
};

export default SignFormModal;