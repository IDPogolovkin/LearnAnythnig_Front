import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import SocialMedia from './SocialMedia';


const SignInForm = () => {

    return (
        <form  className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faEnvelope} /></span>
                <input defaultValue='admin@mail.com' placeholder="Email"  />
            </div>
            {/* {errors.email && <span className="text-warning">This field is required</span>} */}
            <div class="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faLock} /></span>
                <input defaultValue="admin123" type="password" placeholder="Password"  />
            </div>
            {/* {errors.password && <span className="text-warning">This field is required</span>} */}
            <input className="iBtn" type="submit" value="sign In" />
            {/* <p className="social-text">Or Sign in with social platforms</p>
            <SocialMedia handleResponse={handleResponse} /> */}
        </form>
    );
};

export default SignInForm;