import React from 'react';
import { useForm } from 'react-hook-form';
import { createAccount } from './LoginManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import SocialMedia from './SocialMedia';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignUpForm = ({handleResponse}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = () => {
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="sign-up-form">
            <h2 className="title">Sign as a Student</h2>
            <div className="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faUser}/></span>
                <input placeholder="Name" {...register("email", { required: true })} />
            </div>
            <div className="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faUser}/></span>
                <input placeholder="Last Name" {...register("email", { required: true })} />
            </div>
            <div className="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faUser}/></span>
                <input placeholder="Surname" {...register("email", { required: true })} />
            </div>
            <div className="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faEnvelope}/></span>
                <input placeholder="Email" {...register("email", { required: true })} />
            </div>
            {errors.email && <span className="text-warning">This field is required</span>}
            <div className="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faLock}/></span>
                <input type="password" placeholder="Password" {...register("password", { required: true })} />
            </div>
            <div className="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faLock}/></span>
                <input type="password" placeholder="Repeat Password" {...register("password", { required: true })} />
            </div>
            <input className="iBtn" type="submit" value="sign Up"/>
            <p className="social-text">Or Sign up with social account</p>
            <SocialMedia handleResponse={handleResponse}/>
            <br />
            <p>Already have an account?</p>

            <Link to="/sign-in">
                <button className="iBtn-sign" type='button'>Sign in</button>
            </Link>
        </form>
    );
};

export default SignUpForm;