import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';
import SocialMedia from './SocialMedia';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../axios';

const SignUpForm = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    first_name: '',
    last_name: '',
    surname: '',
    birth_date: '',
    email: '',
    password: '',
    password2: ''
  });

  console.log('first', formData)

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


      const a = {
        first_name: 'adwd',
        last_name: 'awdawd',
        surname: 'awdawd',
        birth_date: '2020-02-02',
        email: 'khejdbakjedn@gmail.com',
        password: 'Test123456',
        password2: 'Test123456'
      }


      axiosInstance.post('signup/student/', a).then((res) => {
        console.log('res', res)
      }
      ).catch((error) => {
        console.error('error: ', error)
      })
    }
  };


  return (
    <form onSubmit={handleSubmit} className="sign-up-form">
      <h2 className="title">Sign as a Student</h2>
      <div className="input-field">
        <span className="fIcon"><FontAwesomeIcon icon={faUser} /></span>
        <input placeholder="Name" type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
      </div>
      <div className="input-field">
        <span className="fIcon"><FontAwesomeIcon icon={faUser} /></span>
        <input placeholder="Last Name" type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
      </div>
      <div className="input-field">
        <span className="fIcon"><FontAwesomeIcon icon={faUser} /></span>
        <input placeholder="Surname" type="text" name="surname" value={formData.surname} onChange={handleChange} />
      </div>
      <div className="input-field">
        <span className="fIcon"><FontAwesomeIcon icon={faCalendar} /></span>
        <input placeholder="Surname" type="date" name="birth_date" value={formData.birth_date} onChange={handleChange} />
      </div>
      <div className="input-field">
        <span className="fIcon"><FontAwesomeIcon icon={faEnvelope} /></span>
        <input placeholder="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      {/* {errors.email && <span className="text-warning">This field is required</span>} */}
      <div className="input-field">
        <span className="fIcon"><FontAwesomeIcon icon={faLock} /></span>
        <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <div className="input-field">
        <span className="fIcon"><FontAwesomeIcon icon={faLock} /></span>
        <input type="password" placeholder="Repeat Password" name="password2" value={formData.password2} onChange={handleChange} />
      </div>
      <input className="iBtn" type="submit" value="sign Up" />
      {/* <p className="social-text">Or Sign up with social account</p>
            <SocialMedia handleResponse={handleResponse}/>
            <br /> */}
      <p>Already have an account?</p>

      <Link to="/sign-in">
        <button className="iBtn-sign" type='submit'>Sign in</button>
      </Link>
    </form>
  );
};

export default SignUpForm;