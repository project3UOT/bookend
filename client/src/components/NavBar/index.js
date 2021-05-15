import React, { useState } from 'react';
import SignUpForm from '../SignupForm/index';
import LoginForm from '../LoginForm/index';

import Auth from '../../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item is-family-heading is-size-2' href='/'>
            <img src={require('../../assets/imgs/logo.png')} alt='books'></img>
          </a>
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              {Auth.loggedIn() ? (
                <>
                  <a className='button is-primary' href='/profile'>
                    <strong>My Books</strong>
                  </a>
                  <a className='button is-primary' onClick={Auth.logout} href='/'>
                    <strong>Logout</strong>
                  </a>
                </>
              ) : (
                  <>
                    <button className='button is-primary' onClick={() => setShowModal(true)}>
                      <strong>Login</strong>
                    </button>
                    <button className='button is-primary' onClick={() => {
                      setShowModal(true);
                      setShowLogin(false);
                    }}>
                      <strong>Sign up</strong>
                    </button>
                  </>
                )}
            </div>
          </div>
        </div>

      </nav>

      {/* modal */}
      <div className={showModal ? 'modal is-active' : 'modal'}>
        <div className='modal-background'></div>
        <div className='modal-card'>
          <header className='modal-card-head is-justify-content-space-between is-align-items-flex-start'>
            <div className='tabs'>
              <ul>
                <li className={showLogin ? 'is-active' : ''}>
                  <a onClick={() => setShowLogin(true)}>Login</a>
                </li>
                <li className={showLogin ? '' : 'is-active'}>
                  <a onClick={() => setShowLogin(false)}>Sign Up</a>
                </li>
              </ul>
            </div>
            <button className='delete' aria-label='close' onClick={() => setShowModal(false)}></button>
          </header>
          <section className='modal-card-body no-foot'>
            {showLogin ? <LoginForm handleModalClose={() => setShowModal(false)} /> :
              <SignUpForm handleModalClose={() => setShowModal(false)} />}
          </section>

        </div>
      </div>
    </>
  );
};

export default AppNavbar;
