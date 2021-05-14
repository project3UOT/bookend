import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks'

import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
    const { data } = await addUser({
      variables: { ...userFormData }
    });
    Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <article
          className=
          {'message is-danger is-justify-content-space-between is-align-items-center'
            + (showAlert ? ' is-flex' : ' is-hidden')}
        >
          <div className='message-body'>
            Something went wrong with your sign up!
          </div>
        </article>

        <div className='field'>
          <div className='control'>
          <label className='label' htmlFor='username'>Username</label>
          <input className='input'
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          </div>
          <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
        </div>
        

        <div className='field'>
          <div className='control'>
          <label className='label' htmlFor='email'>Email</label>

          <input className='input'
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
            />
          </div>
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </div>
        

        <div className='field'>
          <div className='control'>
          <label className='label' htmlFor='password'>Password</label>

          <input className='input'
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
            />
            </div>
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </div>
        <button
          className='button is-success'
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='submit'>
          Submit
        </button>
      </form>
    </>
  );
};

export default SignupForm;
