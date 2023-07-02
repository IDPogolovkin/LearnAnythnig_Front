import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import SocialMedia from './SocialMedia';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axios';


const SignInForm = () => {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance
            .post('login/', formData)
            .then((res) => {
                localStorage.setItem('access_token', res.data.access);
                localStorage.setItem('refresh_token', res.data.refresh);
                axiosInstance.defaults.headers['Authorization'] =
                    'Bearer ' + localStorage.getItem('access_token');
                navigate('/#contact');
                window.location.reload()
            }).catch((error) => {
                console.error(error)
            });
    };

    return (
        <form className="sign-in-form" onSubmit={handleSubmit}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faEnvelope} /></span>
                <input placeholder="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            {/* {errors.email && <span className="text-warning">This field is required</span>} */}
            <div class="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faLock} /></span>
                <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            {/* {errors.password && <span className="text-warning">This field is required</span>} */}
            <input className="iBtn" type="submit" value="sign In" />
            {/* <p className="social-text">Or Sign in with social platforms</p>
            <SocialMedia handleResponse={handleResponse} /> */}
        </form>
    );
};

export default SignInForm;