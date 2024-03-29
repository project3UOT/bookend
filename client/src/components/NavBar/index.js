import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../SignupForm/index';
import LoginForm from '../LoginForm/index';

import Auth from '../../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand p-2'>
          <Link className='navbar-item' to='/'>
            <img src={require('../../assets/imgs/logo.png')} alt='books'></img>
          </Link>
          <button
            className={'navbar-burger' + (showMobileNav ? ' is-active' : '')}
            aria-label='menu'
            aria-expanded='false'
            onClick={() => { setShowMobileNav(!showMobileNav) }}>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </button>
        </div>

        <div className={'navbar-menu navbar-end' + (showMobileNav ? ' is-active is-justify-content-center' : '')}>
          <div className='navbar-item'>
            <div className='buttons'>
              {Auth.loggedIn() ? (
                <>
                  <Link className='button is-primary is-size-5' to='/profile'>
                    <strong>My Books</strong>
                  </Link>
                  <Link className='button is-primary is-size-5' onClick={Auth.logout} to='/'>
                    <strong>Logout</strong>
                  </Link>
                </>
              ) : (
                  <>
                    <button className='button is-primary is-size-4 is-size-5-mobile' onClick={() => setShowModal(true)}>
                      <strong>Login</strong>
                    </button>
                    <button className='button is-primary is-size-4 is-size-5-mobile' onClick={() => {
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
          <header className='modal-card-head modal-tabs is-justify-content-space-between is-align-items-flex-start'>
            <div className='tabs is-boxed is-fullwidth mb-0'>
              <ul>
                <li className={showLogin ? 'is-active' : ''}>
                  <button className='has-text-primary' onClick={() => setShowLogin(true)}>Login</button>
                </li>
                <li className={showLogin ? '' : 'is-active'}>
                  <button className='has-text-primary' onClick={() => setShowLogin(false)}>Sign Up</button>
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
