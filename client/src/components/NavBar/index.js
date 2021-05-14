import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../SignupForm/index';
import LoginForm from '../LoginForm/index';

import Auth from '../../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className='navbar-brand'>
          <a className="navbar-item" href="/">
            Book End
        </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary" onClick={() => setShowModal(true)}>
                <strong>Login</strong>
              </a>
              <a className="button is-primary" onClick={() => setShowModal(true)}>
                <strong>Sign up</strong>
              </a>
            </div>
          </div>
        </div>

      </nav>

    {/* modal */}
      <div className={showModal ? 'modal is-active' : 'modal'}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head is-justify-content-space-between is-align-items-flex-start">
            <div className="tabs">
              <ul>
                <li className={showLogin ? 'is-active' : ''}>
                  <a onClick={() => setShowLogin(true)}>Login</a>
                </li>
                <li>
                  <a className={!showLogin ? 'is-active' : ''} onClick={() => setShowLogin(false)}>Sign Up</a>
                </li>
              </ul>
            </div>
            <button className="delete" aria-label="close" onClick={() => setShowModal(false)}></button>
          </header>
          <section className="modal-card-body">
            {showLogin ? <LoginForm handleModalClose={() => setShowModal(false)} /> :
              <SignUpForm handleModalClose={() => setShowModal(false)} />}
          </section>
          
          
          {/* <footer className="modal-card-foot">
            <button className="button is-success">Start Reading!</button>
            <button className="button">Cancel</button>
          </footer> */}


        </div>
      </div>
    </>
  );
};

export default AppNavbar;
