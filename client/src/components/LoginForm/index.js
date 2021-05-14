// see SignupForm.js for comments
import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../../utils/mutations'
import Auth from '../../utils/auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [login] = useMutation(LOGIN_USER);


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
      const { data } = await login({
        variables: { ...userFormData }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setUserFormData({
      email: '',
      password: '',
    });
  };

  return (
    <>
      <form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <article 
        className=
        {'message is-danger is-justify-content-space-between is-align-items-center'
          + (showAlert ? ' is-flex' : ' is-hidden')}
        >
          <div className='message-body'>
            Something went wrong with your login credentials!
          </div>
        </article>

        <div className='field'>
          <div className='control'>
            <label className='label' htmlFor='email'>Email</label>
            <input
              className='input'
              type='text'
              placeholder='Your email'
              name='email'
              onChange={handleInputChange}
              value={userFormData.email}
              required
            />
            {/* <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback> */}
          </div>
        </div>

        <div className='field'>

          <div className='control'>
            <label className='label' htmlFor='password'>Password</label>
            <input
              className='input'
              type='password'
              placeholder='Your password'
              name='password'
              onChange={handleInputChange}
              value={userFormData.password}
              required
            />
            {/* <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback> */}
          </div>
        </div>

        <div className='field'>

          <button
            className='button is-success'
            disabled={!(userFormData.email && userFormData.password)}
            type='submit'>
            Submit
        </button>

        </div>

      </form>
    </>
  );
};

export default LoginForm;