import React from 'react';
// import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import SocialMedia from './SocialMedia';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../axios';
// import toast from 'react-hot-toast';


const Teach_SignUp = ({ handleResponse }) => {
  // const { register, handleSubmit, formState: { errors } } = useForm();

  // const onSubmit = ({email, password}) => {
  //     const loading = toast.loading('Please wait...');
  //     loginWithEmail(email, password)
  //     .then(res => {
  //         if(res.error){
  //             toast.dismiss(loading);
  //             toast.error(res.error)
  //         }
  //         handleResponse(res)
  //         toast.dismiss(loading);
  //     })
  // }

  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    first_name: '',
    last_name: '',
    birth_date: '',
    surname: '',
    email: '',
    password: '',
    password2: '',
  });


  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (formData.password !== formData.password2) {
      alert('error: Passwords do not match')
    } else {

      console.log('formData', formData)

      axiosInstance.post('signup/mentor/', formData).then(
        navigate('/sign-in')
      ).catch((error) => {
        alert('error: ', error)
      })
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sign-in-form">
      <h2 className="title">Sign as Mentor</h2>
      <div className="input-field">
        <span className="fIcon"><FontAwesomeIcon icon={faUser} /></span>
        <input placeholder="Name" />
      </div>
      <div className="input-field">
        <span className="fIcon"><FontAwesomeIcon icon={faUser} /></span>
        <input placeholder="Last Name" />
      </div>
      <div className="input-field">
        <span className="fIcon"><FontAwesomeIcon icon={faUser} /></span>
        <input placeholder="Surname" />
      </div>
      <div className="input-field">
        <span className="fIcon"><FontAwesomeIcon icon={faEnvelope} /></span>
        <input defaultValue='admin@mail.com' placeholder="Email" />
      </div>
      {/* {errors.email && <span className="text-warning">This field is required</span>} */}
      <div class="input-field">
        <span className="fIcon"><FontAwesomeIcon icon={faLock} /></span>
        <input defaultValue="admin123" type="password" placeholder="Password" />
      </div>
      <div className="input-field">
        <span className="fIcon"><FontAwesomeIcon icon={faLock} /></span>
        <input type="password" placeholder="Repeat Password" />
      </div>
      {/* {errors.password && <span className="text-warning">This field is required</span>} */}
      <input className="iBtn" type="submit" value="sign up" />
      <p className="social-text">Or Sign in with social platforms</p>
      <SocialMedia handleResponse={handleResponse} />
      <br />
      <p>Already have an account?</p>
      <Link to="/sign-in">
        <button className="iBtn-sign" type='button'>Sign in</button>
      </Link>
    </form>
  );
};

export default Teach_SignUp;